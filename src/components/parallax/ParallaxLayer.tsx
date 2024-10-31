// src/components/ParallaxLayer.tsx
import React from "react";
import { motion } from "framer-motion";

const ParallaxLayer: React.FC<{
  backgroundImage: string;
  sensitivity: number;
  mousePosition: { x: number; y: number };
}> = ({ backgroundImage, sensitivity, mousePosition }) => {
  return (
    <motion.div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPositionX: `${mousePosition.x * sensitivity * 30}px`, // Adjust sensitivity scaling
      }}
    />
  );
};

export default ParallaxLayer;
