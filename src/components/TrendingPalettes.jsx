import { useState } from "react";
import { motion } from "framer-motion";

const TrendingPalettes = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const palettes = [
    {
      name: "Vibrant Fusion",
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
    },
    {
      name: "Natures Harmony",
      gradient: "from-teal-400 via-emerald-500 to-green-500",
    },
    {
      name: "Warm Sunset",
      gradient: "from-amber-400 via-orange-500 to-red-500",
    },
    { name: "Ocean Breeze", gradient: "from-blue-400 via-cyan-500 to-sky-600" },
    {
      name: "Fancy Cherry",
      gradient: "from-[#940018] via-[#DC143C] to-[#FF405F]",
    },
    {
      name: "Citrus Splash",
      gradient: "from-yellow-400 via-lime-500 to-green-500",
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-4xl font-semibold text-gray-200">Trending Color Palettes</h2>
          <div className="relative">
            {showTooltip && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-sm rounded">
                Proximamente
              </div>
            )}
            <button
              onClick={() => setShowTooltip(!showTooltip)}
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Ver más
            </button>
          </div>
        </div>
        <p className="text-lg text-gray-300 mb-5 max-w-4xl">
          Descubre las últimas tendencias de color que están dando forma al diseño y la moda. Nuestra
          selección curada de paletas de tendencia ofrece inspiración fresca para
          tu próximo proyecto.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {palettes.map((palette, index) => (
            <motion.div
              key={index}
              className="p-3 rounded-lg cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              <div
                className={`h-24 bg-gradient-to-r ${palette.gradient} rounded-md mb-2`}
                style={{
                  boxShadow:
                    hoveredIndex === index
                      ? "0 10px 20px rgba(0,0,0,0.5)"
                      : "none",
                }}
              ></div>
              <p className="text-sm text-gray-400">{palette.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPalettes;