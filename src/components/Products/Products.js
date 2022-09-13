import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="mx-4 lg:mx-24 mt-12">
      <div className="lg:flex items-center justify-between">
      <div className="flex items-center space-x-4 mb-8 lg:mb-0">
        <div>
          <select class="select select-bordered  w-32">
            <option disabled selected>
              Products 
            </option>
            <option>T-shirt</option>
            <option>Hoodies</option>
          </select>
        </div>
        <div>
          <select class="select select-bordered w-32">
            <option disabled selected>
              Size 
            </option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div>
        <button className="text-blue-500"><span><FontAwesomeIcon icon={faArrowRotateLeft} /></span> <span>Reset</span></button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div>
        <input type="text" placeholder="Search Item" class="input input-bordered w-40" />
        </div>
        <div>
        <Link to="/">
            <button class="py-2 px-5 border  text-xs text-white font-bold bg-blue-500">Add To Cart
            </button>
        </Link>
        </div>
      </div>
      </div>

      <div className="flex items-center justify-between mt-4 p-2 bg-gray-100">
        <div className="flex items-center space-x-12">
            <h2 className="font-bold">Image</h2>
            <h2 className="font-bold">Name</h2>
        </div>
        <div className="flex items-center space-x-20">
            <h2 className="font-bold">Color</h2>
            <h2 className="font-bold">Stock</h2>
            <h2 className="font-bold">Price</h2>
        </div>
        <div>
            <h2 className="font-bold">Buy</h2>
        </div>
      </div>
      <div className="h-px bg-black"></div>
    </div>
  );
};

export default Products;
