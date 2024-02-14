import React from "react";

const MappingLoading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 p-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <div
          key={item}
          className="w-full h-64 bg-gray-400 dark:bg-gray-600 animate-pulse shadow-lg flex gap-3 p-5 rounded"
        >
          {/* avatar loading */}
          <div className="w-20 h-20 bg-gray-200 animate-pulse shadow-lg rounded-full"></div>

          {/* name loading */}
          <div className="flex flex-col gap-4 flex-1 justify-around">
            <div className="w-full h-3 bg-gray-200 animate-pulse"></div>
            <div className="w-full h-3 bg-gray-200 animate-pulse"></div>
            <div className="w-full h-3 bg-gray-200 animate-pulse"></div>
            <div className="w-full h-3 bg-gray-200 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MappingLoading;
