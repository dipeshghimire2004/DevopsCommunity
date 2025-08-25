"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface CardProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, description, image }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden mx-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.005, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
    >
      <Image src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        {subtitle && <p className="text-accent mt-1">{subtitle}</p>}
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;
