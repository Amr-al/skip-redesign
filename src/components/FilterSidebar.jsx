import { useState } from "react";

const FilterSidebar = ({ onSortChange, onRoadFilterChange }) => {
  const [sortBy, setSortBy] = useState("");
  const [onRoadOnly, setOnRoadOnly] = useState(false);

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
    onSortChange(value);
  };

  const handleRoadFilterChange = (e) => {
    const checked = e.target.checked;
    setOnRoadOnly(checked);
    onRoadFilterChange(checked);
  };

  return (
    <aside className="w-full p-4 space-y-6">
      <div>
        <h3 className="font-bold text-lg mb-3">Sort By</h3>
        <div className="space-y-3">
          {/* Price Sorting */}
          <div>
            <h4 className="font-medium mb-2">Price</h4>
            <div className="space-y-2 pl-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sort"
                  value="price-asc"
                  checked={sortBy === "price-asc"}
                  onChange={handleSortChange}
                  className="w-4 h-4 accent-[#0e8974] text-[#0e8974] focus:ring-2 focus:ring-[#0e8974] transition duration-200"
                />
                Low to High
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sort"
                  value="price-desc"
                  checked={sortBy === "price-desc"}
                  onChange={handleSortChange}
                  className="w-4 h-4 accent-[#0e8974] text-[#0e8974] focus:ring-2 focus:ring-[#0e8974] transition duration-200"
                />
                High to Low
              </label>
            </div>
          </div>

          {/* Size Sorting */}
          <div>
            <h4 className="font-medium mb-2">Size</h4>
            <div className="space-y-2 pl-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sort"
                  value="size-asc"
                  checked={sortBy === "size-asc"}
                  onChange={handleSortChange}
                  className="w-4 h-4 accent-[#0e8974] text-[#0e8974] focus:ring-2 focus:ring-[#0e8974] transition duration-200"
                />
                Small to Large
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sort"
                  value="size-desc"
                  checked={sortBy === "size-desc"}
                  onChange={handleSortChange}
                  className="w-4 h-4 accent-[#0e8974] text-[#0e8974] focus:ring-2 focus:ring-[#0e8974] transition duration-200"
                />
                Large to Small
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* On Road Filter */}
      <div>
        <h3 className="font-bold text-lg mb-3">Filters</h3>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={onRoadOnly}
            onChange={handleRoadFilterChange}
            className="w-4 h-4 accent-[#0e8974] text-[#0e8974] focus:ring-2 focus:ring-[#0e8974] transition duration-200 rounded"
          />
          On Road Allowed Only
        </label>
      </div>

    
      <button
        onClick={() => {
          setSortBy("");
          setOnRoadOnly(false);
          onSortChange("");
          onRoadFilterChange(false);
        }}
        className="px-4 py-2 bg-red-500 border-0 text-white cursor-pointer rounded-lg hover:bg-gray-300 transition-all duration-200 shadow-sm"
      >
        Reset
      </button>
    </aside>
  );
};

export default FilterSidebar;
