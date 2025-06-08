import skipImage from "../assets/skip.png";
import { motion } from "framer-motion";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import backgroundImage from "../assets/wewantwaste.png";

const selectedVariants = {
  initial: {
    scale: 1,
    boxShadow:
      "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
  },
  selected: {
    scale: 1.01,
    boxShadow: "0px 0px 12px rgba(14, 137, 116, 1)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const SkipCard = ({ skip, setSelected, selected }) => {
  const isSelected = selected && selected.id === skip.id;

  const handleSelect = (skip) => {
    if (!isSelected) {
      setSelected(skip);
    } else {
      setSelected(null);
    }
  };

  return (
    <motion.div
      onClick={() => handleSelect(skip)}
      variants={selectedVariants}
      initial="initial"
      animate={isSelected ? "selected" : "initial"}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      className={`
    border-2 border-black rounded-xl  pb-3 bg-white shadow-md justify-between max-w-xl cursor-pointer
    transition-all duration-300 
    ${isSelected ? "ring-2 ring-[#0e8974]" : "hover:shadow-lg"}
  `}
    >
      <div className="flex flex-col">
        <div
          className="w-full h-auto mx-auto rounded-t-xl mb-4 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <img
            src={skipImage}
            alt={skip.name}
            className="w-full h-28 rounded-t-xl "
          />
        </div>
        <div className="flex justify-between px-2">
          <span className="text-sm font-semibold md:text-lg text-gray-800">
            {skip.size} Yard Skip
          </span>
          <span className="text-xl font-bold text-[#0e8974]">
            £ {skip.price_before_vat}
          </span>
        </div>
        <span className="text-sm md:text-base text-gray-600 px-2">
          {skip.hire_period_days} day hire period
        </span>
      </div>
      <div className="flex items-center gap-2 mt-1 px-2">
        {skip?.allowed_on_road ? (
          <>
            <CheckCircleIcon className="w-5 h-5 text-green-600" />
            <span className="text-green-600 text-sm font-medium">
              Allowed on Road
            </span>
          </>
        ) : (
          <>
            <XCircleIcon className="w-5 h-5 text-red-500" />
            <span className="text-red-500 text-sm font-medium">
              Not Allowed on Road
            </span>
          </>
        )}
      </div>

      <div className="flex items-center justify-between mt-4 px-2 pb-2">
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            handleSelect(skip);
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2 bg-[#0e8974] text-white rounded-2xl shadow-md hover:bg-[#0c6f60] transition-all cursor-pointer duration-300 ease-in-out border-0 focus:outline-none focus:ring-2 focus:ring-[#0e8974]"
        >
          {isSelected ? "Selected" : "Select Skip"}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SkipCard;
