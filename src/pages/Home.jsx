import { motion } from "framer-motion";
import Banner from "../components/Banner";
import TrendingPalettes from "../components/TrendingPalettes";

const Home = () => {
  return (
    <div className="home">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Banner />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <TrendingPalettes />
      </motion.div>
    </div>
  );
};

export default Home;
