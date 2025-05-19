import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import styles from "./style.module.scss";
import { clsx } from "clsx";
import { SanityData } from "../../../services/fetch";
import { urlFor } from "../../../lib/sanity";
const FeedBackSection = () => {
  const [Person, SetPerson] = useState([]);
  useEffect(() => {
    SanityData(`*[_type == "person"]`).then((data) => {
      SetPerson(data);
    });
  }, []);

  return (
    <div>
      <div className="container mx-auto px-7 pb-12">
        <div className="grid grid-cols-4 mt-18  gap-2.5 my-5 items-center  ">
          <div className="left flex flex-col gap-3">
            <h1 className="text-[24px] font-semibold leading-[30px] text-[#484848]">
              What our clients say about our services after they buy or sell a
              home with our agency
            </h1>
            <p className="text-[16px] font-normal leading-[26px] text-[#7A7A7A]">
              Founded in 2012, Denver Real Estate Group is a locally and female
              owned, residential real estate agency with offices throughout our
              state area.
            </p>
            <div className="btns flex items-center gap-3.5">
              <button className="py-[18px] px-[36px] bg-[#BC8664] text-[#FFFFFF] text-[16px] font-normal rounded-[5px] cursor-pointer border-2 border-[#BC8664]">
                About Us
              </button>
              <button className="py-[18px] px-[36px] bg-transparent border-2 border-[#BC8664] text-[#484848] text-[16px] cursor-pointer font-normal rounded-[5px] hover:bg-[#BC8664] hover:text-[#fff] duration-300">
                Our Agents
              </button>
            </div>
          </div>
          {Person &&
            Person.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className={clsx(
                  styles.box,
                  "flex flex-col items-center p-10 justify-center  rounded-2xl overflow-hidden"
                )}
              >
                <div className="avatar flex items-center gap-5.5">
                  <img
                    className="w-[40px] h-[40px] object-cover rounded-full"
                    src={
                      item?.image
                        ? urlFor(item.image)
                        : "https://denver-residence.b-cdn.net/wp-content/uploads/2014/05/person8-120x120.webp"
                    }
                    alt=""
                  />
                  <div className="name ">
                    <h2 className="text-[18px] font-medium leading-[30px] text-[#0c1015]">
                      {item?.name}
                    </h2>
                    <h4 className="text-[15px] text-gray-500">happy seller</h4>
                  </div>
                </div>
                <div className="comment mt-5 flex flex-col items-start">
                  <p className="text-[16px] font-normal leading-[26px] text-[#7A7A7A] w-[200px]">
                    The WP Estate team did an outstanding job helping me buy and
                    create my first real estate website.
                  </p>
                  <div className="stars flex items-center gap-2 mt-2">
                    <Star size={15} fill="gold" color="gold" />
                    <Star size={15} fill="gold" color="gold" />
                    <Star size={15} fill="gold" color="gold" />
                    <Star size={15} fill="gold" color="gold" />
                    <Star size={15} fill="gold" color="gold" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="w-full border border-black/10"> </div>
    </div>
  );
};

export default FeedBackSection;
