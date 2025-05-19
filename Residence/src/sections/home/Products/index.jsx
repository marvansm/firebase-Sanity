import React, { useEffect, useState } from "react";
import MainCards from "../../../shared/MainCards";
import { SanityData } from "../../../services/fetch";

import {
  Building,
  Building2,
  Factory,
  Hospital,
  House,
  School,
  Store,
  Warehouse,
} from "lucide-react";

const ProductSection = () => {
  const [Data, SetData] = useState([]);
  const [User, SetUser] = useState([]);
  const [MoreData, SetMoreData] = useState(8);

  useEffect(() => {
    SanityData(`*[_type == "products"]`).then((data) => {
      SetData(data);
    });
  }, []);
  useEffect(() => {
    SanityData(`*[_type == "person"]`).then((data) => {
      SetUser(data);
    });
  }, []);

  const MoreClick = () => {
    SetMoreData(MoreData + 4);
  };
  return (
    <div>
      <div className="container mx-auto px-7 mt-8">
        <div className="icons flex items-center justify-center mb-5">
          <ul className="flex items-center gap-3.5 ">
            <li className="text-[14px] font-normal leading-[35px] text-[#484848] py-[3px] px-[10px] flex flex-col items-center">
              <Building size={20} /> For Sale
            </li>
            <li className="text-[14px] font-normal leading-[35px] text-[#484848] py-[3px] px-[10px] flex flex-col items-center">
              <Building2 size={20} /> For Rent
            </li>
            <li className="text-[14px] font-normal leading-[35px] text-[#484848] py-[3px] px-[10px] flex flex-col items-center">
              <Building2 size={20} /> Residential
            </li>
            <li className="text-[14px] font-normal leading-[35px] text-[#484848] py-[3px] px-[10px] flex flex-col items-center">
              <Factory size={20} /> Apartments
            </li>
            <li className="text-[14px] font-normal leading-[35px] text-[#484848] py-[3px] px-[10px] flex flex-col items-center">
              <House size={20} /> Single Homes
            </li>
            <li className="text-[14px] font-normal leading-[35px] text-[#484848] py-[3px] px-[10px] flex flex-col items-center">
              <Store size={20} /> Studios
            </li>
            <li className="text-[14px] font-normal leading-[35px] text-[#484848] py-[3px] px-[10px] flex flex-col items-center">
              <School size={20} /> Condos
            </li>
            <li className="text-[14px] font-normal leading-[35px] text-[#484848] py-[3px] px-[10px] flex flex-col items-center">
              <Hospital size={20} /> Commercial
            </li>
            <li className="text-[14px] font-normal leading-[35px] text-[#484848] py-[3px] px-[10px] flex flex-col items-center">
              <Warehouse size={20} /> Commercial
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {Data &&
            Data?.slice(0, MoreData).map((item, index) => (
              <MainCards
                key={index}
                title={item?.title}
                image={item?.Image}
                category={item?.Category}
                price={item?.Price}
                saleStatus={item?.SaleStatus}
                rooms={item?.Rooms}
                rooms2={item?.Rooms2}
                size={item?.Size}
                rentStatus={item?.RentStatus}
                person={User[index]?.image}
                featured={item?.featured}
                rent={item?.rent}
                active={item?.active}
                sale={item?.sale}
                place={item?.place}
              />
            ))}
        </div>
        <div className="btn flex items-center justify-center mb-5">
          {MoreData < Data.length && (
            <button
              onClick={() => {
                MoreClick();
              }}
              className="bg-[#bc8664] cursor-pointer hover:bg-[#755440] duration-700 text-[14px] font-medium leading-[28px] py-[5px] px-[34px] rounded-[10px] text-[#fff] capitalize mt-5"
            >
              load more listings
            </button>
          )}
          {MoreData > Data.length && (
            <button
              onClick={() => {
                MoreClick();
              }}
              className=" cursor-pointer  text-[14px] font-medium leading-[28px] py-[5px] px-[34px] rounded-[10px] text-[#000] capitalize mt-5"
            >
              There are no more listings.
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
