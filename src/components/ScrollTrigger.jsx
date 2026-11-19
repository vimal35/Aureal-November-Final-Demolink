import { useEffect, useRef, useState, Children, cloneElement, isValidElement } from "react";
import "./ScrollTrigger.css";


export default function ScrollTrigger({
  children,
  animation = "fade-up",
  delay = 0.15,
  duration = 0.85,
  stagger = 0.12,
  threshold = 0.18,
  once = true,
  className = "",
  as: Tag = "div",
  childSelector = false,
  parallaxStrength = 0.12,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  // Subtle parallax while section is in view
  useEffect(() => {
    if (animation !== "parallax" || !isVisible) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const viewH = window.innerHeight || 1;
        const progress = (rect.top + rect.height / 2 - viewH / 2) / viewH;
        setParallaxY(progress * parallaxStrength * 100);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [animation, isVisible, parallaxStrength]);

  const baseStyle = {
    "--st-duration": `${duration}s`,
    "--st-delay": `${delay}s`,
    "--st-stagger": `${stagger}s`,
    ...(animation === "parallax"
      ? { transform: `translate3d(0, ${parallaxY}px, 0)` }
      : {}),
  };

  // Stagger direct children when requested
  const content =
    childSelector && isVisible
      ? Children.map(children, (child, i) => {
          if (!isValidElement(child)) return child;
          return cloneElement(child, {
            className: [child.props.className, "st-child"].filter(Boolean).join(" "),
            style: {
              ...child.props.style,
              "--st-child-index": i,
            },
          });
        })
      : children;

  return (
    <Tag
      ref={ref}
      className={[
        "st-section",
        `st-${animation}`,
        isVisible ? "st-visible" : "st-hidden",
        childSelector ? "st-stagger-children" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={baseStyle}
    >
      {content}
    </Tag>
  );
}

/**
 * ScrollItem – wrap individual text blocks or images inside a section
 * for independent timing without changing component internals.
 */
export function ScrollItem({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.85,
  className = "",
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={[
        "st-item",
        `st-${animation}`,
        isVisible ? "st-visible" : "st-hidden",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        "--st-duration": `${duration}s`,
        "--st-delay": `${delay}s`,
      }}
    >
      {children}
    </Tag>
  );
}