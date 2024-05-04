"use client"
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, clearCart } from '../store/cart/cartSlice';
import Link from 'next/link'; 
import Layout from '../components/defaultlayout';
import { ImCross } from "react-icons/im";
import axios from 'axios';
import { useRouter } from 'next/navigation';

const CartComponent = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const totalCost = cart.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/checkout');
      const sessionId = response.data.sessionId;
      router.push(`/checkout?sessionId=${sessionId}`);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
  <Layout>
  <div className="container mx-auto mt-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white px-10 py-10 shadow-md">
        <div className="border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">{cart.totalQuantity} Items</h2>
        </div>
        <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 mr-4 text-center">Quantity</h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Remove</h3>
          </div>
        {cart.items.map((item) => (
          <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={item.id}>
            <div className="flex flex-grow">
              <div className="w-20">
                <img className="h-24" src={item.image} alt={item.title} />
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">{item.title}</span>
                <span className="text-red-500 text-xs">{item.category}</span>
              </div>
            </div>
            <div className="flex justify-center w-1/4">
              <button onClick={() => dispatch(removeItem(item.id))}>-</button>
              <span className="mx-2">{item.quantity}</span>
              <button onClick={() => dispatch(addItem(item))}>+</button>
            </div>
            <span className="text-center w-1/4 font-semibold text-sm">${item.price}</span>
            <div className="w-1/4 text-center">
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="text-white bg-red-500 hover:bg-red-600 font-bold py-1 px-3 rounded-full"
              >
                <ImCross />
              </button>
            </div>
          </div>
        ))}
        <Link href="/products" legacyBehavior>
          <a className="flex font-semibold text-indigo-600 text-sm mt-10">
            Continue Shopping
          </a>
        </Link>
      </div>
      <div className="bg-white px-8 py-10 shadow-md">
        <div className="border-b pb-8">
          <h1 className="font-semibold text-2xl">Order Summary</h1>
        </div>
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>${totalCost.toFixed(2)}</span>
        </div>
        <button
          className={`bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded w-full ${loading && 'opacity-50 cursor-not-allowed'}`}
          onClick={handleCheckout}
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Checkout'}
        </button>
      </div>
    </div>
  </div>
</Layout>


  );
};

export default CartComponent;
