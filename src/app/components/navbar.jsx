"use client";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { GrCart } from "react-icons/gr";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.totalQuantity;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-400 p-6 grid grid-cols-3 w-full">
      <div className="text-white font-semibold text-xl tracking-tight">
        E-commerce Store
      </div>
      <div className="col-span-2 justify-self-end">
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-blue-300 ml-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          className={`absolute bg-blue-400 w-full transition-all duration-300 ease-in-out ${
            isOpen ? "top-16" : "top-[-490px]"
          } md:relative md:top-auto md:flex md:bg-transparent`}
        >
          <Link href="/" passHref legacyBehavior>
            <a className="block text-white hover:text-blue-300 mx-4 mt-4 md:mt-0">
              Home
            </a>
          </Link>
          <Link href="/products" passHref legacyBehavior>
            <a className="block text-white hover:text-blue-300 mx-4 mt-4 md:mt-0">
              Products
            </a>
          </Link>
          <Link href="/categories" passHref legacyBehavior>
            <a className="block text-white hover:text-blue-300 mx-4 mt-4 md:mt-0">
              Categories
            </a>
          </Link>
          <Link href="/signup" passHref legacyBehavior>
            <a className="block text-white hover:text-blue-300 mx-4 mt-4 md:mt-0">
              Sign Up
            </a>
          </Link>
          <Link href="/login" passHref legacyBehavior>
            <a className="block text-white hover:text-blue-300 mx-4 mt-4 md:mt-0">
              Login
            </a>
          </Link>
          <Link href="/cart" passHref legacyBehavior>
            <a className="flex items-center text-white hover:text-blue-200 mx-4 mt-2 md:mt-0">
              <GrCart className="text-2xl mr-3 mb-2" />
              <span className="mb-3"> Cart</span>
              <span
                className={`ml-2  mb-3 text-medium font-bold ${
                  totalItems > 0 ? "text-red-500" : "text-white"
                }`}
              >
                {totalItems}
              </span>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
