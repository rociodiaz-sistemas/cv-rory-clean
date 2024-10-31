// src/components/ParallaxLayers.tsx
import { useEffect, useState } from "react";
import ParallaxLayer from "./ParallaxLayer";
import { layersConfig } from "./LayersConfig";

const ParallaxLayers: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse movement and update position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth - 0.5) * 2, // Value between -1 and 1
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {" "}
      {/* Add this div */}
      {/* Map over the config to generate layers */}
      {layersConfig.map((layer, index) => (
        <ParallaxLayer
          key={index}
          backgroundImage={layer.image}
          sensitivity={index + 1} // You can adjust this to control the parallax effect
          mousePosition={mousePosition}
        />
      ))}
    </>
  );
};

export default ParallaxLayers;
