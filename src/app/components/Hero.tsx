"use client";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONTENT } from "../constants";

// Assuming you have a laptop image and a video source
// Replace these with your actual asset paths
const LAPTOP_IMAGE = "laptopimg.png"; // Transparent PNG of a laptop with screen area cut out or overlayable
const DEMO_VIDEO = "dockervideo.mp4"; // Your video file (MP4 recommended for web)

const Hero = () => {
  // Variants for extraordinary text animation (letter-by-letter reveal with bounce)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Stagger each letter
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotate: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  // Split title and subtitle into letters for animation
  const titleLetters = SITE_CONTENT.hero.title.split("");
  const subtitleLetters = SITE_CONTENT.hero.subtitle.split("");

  return (
    <section
      id="hero"
      className="min-h-screen bg-primary text-white flex items-center justify-center bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${SITE_CONTENT.hero.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>

      {/* Laptop Illusion Container */}
      <div className="relative w-full max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Animated Text in Custom Shaped Cards */}
        <div className="relative z-10 text-center md:text-left max-w-lg">
          {/* Title Card - Irregular shape (e.g., skewed parallelogram) */}
          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 mb-12 clip-parallelogram shadow-2xl mx-6"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-5xl font-bold px-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {titleLetters.map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          {/* Subtitle Card - Different shape (e.g., rounded with notch) */}
          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 clip-notch shadow-2xl"
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {subtitleLetters.map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* CTA Button with pulse effect */}
          <AnimatePresence>
            <motion.button
              className="mt-8 bg-accent text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-green-600 transition-colors"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px rgba(0, 255, 0, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {SITE_CONTENT.hero.cta}
            </motion.button>
          </AnimatePresence>
        </div>

        {/* Right Side: Laptop Illusion with Video */}
        <motion.div
          className="relative w-96 h-96  mt-10 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Laptop Image */}
          <img
            src={LAPTOP_IMAGE}
            alt="Laptop Mockup"
            className="w-full h-auto object-contain"
          />

          {/* Video Overlay on Screen - Adjust positioning based on your laptop image */}
          <div className="absolute top-[10%] left-[15%] w-[60%] h-[60%] overflow-hidden rounded-md shadow-inner">
            {" "}
            {/* Tune these percentages to fit the screen area */}
            <video
              src={DEMO_VIDEO}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
