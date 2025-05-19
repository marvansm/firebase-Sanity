import React, { useState, useEffect } from "react";
import Headtext from "../../../shared/HeadText";
import MainCards from "../../../shared/MainCards";
import { SanityData } from "../../../services/fetch";

const DealsSection = () => {
  const [Data, SetData] = useState([]);
  useEffect(() => {
    SanityData(`*[_type == "products"]`).then((data) => {
      SetData(data);
    });
  }, []);
  return (
    <div className="container mx-auto px-7">
      <div className="mt-14">
        <Headtext text={"Check these areas for exclusive deals in Denver"} />
      </div>
      <div className="grid grid-cols-3 gap-4 my-8">
        <div className="left">
          {Data &&
            Data.slice(0, 1).map((item, index) => (
              <MainCards
                key={index}
                image={item?.Image}
                className={"h-[500px]"}
                location={item?.Location}
              />
            ))}
        </div>
        <div className="center grid grid-cols-3 gap-4">
          {Data &&
            Data.slice(0, 6).map((item, index) => (
              <MainCards
                key={index}
                image={item?.Image}
                location={item?.Location}
              />
            ))}
        </div>
        <div className="right">
          {Data &&
            Data.slice(0, 1).map((item, index) => (
              <MainCards
                key={index}
                image={item?.Image}
                className={"h-[500px]"}
                location={item?.Location}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DealsSection;
