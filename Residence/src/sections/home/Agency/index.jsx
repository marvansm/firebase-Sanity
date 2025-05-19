import React, { useEffect, useState } from "react";
import BlogCard from "../../../shared/blogCard";
import { SanityData } from "../../../services/fetch";
import Headtext from "../../../shared/HeadText";

const AgencySection = () => {
  const [Data, SetData] = useState([]);
  const [Person, SetPerson] = useState([]);
  useEffect(() => {
    SanityData(`*[_type == "products"]`).then((data) => {
      SetData(data);
    });
  }, []);
  useEffect(() => {
    SanityData(`*[_type == "person"]`).then((data) => {
      SetPerson(data);
    });
  }, []);

  return (
    <div className="container mx-auto px-7 mt-5">
      <Headtext text={"Featured properties exclusive with our agency"} />
      <div className="grid grid-cols-3 mt-9 gap-6">
        {Data &&
          Data.slice(0, 3).map((item, index) => (
            <BlogCard
              key={index}
              image={item?.Image}
              title={item?.title}
              description={item?.Description}
              avatar={Person[index]?.image}
              sale={item?.sale}
              rent={item?.rent}
              active={item?.active}
              featured={item?.featured}
              price={item?.Price}
            />
          ))}
      </div>
    </div>
  );
};

export default AgencySection;
