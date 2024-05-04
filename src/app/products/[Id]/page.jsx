"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/products/productsThunk";
import Layout from "../../components/defaultlayout";
import { usePathname } from "next/navigation";
import { addItem } from "../../store/cart/cartSlice";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetailsSkeleton from "../../components/productDetailsSkleton";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { product, status, error } = useSelector((state) => state.products);
  const pathname = usePathname();
  // const router = useRouter();

  useEffect(() => {
    const id = pathname.split("/").pop();
    dispatch(fetchProduct(id));
  }, [dispatch, pathname]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addItem({ ...product, quantity: 1 }));
      // router.push("/cart");
      toast.success("Item Added to Cart Successfully");
    }
  };

  if (status === "loading") {
    return (
      <Layout>
        <ProductDetailsSkeleton />
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="container mx-auto p-4">
        {status === "loading" ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          product && (
            <div className="max-w-3xl mx-auto bg-white rounded-md shadow-md p-4 md:p-6">
              <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover rounded-lg cursor-pointer"
                style={{ maxWidth: "300px" }}
              />
              <p className="text-gray-700 mb-2 font-semibold">
                Category: {product.category}
              </p>
              <p className="text-gray-800 mb-2">{product.description}</p>
              <p className="text-lg font-semibold mb-2">${product.price}</p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <ToastContainer position="bottom-right" />
            </div>
          )
        )}
      </div>
    </Layout>
  );
};

export default ProductDetails;
