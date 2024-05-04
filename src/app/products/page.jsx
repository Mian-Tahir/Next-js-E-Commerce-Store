"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/products/productsThunk";
import Layout from "../components/defaultlayout";
import ProductCard from "../components/productCard";
import ProductCardSkeleton from "../components/Skeleton";
const Products = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <Layout>
      <div className=" text-3xl text-center font-bold my-4 p-3">
        All Products{" "}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {status === "succeeded" &&
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {status === "loading" && (
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        )}
      </div>
    </Layout>
  );
};

export default Products;
