import React from "react";
import Link from "next/link";
import mensclothing from "../../assets/mens clothing.jpg";
import womensclothing from "../../assets/womens clothing.jpg";
import jewelery from "../../assets/jewelery.jpg";
import electronics from "../../assets/electornics.jpg";
import Image from "next/image";

export default function MainBanner() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col px-4 md:px-6 xl:px-20 py-9 md:py-12 xl:py-10">
        <section>
          <h1 className="leading-5 md:leading-6 xl:leading-9 text-gray-800 text-xl md:text-2xl xl:text-4xl font-semibold text-center">
            Act Before it’s too late!
          </h1>
          <p className="text-gray-600 text-base text-center mt-4">
            It is a long established fact that a reader will be distracted by
            the readable content.
          </p>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mt-8 md:mt-10 xl:mt-12 mb-8">
          <div className="w-full">
            <Link href="/categories/men's%20clothing" passHref legacyBehavior>
              <a className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
                <Image
                  src={mensclothing}
                  alt="Men's Clothing"
                  className="w-full h-auto flex-1 object-cover "
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Men's Clothing</h3>
                  <p className="text-gray-600">
                    Explore our collection for men.
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div className="w-full">
            <Link href="/categories/women's%20clothing" passHref legacyBehavior>
              <a className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
                <Image
                  src={womensclothing}
                  alt="Women's Clothing"
                  className="w-full h-auto flex-1 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Women's Clothing
                  </h3>
                  <p className="text-gray-600">
                    Check out our latest women's fashion.
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div className="w-full">
            <Link href="/categories/jewelery" passHref legacyBehavior>
              <a className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
                <Image
                  src={jewelery}
                  alt="Jewelry"
                  className="w-full h-auto flex-1 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Jewelry</h3>
                  <p className="text-gray-600">
                    Discover exquisite jewelry pieces.
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div className="w-full">
            <Link href="/categories/electronics" passHref legacyBehavior>
              <a className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
                <Image
                  src={electronics}
                  alt="Electronics"
                  className="w-full h-auto flex-1 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Electronics</h3>
                  <p className="text-gray-600">
                    Find the latest gadgets and electronics.
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </section>
        <section className="flex justify-center">
          <Link href="/products" passHref legacyBehavior>
            <a className="px-6 h-11 text-gray-800 text-base font-medium flex items-center border border-gray-600 hover:bg-blue-300">
              <span> Explore </span>
              <img
                className="ml-2"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Banner10_leftToRightArrow.svg"
                alt="Right Arrow"
              />
            </a>
          </Link>
        </section>
      </div>
    </div>
  );
}
