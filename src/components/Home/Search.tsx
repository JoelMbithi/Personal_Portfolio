import React from "react";
import { motion } from "framer-motion";

const Search = () => {
  return (
    <motion.div
      className="flex justify-center mb-12 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <input
        type="text"
        placeholder="Search projects by title or tech..."
       /*  value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} */
        className="w-full max-w-lg px-6 py-3 rounded-l-full border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-0"
      />
      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-r-full transition-all duration-300">
        Search
      </button>
    </motion.div>
  );
};

export default Search;
