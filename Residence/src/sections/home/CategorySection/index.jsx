import React, { useState, useEffect } from "react";
import Headtext from "../../../shared/HeadText";
import { SanityData } from "../../../services/fetch";
import MainCards from "../../../shared/MainCards";

const CategorySection = () => {
  const [Data, SetData] = useState([]);
  useEffect(() => {
    SanityData(`*[_type == "products"]`).then((data) => {
      SetData(data);
    });
  }, []);

  return (
    <div className="container mx-auto px-7 mt-13">
      <Headtext
        text={"What type of properties you can buy or sell through us"}
      />
      <div className="grid grid-cols-6 gap-6 my-5">
        {Data &&
          Data.slice(0, 6).map((item, index) => (
            <MainCards
              key={index}
              image={item?.Image}
              list={item?.Listing}
              type={item?.types}
            />
          ))}
      </div>
    </div>
  );
};

export default CategorySection;
