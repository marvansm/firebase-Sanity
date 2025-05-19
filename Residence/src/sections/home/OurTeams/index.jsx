import React, { useState, useEffect } from "react";
import { SanityData } from "../../../services/fetch";
import MainCards from "../../../shared/MainCards";

const OurTeamsSection = () => {
  const [Person, SetPerson] = useState([]);
  useEffect(() => {
    SanityData(`*[_type == "person"]`).then((data) => {
      SetPerson(data);
    });
  }, []);

  return (
    <div>
      <div className="bg-[url(https://denver.wpresidence.net/wp-content/uploads/2023/08/pattern.webp)] bg-center bg-no-repeat bg-cover w-full h-[1100px] flex  items-center ">
        <div className="w-full h-full flex items-center justify-center bg-[#f9f8f3f8] ">
          <div className="grid grid-cols-2 container mx-auto px-7 items-center ">
            <div className="left flex flex-col gap-5">
              <h1 className="text-[24px] font-semibold leading-[30px] text-[#484848] w-[460px]">
                Denver Residence are the brightest and fastest growing real
                estate brokerage firm in Denver
              </h1>
              <p className="text-[16px] font-normal leading-[26px] text-[#7A7A7A] w-[460px]">
                Founded in 2012, Residence Real Estate Group is a locally and
                female owned, residential real estate agency with offices
                throughout Quebec area.
              </p>
              <p className="text-[16px] font-normal leading-[26px] text-[#7A7A7A] w-[460px]">
                Our mission is to bring a more personalized approach to the home
                buying and selling process – and we’re committed to the
                communities we serve.
              </p>
              <p className="text-[16px] font-normal leading-[26px] text-[#7A7A7A] w-[460px]">
                Helping you achieve your real estate goals is my top priority.
                When we work together, it is about YOU.
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
            <div className="right grid grid-cols-2 gap-6 w-[700px] h-full">
              {Person &&
                Person.slice(0, 6).map((item, index) => (
                  <MainCards
                    key={index}
                    image={item?.image}
                    title={item?.name}
                    list={item?.Profession}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamsSection;
