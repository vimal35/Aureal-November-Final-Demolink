import { motion } from "framer-motion";

const DIRECTIONS = {
  up: { x: 0, y: 56 },
  down: { x: 0, y: -48 },
  left: { x: 64, y: 20 },
  right: { x: -64, y: 20 },
  none: { x: 0, y: 0 },
};

// Smooth, intentional premium curve
const PREMIUM_EASE = [0.22, 1, 0.36, 1];

/**
 * ScrollReveal
 * Waits until the block enters the viewport, then plays a
 * 0.75–1s elegant entrance (fade + rise/slide + scale + blur).
 */
const ScrollReveal = ({
  children,
  delay = 0.2,
  direction = "up",
  className = "",
  duration = 0.9,
  stagger = 0,
  scale = 0.97,
  blur = 10,
  once = true,
  amount = 0.2,
  as = "div",
  style = {},
}) => {
  const offset = DIRECTIONS[direction] || DIRECTIONS.up;
  const MotionTag = motion[as] || motion.div;

  const variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      scale,
      filter: `blur(${blur}px)`,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration,
        delay,
        ease: PREMIUM_EASE,
        ...(stagger > 0
          ? { staggerChildren: stagger, delayChildren: delay }
          : {}),
      },
    },
  };

  return (
    <MotionTag
      className={className}
      style={{ willChange: "transform, opacity, filter", ...style }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </MotionTag>
  );
};

/**
 * ScrollItem – child of a staggered ScrollReveal parent.
 * Use for independent text / image timing inside one section.
 */
export const ScrollItem = ({
  children,
  className = "",
  direction = "up",
  duration = 0.8,
  scale = 0.98,
  blur = 8,
  as = "div",
  style = {},
}) => {
  const offset = DIRECTIONS[direction] || DIRECTIONS.up;
  const MotionTag = motion[as] || motion.div;

  const variants = {
    hidden: {
      opacity: 0,
      x: offset.x * 0.6,
      y: offset.y * 0.7,
      scale,
      filter: `blur(${blur}px)`,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration,
        ease: PREMIUM_EASE,
      },
    },
  };

  return (
    <MotionTag
      className={className}
      style={{ willChange: "transform, opacity, filter", ...style }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
};

/**
 * ScrollImage – image reveal with soft scale + rise + blur-to-sharp
 */
export const ScrollImage = ({
  children,
  className = "",
  delay = 0.35,
  direction = "up",
  duration = 1,
  once = true,
  amount = 0.15,
}) => {
  const offset = DIRECTIONS[direction] || DIRECTIONS.up;

  return (
    <motion.div
      className={className}
      style={{ willChange: "transform, opacity, filter", overflow: "hidden" }}
      initial={{
        opacity: 0,
        y: offset.y || 40,
        x: offset.x || 0,
        scale: 1.06,
        filter: "blur(12px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          duration,
          delay,
          ease: PREMIUM_EASE,
        },
      }}
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
    >
      {children}
    </motion.div>
  );
};

/**
 * ScrollParallax – light parallax drift while in view
 */
export const ScrollParallax = ({
  children,
  className = "",
  strength = 28,
  delay = 0.15,
  duration = 0.9,
}) => {
  return (
    <motion.div
      className={className}
      style={{ willChange: "transform, opacity, filter" }}
      initial={{
        opacity: 0,
        y: 48,
        filter: "blur(8px)",
        scale: 0.98,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        transition: {
          duration,
          delay,
          ease: PREMIUM_EASE,
        },
      }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
    >
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: [-strength * 0.25, strength * 0.15] }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 1.4,
          ease: PREMIUM_EASE,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ScrollReveal;