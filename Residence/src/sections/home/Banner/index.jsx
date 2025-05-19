import React from "react";

const BannerSection = () => {
  return (
    <div className="container mx-auto px-7">
      <div className="bg-[url(https://denver.wpresidence.net/wp-content/uploads/2023/08/banner.jpg)] bg-left bg-no-repeat bg-cover w-full h-[500px]  rounded-2xl my-5">
        <div className="content  py-[100px] px-[50px] ">
          <h2 className="text-[38px] font-normal leading-[40px] capitalize text-white w-[400px] pb-7">
            Sell Your Home With Confidence
          </h2>
          <p className="text-[16px] font-normal leading-[40px]  text-white w-[530px]  pb-7">
            Are you curious about the precise value of your home or its
            potential selling price? Benefit from our extensive expertise in the
            luxury home market.
          </p>
          <button className="text-[16px] font-normal text-white border-2 border-white py-[18px] px-[36px] rounded-[5px] block hover:bg-[#bc8664] duration-300">
            Book a valuation
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
