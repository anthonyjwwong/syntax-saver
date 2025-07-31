import React from "react";

const Searchbar = () => {
  return (
    <div className="bg-white py-4 shadow-sm md:hidden">
      <input
        className="border mx-auto block w-[90%] rounded-md py-2 px-2 bg-gray-100 border-gray-200"
        type="text"
        placeholder="Search snippets..."
      />
    </div>
  );
};

export default Searchbar;
