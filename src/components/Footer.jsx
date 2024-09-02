import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 py-6 px-4 sm:px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-gray-100 mb-2">SwatchMe</h3>
          <p className="text-gray-400 mb-4">
            Hola a todo el mundo! SwatchMe es un proyecto abierto a
            colaboraciones. Si te gustaría contribuir, por favor, no dudes en visitar
            el repo en GitHub.
          </p>
        </div>

        <div>
          <p className="text-gray-400 mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
            info@swatchme.com
          </p>
          <p className="text-gray-400 mb-4">
            <FontAwesomeIcon icon={faGlobe} className="mr-2" /> www.swatchme.com
          </p>

          <div className="border-t border-gray-700 pt-4 max-w-sm">
            <p className="text-gray-400 text-sm">
              Hecho con{" "}
              <FontAwesomeIcon icon={faHeart} className="text-pink-500 mx-2" />{" "}
              por Lucy~Dev
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Impulsado por Netlify
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
