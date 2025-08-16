"use client";
import { motion } from "framer-motion";
import { SITE_CONTENT } from "../constants";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-primary text-white flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${SITE_CONTENT.hero.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
      <div className="relative text-center max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {SITE_CONTENT.hero.title}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {SITE_CONTENT.hero.subtitle}
        </motion.p>
        <motion.button
          className="bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {SITE_CONTENT.hero.cta}
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
