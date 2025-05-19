import React from "react";
import {  SearchIcon } from "lucide-react";
const Search = () => {
  return (
    <div>
      <div className="bg-[url(https://denver.wpresidence.net/wp-content/uploads/2023/08/pattern.webp)] bg-center bg-no-repeat bg-cover w-full h-40 flex items-center justify-center ">
        <div className="w-full h-full flex items-center justify-center bg-[#f9f8f3f8] ">
          <div className="bg-white shadow-md rounded-full px-6 py-3 flex items-center gap-6 max-w-7xl mx-auto">
            <input
              type="text"
              placeholder="Search by location"
              className="flex-1 outline-none bg-transparent text-[#3A3A3A] placeholder-[#3A3A3A] text-sm w-[250px]"
            />
            <div className="w-px h-6 bg-gray-300" />
            <select className="bg-transparent text-[#3A3A3A] text-sm outline-none">
              <option>Property Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Studio</option>
            </select>
            <div className="w-px h-6 bg-gray-300" />
            <select className="bg-transparent text-[#3A3A3A] text-sm outline-none">
              <option>Sell or Rent</option>
              <option>Sell</option>
              <option>Rent</option>
            </select>
            <div className="w-px h-6 bg-gray-300" />
            <select className="bg-transparent text-[#3A3A3A] text-sm outline-none">
              <option>Property Status</option>
              <option>New</option>
              <option>Used</option>
              <option>Under Construction</option>
            </select>
            <div className="w-px h-6 bg-gray-300" />
            <button className="bg-[#bc8664] w-10 h-10 flex items-center justify-center rounded-full">
              <SearchIcon className="text-white text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
