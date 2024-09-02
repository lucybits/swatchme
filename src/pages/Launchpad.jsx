import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPalette,
  faSearch,
  faFileExport,
} from "@fortawesome/free-solid-svg-icons";

import {
  handleMouseEnter,
  handleMouseMove,
  handleMouseLeave,
} from "../utils/launchColorsUtils";

const Launchpad = () => {
  const [tooltip, setTooltip] = useState({
    show: false,
    color: "",
    hex: "",
    x: 0,
    y: 0,
  });

  const colors = [
    { name: "Flamingo Pink", hex: "#FC5C65" },
    { name: "Turquoise", hex: "#2EC4B6" },
    { name: "Sunshine Yellow", hex: "#FFD700" },
    { name: "Coral Red", hex: "#FF6F61" },
    { name: "Tangerine Orange", hex: "#FFA500" },
    { name: "Electric Violet", hex: "#8A2BE2" },
    { name: "Mint Green", hex: "#3EB489" },
    { name: "Azure Sky", hex: "#007FFF" },
    { name: "Fuchsia Pink", hex: "#FF00FF" },
    { name: "Emerald Green", hex: "#50C878" },
    { name: "Lemon Yellow", hex: "#FFF44F" },
    { name: "Royal Blue", hex: "#4169E1" },
    { name: "Cordovan", hex: "#873D48" },
    { name: "Vivid Blue", hex: "#00CCFF" },
    { name: "Magenta", hex: "#FF00FF" },
    { name: "Crimson Red", hex: "#DC143C" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-4xl w-full flex h-2/3">
        <div className="w-1/2 pr-12 flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-100">
            <span className="bg-clip-text text-transparent">
              <span className="text-green-400">Swatch</span>
              <span className="text-rose-300">Me</span>
            </span>
          </h1>
          <p className="text-gray-300 text-xl mb-4 leading-relaxed">
            Obtén bonitas paleta de colores para lo que sea
          </p>
          <ul className="mb-4 text-gray-300 text-base">
            <li className="mb-2 flex items-center">
              <FontAwesomeIcon
                icon={faPalette}
                className="mr-2 text-gray-400"
              />
              Crea paletas personalizadas
            </li>
            <li className="mb-2 flex items-center">
              <FontAwesomeIcon icon={faSearch} className="mr-2 text-gray-400" />
              Busca bonitas combinaciones de colores
            </li>
            <li className="mb-2 flex items-center">
              <FontAwesomeIcon
                icon={faFileExport}
                className="mr-2 text-gray-400"
              />
              Copia o guarda paletas de colores
            </li>
          </ul>
          <div>
            <a
              href="/home"
              className="bg-gray-600 text-white font-bold py-3 px-10 rounded-full text-base transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg inline-block"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <div className="grid grid-cols-4 gap-2 w-full h-full rounded-xl overflow-hidden">
            {colors.map((color, index) => (
              <div
                key={index}
                className="relative aspect-square transform transition-transform duration-300 hover:scale-105"
                style={{ backgroundColor: color.hex }}
                onMouseEnter={() => handleMouseEnter(color, setTooltip)}
                onMouseMove={(event) => handleMouseMove(event, setTooltip)}
                onMouseLeave={() => handleMouseLeave(setTooltip)}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {tooltip.show && (
        <div
          className="fixed px-2 py-1 bg-gray-900 text-white text-sm rounded"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.color} ({tooltip.hex})
        </div>
      )}
    </div>
  );
};

export default Launchpad;
