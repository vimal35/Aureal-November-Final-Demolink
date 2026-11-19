import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";
import Hero from "../components/Hero";
import Map from "../components/map";
import Drop from "../components/Drop";
import Form from "../components/Form";
import Social from "../components/Social";

gsap.registerPlugin(ScrollTrigger);

function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const tween = gsap.to(barRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.2,
      },
    });

    return () => tween.kill();
  }, []);

  return <div className="scroll-progress" ref={barRef} aria-hidden="true" />;
}

export default function ContactUs() {
  return (
    <div className="aureal-contact">
      <ScrollProgress />
      <Form />
      <Hero />
      <Drop />
      <Map />
      <Social />
    </div>
  );
}
