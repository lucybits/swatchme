import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Trending = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    try {
      navigate("/home");
    } catch (error) {
      console.error("Error navigating back:", error);
    }
  };

  const animationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  };

  const textAnimationProps = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1 },
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gray-900 px-4 sm:px-6 lg:px-8"
      {...animationProps}
    >
      <div className="text-center max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl w-full">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-100"
          {...textAnimationProps}
          transition={{ ...textAnimationProps.transition, delay: 0.2 }}
        >
          Oops! Página en Construcción
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-gray-400 mb-4"
          {...textAnimationProps}
          transition={{ ...textAnimationProps.transition, delay: 0.4 }}
        >
          ¡Estamos trabajando en algo increíble! Mientras tanto, ¿por qué no
          vuelves al inicio?
        </motion.p>
        <motion.div
          className="mb-6"
          {...textAnimationProps}
          transition={{ ...textAnimationProps.transition, delay: 0.6 }}
        >
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/paint-bucket-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--color-drop-builder-tool-pack-construction-tools-illustrations-4183771.png?f=webp"
            alt="Balde de pintura"
            className="w-48 sm:w-64 md:w-72 lg:w-80 mx-auto mb-4 opacity-80"
          />
        </motion.div>
        <motion.button
          onClick={handleGoBack}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-10 rounded-full 
          text-base sm:text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block"
          aria-label="Regresar a inicio"
          {...textAnimationProps}
          transition={{ ...textAnimationProps.transition, delay: 0.6 }}
        >
          Regresar a Inicio
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Trending;