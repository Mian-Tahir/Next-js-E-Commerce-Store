"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ProductCard = ({ id, title, image, price, category, rating }) => {
  const router = useRouter();

  const handleProductDetails = () => {
    router.push(`/products/${id}`);
  };

  return (
    <div className=" bg-white rounded-xl shadow-md  m-5">
      <div className=" bg-white ">
        <img
          className=" object-contain h-80 transition-transform duration-300 hover:scale-110 cursor-pointer"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold overflow-hidden overflow-ellipsis whitespace-nowrap ">
          {title}
        </h2>
        <p className="text-gray-500 text-sm">{category}</p>
        <p className="text-gray-900 text-lg font-semibold mt-2">${price}</p>
        <div className="mt-4">
          <span className="text-gray-700">Rating: </span>
          <span className="text-gray-500">({rating.count} Count)</span>
          <br />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleProductDetails}
          >
            Product Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
