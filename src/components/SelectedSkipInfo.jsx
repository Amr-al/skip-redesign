import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"

function SelectedSkipInfo({selected, setSelected}) {
  return (
    <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-0 left-0 w-full bg-white px-4 md:px-8 py-2 shadow-md z-50"
          >
            <div className=" mx-auto flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0e8974] mb-2">
                  {selected.size} Yard Skip
                </h2>
                <p className="text-gray-700 text-sm sm:text-base mb-2 pr-4">
                  Imagery and information shown throughout this website may not reflect
                  the exact shape or size specification, colours may vary, options and/or
                  accessories may be featured at additional cost.
                </p>

                <div className="flex flex-wrap gap-4 text-sm sm:text-base">
                  <span>
                    <strong>Hire Period:</strong> {selected.hire_period_days} days
                  </span>
                  <span>
                    <strong>Price (before VAT):</strong> £{selected.price_before_vat}
                  </span>
                  <span>
                    <strong>Size:</strong> {selected.size} yards
                  </span>
                </div>
              </div>

              <div className="flex items-start md:items-center justify-end pr-8 gap-3 mt-4 md:mt-0">
                <button
                  onClick={() => setSelected(null)}
                  className="flex cursor-pointer items-center justify-center gap-1 w-full md:w-fit bg-black text-white hover:text-[#d1f5ea] px-4 py-2 rounded transition"
                >
                  <ArrowLeftIcon className="w-5 h-5" />
                  <span>Back</span>
                </button>
                <button
                  onClick={() => console.log("Continue")}
                  className="flex cursor-pointer items-center justify-center gap-1 w-full md:w-fit bg-[#0e8974] text-white hover:text-[#d1f5ea] px-4 py-2 rounded transition"
                >
                  <span>Continue</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
  )
}

export default SelectedSkipInfo