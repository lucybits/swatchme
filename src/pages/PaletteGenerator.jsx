import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PaletteGenerator = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex items-center
     justify-center p-4"
    >
      <motion.div
        className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-xl mt-1"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl font-bold text-center mb-6 text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Vamos a crear magia!
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          Genera paletas de colores impresionantes con solo un clic.
        </motion.p>
        <div className="space-y-6">
          <motion.div
            className="bg-gray-700 p-6 rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-pink-300 mb-4">
              Cómo funciona:
            </h2>
            <ol className="list-decimal list-inside text-pink-300 space-y-2">
              <li>Haz clic en el botón Generar paleta</li>
              <li>Busca tu combinación de colores preferida</li>
              <li>Guarda o genera de nuevo cómo quieras!</li>
            </ol>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <Link to="/palette-generator/generator">
              <button
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-gray-100
               font-bold py-3 px-6 rounded-full text-lg transition-transform duration-300
                ease-in-out hover:scale-105 flex items-center justify-center"
              >
                Generar paleta
                <span
                  className="ml-3 bg-purple-900 text-purple-300 text-xs font-semibold 
                px-2 py-0.5 rounded-full"
                >
                  FREE
                </span>
              </button>
            </Link>
          </motion.div>
          <motion.div
            className="flex justify-center items-center space-x-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
          >
            <a
              href="/home"
              className="text-pink-400 hover:text-pink-300 font-semibold text-lg 
              transition duration-300 ease-in-out flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Volver a Inicio
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PaletteGenerator;
