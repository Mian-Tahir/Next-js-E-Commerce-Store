import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md m-5">
      <div className="bg-white">
        <Skeleton
          height={320}
          className="object-contain h-80 transition-transform duration-300 hover:scale-110 cursor-pointer"
        />
      </div>
      <div className="text-xl font-bold overflow-hidden overflow-ellipsis whitespace-nowrap">
        <h2>
          <Skeleton height={24} className="text-gray-500 text-sm" />
        </h2>

        <p>
          <Skeleton
            height={20}
            width="50%"
            className="text-gray-900 text-lg font-semibold mt-2"
          />
        </p>

        <p>
          <Skeleton height={25} width="50%" className="text-gray-700" />
        </p>
        <div className="mt-4">
          <span className="text-gray-700"> </span>

          <span className=" text-white font-bold py-2 px-4 rounded">
            <Skeleton width={50} />
          </span>
          <br />

          <Skeleton height={38} width={140} />
        </div>
      </div>
    </div>
  );
};

export { ProductCardSkeleton };

const SkeletonLoader = () => {
  return (
    <div className="">
      {Array.from({ length: 8 }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default SkeletonLoader;
