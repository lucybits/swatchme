import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" },
};

const Banner = () => (
  <motion.div
    className="bg-gradient-to-br from-[#3A0D60] to-[#B84D8E] p-12 min-h-[70vh] w-full sm:w-11/12 md:w-5/6 lg:w-3/4 mx-auto my-5 flex flex-col justify-center rounded-lg"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={fadeIn.transition}
  >
    <motion.h1
      className="text-[#F9AAB0] text-4xl sm:text-5xl md:text-6xl font-black text-center mb-4 leading-relaxed"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...fadeIn.transition, delay: 0.2 }}
    >
      Bienvenido!
    </motion.h1>
    <motion.p
      className="text-[#F9AAB0] text-lg sm:text-xl text-center font-bold mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...fadeIn.transition, delay: 0.4 }}
    >
      ¿Qué vamos a diseñar?
    </motion.p>
    <div className="text-[#E0E0E0] text-center max-w-xl mx-auto flex flex-col sm:flex-row">
      <motion.div
        className="flex-1 mb-4 sm:mb-0 sm:pr-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...fadeIn.transition, delay: 0.6 }}
      >
        <p className="text-sm sm:text-base mb-2 leading-relaxed">
          SwatchMe! redefine la creación de paletas de colores con una bonita
          interfaz y fácil de usar que hace que generar y gestionar paletas
          sea un proceso sin esfuerzo.
        </p>
      </motion.div>
      {/* Divisor con gradiente */}
      <div className="hidden sm:block w-px self-stretch mx-4 bg-gradient-to-b from-[#B84D8E] via-[#FFC0CB] to-[#B84D8E]"></div>
      <motion.div
        className="flex-1 mb-4 sm:mb-0 sm:pl-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...fadeIn.transition, delay: 0.8 }}
      >
        <p className="text-sm sm:text-base mb-2 leading-relaxed">
          Descubre variedades de colores, inspírate ahora mismo, y observa
          actualizaciones en tiempo real para optimizar el proceso de diseño.
        </p>
      </motion.div>
    </div>
    <motion.div
      className="text-center mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ...fadeIn.transition, delay: 1 }}
    >
      <a
        href="https://github.com/your-repo"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-gray-900 text-white py-3 px-6 rounded-full transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="mr-2 text-lg sm:text-xl animate-bounce"
        />
        <span className="text-base sm:text-lg font-bold leading-relaxed">
          Ver en GitHub
        </span>
      </a>
    </motion.div>
  </motion.div>
);

export default Banner;