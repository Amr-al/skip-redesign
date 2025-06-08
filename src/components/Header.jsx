import { motion } from "framer-motion";
import backgroundImage from "../assets/background.png";

// Replace this with your image's actual aspect ratio (width / height)
const ASPECT_RATIO = 3; // ~1.78 (16:9)

const Header = () => {
  return (
    <>
      <div
        className="w-full relative"
        style={{ paddingTop: `${100 / ASPECT_RATIO}%` }}
      >
        {/* Image fills container and scales to contain */}
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <motion.h1
            className="text-white text-xl sm:text-2xl md:text-3xl font-bold text-center max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Choose Your Skip Size
          </motion.h1>
        </div>
      </div>
      <h2 className="text-center text-2xl md:text-3xl font-bold text-black mb-6 px-3">
        Select the <span className="text-[#FFD700]">skip size</span> that best
        suits your needs
      </h2>
    </>
  );
};

export default Header;
