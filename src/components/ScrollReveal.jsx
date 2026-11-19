import { motion } from "framer-motion";

const ScrollReveal = ({
  children,
  delay = 0.75,
  direction = "up",
  className = "",
  duration = 0.95,
  staggerChildren = 0,
  parallax = 0,
  rotate = 0,
  scale = 0.97,
  blur = 8,
  once = true,
  threshold = 0.2,
}) => {
  const directions = {
    up: { y: 65, x: 0 },
    down: { y: -65, x: 0 },
    left: { y: 0, x: 70 },
    right: { y: 0, x: -70 },
    none: { y: 0, x: 0 },
  };

  const initial = directions[direction] || directions.up;

  // Premium easing curve (very refined)
  const premiumEase = [0.21, 0.92, 0.3, 1];

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: initial.x,
      y: initial.y,
      scale: scale,
      filter: `blur(${blur}px)`,
      rotate: rotate,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      rotate: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: premiumEase,
        staggerChildren: staggerChildren > 0 ? staggerChildren : 0,
        when: "beforeChildren",
      },
    },
  };

  const childVariants = staggerChildren
    ? {
        hidden: {
          opacity: 0,
          y: 25,
          filter: "blur(6px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.7,
            ease: premiumEase,
          },
        },
      }
    : {};

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: once,
        amount: threshold,
        margin: "-50px 0px -50px 0px",
      }}
      style={{
        willChange: "transform, opacity, filter",
      }}
      // Subtle parallax effect (if enabled)
      {...(parallax !== 0 && {
        whileInView: {
          y: [initial.y, initial.y * (1 - parallax)],
        },
      })}
    >
      {staggerChildren ? (
        <motion.div variants={childVariants}>{children}</motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
};

export default ScrollReveal;