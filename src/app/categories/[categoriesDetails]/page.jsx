"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryDetails } from "../../store/categories/categoriesThunk";
import Layout from "../../components/defaultlayout";
import { usePathname } from "next/navigation";
import CategoryDetailsSkeleton from "../../components/categoryDetailsSkelton";

const CategoryDetails = () => {
  const dispatch = useDispatch();
  const { categoryDetails, status, error } = useSelector(
    (state) => state.categories
  );
  const pathname = usePathname();

  useEffect(() => {
    const name = pathname.split("/").pop();
    dispatch(fetchCategoryDetails(name));
  }, [dispatch, pathname]);

  if (status === "loading")
    return (
      <Layout>
    <CategoryDetailsSkeleton/>
      </Layout>
    );
  if (status === "failed")
    return (
      <Layout>
        <p>Error: {error}</p>
      </Layout>
    );

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
        {categoryDetails.map((item) => (
          <div className="   m-5">
            <div className=" bg-white ">
              <img
                className="object-contain h-80 transition-transform duration-300 hover:scale-110 cursor-pointer"
                src={item.image}
                alt={item.title}
                onClick={() => (window.location.href = `/products/${item.id}`)}
              />
            </div>
            <div
              key={item.id}
              className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden m-5"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold overflow-hidden overflow-ellipsis whitespace-nowrap">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm font-semibold mt-2">
                  {item.category}
                </p>
                <p className="text-gray-900 text-lg font-semibold mt-2">
                  ${item.price}
                </p>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() =>
                    (window.location.href = `/products/${item.id}`)
                  }
                >
                  Product Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default CategoryDetails;
