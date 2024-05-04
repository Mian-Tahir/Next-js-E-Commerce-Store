import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetailsSkeleton = () => {
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <Skeleton height={30} width={`50%`} className="mb-4" />
      <Skeleton height={400} className="mb-4" />
      <Skeleton height={20} width={`30%`} className="mb-2" />
      <Skeleton count={3} height={20} className="mb-2" />
      <Skeleton height={25} width={`25%`} className="mb-4" />
      <Skeleton height={45} width={`25%`} />
    </div>
  );
};

export default ProductDetailsSkeleton;
