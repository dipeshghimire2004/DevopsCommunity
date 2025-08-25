"use client";
import { motion, Variants } from "framer-motion";
import { useState, useRef } from "react";
import { SITE_CONTENT } from "../constants";

// Video and image paths
const DEMO_VIDEO = "dockervideo.mp4";

interface VideoCardProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onHover: (isHovered: boolean) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  isPlaying,
  onTogglePlay,
  onHover,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayToggle = (): void => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
    onTogglePlay();
  };

  return (
    <motion.div
      className="relative bg-green-900/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 cursor-pointer group"
      whileHover={{ scale: 1.02, y: -10 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => onHover(true)}
      onHoverEnd={() => onHover(false)}
      initial={{ opacity: 0, rotateX: -15 }}
      animate={{ opacity: 1, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Video Container */}
      <div className="relative overflow-hidden rounded-xl shadow-inner">
        <video
          ref={videoRef}
          src={DEMO_VIDEO}
          loop
          muted
          playsInline
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          onClick={handlePlayToggle}
        />

        {/* Play/Pause Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/30 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isPlaying ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white/90 rounded-full p-4 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePlayToggle}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gray-800"
            >
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Interactive dots indicator */}
        <div className="absolute bottom-4 left-4 flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-white/60 rounded-full"
              animate={{
                scale: isPlaying ? [1, 1.2, 1] : 1,
                opacity: isPlaying ? [0.6, 1, 0.6] : 0.6,
              }}
              transition={{
                duration: 1.5,
                repeat: isPlaying ? Infinity : 0,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Card Title */}
      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-white mb-2">Demo Preview</h3>
        <p className="text-white/80 text-sm">
          Click to {isPlaying ? "pause" : "play"}
        </p>
      </motion.div>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [isVideoHovered, setIsVideoHovered] = useState<boolean>(false);
  const [activeTextAnimation, setActiveTextAnimation] = useState<boolean>(true);

  // Variants for text animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotate: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
      },
    },
  };

  // Interactive text effects
  const handleTextClick = (): void => {
    setActiveTextAnimation(!activeTextAnimation);
  };

  // Split text into letters
  const titleLetters = SITE_CONTENT.hero.title.split("");
  const subtitleLetters = SITE_CONTENT.hero.subtitle.split("");

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side: Interactive Text */}
        <div className="relative z-10 text-center lg:text-left max-w-xl">
          {/* Title Card */}
          <motion.div
            className="bg-white/10 backdrop-blur-md p-8 mb-8 rounded-2xl shadow-2xl border border-white/20 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.02, rotateY: 2 }}
            onClick={handleTextClick}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              variants={containerVariants}
              initial="hidden"
              animate={activeTextAnimation ? "visible" : "hidden"}
              key={activeTextAnimation ? "active" : "inactive"}
            >
              {titleLetters.map((letter, index) => (
                <motion.span
                  key={`${activeTextAnimation}-${index}`}
                  variants={letterVariants}
                  whileHover={{ scale: 1.2, color: "#10f59a" }}
                  className="inline-block transition-colors"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          {/* Subtitle Card */}
          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-2xl border border-white/20"
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.02, rotateY: -2 }}
          >
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-white/90"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {subtitleLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  whileHover={{ scale: 1.1, color: "#fbbf24" }}
                  className="inline-block transition-colors"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Interactive CTA Button */}
          <motion.button
            className="mt-8 bg-gradient-to-r from-green-500 to-blue-500 text-white px-10 py-4 rounded-full font-semibold shadow-lg relative overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(16, 245, 154, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">{SITE_CONTENT.hero.cta}</span>
          </motion.button>
        </div>

        {/* Right Side: Interactive Video Card */}
        <motion.div
          className="relative max-w-md w-full"
          animate={{
            y: isVideoHovered ? -5 : 0,
            rotateY: isVideoHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <VideoCard
            isPlaying={isVideoPlaying}
            onTogglePlay={() => setIsVideoPlaying(!isVideoPlaying)}
            onHover={setIsVideoHovered}
          />
        </motion.div>
      </div>

      {/* Floating interactive elements */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 bg-green-500/20 rounded-full backdrop-blur-sm border border-green-500/30"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-12 h-12 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-500/30"
        animate={{ rotate: -360, scale: [1, 0.8, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero;
