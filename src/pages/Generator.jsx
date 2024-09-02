import { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHeart,
  faCopy,
  faArrowLeft,
  faPlay,
  faStop,
} from "@fortawesome/free-solid-svg-icons";

import { generateColors, getContrastColor } from "../utils/colorUtils";

const Generator = () => {
  const [colors, setColors] = useState(generateColors(5));
  const [isGenerating, setIsGenerating] = useState(false);
  const intervalRef = useRef(null);
  const [paletteHistory, setPaletteHistory] = useState([]);

  const handleGenerateNewPalette = useCallback(() => {
    setPaletteHistory((prevHistory) => [...prevHistory, colors]);
    setColors(generateColors(5));
  }, [colors]);

  const handleGoBack = useCallback(() => {
    if (paletteHistory.length > 0) {
      const newHistory = [...paletteHistory];
      const previousPalette = newHistory.pop();
      setPaletteHistory(newHistory);
      setColors(previousPalette);
    }
  }, [paletteHistory]);

  const toggleGenerating = useCallback(() => {
    setIsGenerating((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isGenerating) {
      intervalRef.current = setInterval(() => {
        handleGenerateNewPalette();
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isGenerating, handleGenerateNewPalette]);

  const copyToClipboard = useCallback(async (color) => {
    try {
      await navigator.clipboard.writeText(color);
      alert(`Color ${color} copiado al portapapeles!`);
    } catch (err) {
      console.error("Ha ocurrido un error: ", err);
    }
  }, []);

  return (
    <div className="p-6 bg-gray-900 min-h-screen flex flex-col items-center justify-start">
      <div className="max-w-1xl w-full mt-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-100">
          Genera ahora
        </h1>
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={handleGoBack}
            className="px-6 py-3 bg-gray-700 text-gray-100 rounded-lg border border-gray-600 flex items-center"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            onClick={handleGenerateNewPalette}
            className="px-6 py-3 bg-gray-600 text-gray-100 rounded-lg shadow-lg hover:bg-gray-700 transition"
          >
            Generar
          </button>
          <button
            onClick={toggleGenerating}
            className={`px-6 py-3 ${
              isGenerating ? "bg-red-400" : "bg-green-400"
            } text-gray-100 rounded-lg shadow-lg hover:bg-${
              isGenerating ? "red-700" : "green-700"
            } transition`}
          >
            <FontAwesomeIcon icon={isGenerating ? faStop : faPlay} />
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {colors.map((color, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center p-4 rounded-lg shadow-lg text-center flex-grow min-w-[150px] max-w-[200px] transition-transform transform hover:scale-105 hover:shadow-2xl group"
              style={{ backgroundColor: color }}
            >
              <FontAwesomeIcon
                icon={faHeart}
                className="absolute top-2 left-2 text-xl"
                style={{ color: getContrastColor(color) }}
              />
              <button
                onClick={() => copyToClipboard(color)}
                className="absolute top-1 right-2 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundColor: color,
                  color: getContrastColor(color),
                }}
              >
                <FontAwesomeIcon icon={faCopy} />
              </button>
              <div
                className="w-full h-40 rounded-lg"
                style={{ backgroundColor: color }}
              ></div>
              <p
                className="mt-4 text-lg font-bold transition-colors duration-300 ease-in-out"
                style={{ color: getContrastColor(color) }}
              >
                {color}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Generator;
