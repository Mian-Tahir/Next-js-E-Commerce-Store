"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/categories/categoriesThunk";
import Layout from "../components/defaultlayout";
import { useRouter } from "next/navigation";
import CategoriesSkeleton from "../components/categoriesSkelton";

const Categories = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { categories, status, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  if (status === "loading")
    return (
      <Layout>
        <CategoriesSkeleton />
      </Layout>
    );
  if (status === "failed")
    return (
      <Layout>
        <p>Error: {error}</p>
      </Layout>
    );

  const handleCategoryClick = (name) => {
    router.push(`/categories/${name}`);
  };

  return (
    <Layout>
      <div className="text-3xl text-center font-bold my-4 p-3">
        All Categories
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-2 mr-2 ml-2">
        {categories.map((category) => (
          <div
            key={category}
            className="p-4 border cursor-pointer hover:bg-gray-100"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Categories;
