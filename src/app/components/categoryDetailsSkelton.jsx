import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CategoryDetailsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
      {Array(5)
        .fill()
        .map((_, index) => (
          <div key={index} className="m-5">
            <div className="bg-white">
              <Skeleton
                height={350}
                className="transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden m-5">
              <div className="p-6">
                <Skeleton height={24} className="mb-2" />
                <Skeleton height={20} width={`50%`} className="mb-2" />
                <Skeleton height={28} width={`40%`} className="mb-4" />
                <Skeleton height={36} width={`75%`} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CategoryDetailsSkeleton;
