import { useEffect, useState } from "react";
import Header from "../components/Header";
import FilterSidebar from "../components/FilterSidebar";
import SkipCard from "../components/SkipCard";
import { motion } from "framer-motion";
import SelectedSkipInfo from "../components/SelectedSkipInfo";
import { FilterIcon, XIcon } from "@heroicons/react/solid";
import NavBar from "../components/NavBar";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const ChooseSkipPage = () => {
  const [skips, setSkips] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  

  useEffect(() => {
    fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    )
      .then((res) => res.json())
      .then((data) => setSkips(data));
  }, []);

  return (
    <>
      <NavBar/>
      <Header />

      {/* Filter Toggle Button (mobile only) */}
      <div className="md:hidden px-4">
        <button
          className="flex items-center gap-2 text-white bg-[#0e8974] px-4 py-2 rounded-md mb-4"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          {showFilter ? <XIcon className="h-5 w-5" /> : <FilterIcon className="h-5 w-5" />}
          {showFilter ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      <div className="flex flex-col md:flex-row px-4 md:px-8 py-6 gap-6">
        {/* Sidebar for md+ screens OR conditionally shown on mobile */}
        {(showFilter || window.innerWidth >= 768) && (
          <div className={`${showFilter ? "block" : "hidden"} md:block w-full md:w-1/4`}>
            <FilterSidebar />
          </div>
        )}

        {/* Skip cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {skips.map((skip, index) => (
            <motion.div
              key={skip.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
            >
              <SkipCard
                skip={skip}
                setSelected={setSelected}
                selected={selected}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <SelectedSkipInfo selected={selected} setSelected={setSelected} />
    </>
  );
};

export default ChooseSkipPage;
