import React, { useState, useEffect } from "react";
import MainCards from "../../../shared/MainCards";
import Headtext from "../../../shared/HeadText";
import { SanityData } from "../../../services/fetch";

const ArticleSection = () => {
  const [Data, SetData] = useState([]);
  const [ViewMore, SetViewMore] = useState(5);
  const ShowMore = () => {
    SetViewMore(ViewMore + 5);
  };
  useEffect(() => {
    SanityData(`*[_type == "products"]`).then((data) => {
      SetData(data);
    });
  }, []);

  return (
    <div className="container mx-auto px-7 mt-18 mb-5 ">
      <Headtext text={"Latest news about Denver real estate"} />
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="grid grid-cols-5 gap-2.5 mt-8 ">
          {Data &&
            Data.slice(0, ViewMore).map((item, index) => (
              <MainCards
                key={index}
                image={item?.Image}
                title={item?.title}
                saleStatus={item?.SaleStatus}
                rooms={item?.Rooms}
                rooms2={item?.Rooms2}
                size={item?.Size}
                rentStatus={item?.RentStatus}
                place={item?.place}
                category={item?.Category}
              />
            ))}
        </div>
        {ViewMore < Data.length && (
          <button
            onClick={() => ShowMore()}
            className="bg-[#bc8664] cursor-pointer hover:bg-[#755440] duration-700 text-[14px] font-medium leading-[28px] py-[5px] px-[34px] rounded-[10px] text-[#fff] capitalize mt-5"
          >
            Load More Articles
          </button>
        )}
        {ViewMore > Data.length && (
          <button
            onClick={() => ShowMore()}
            className="duration-700 text-[14px] font-medium leading-[28px] py-[5px] px-[34px] rounded-[10px] text-[#000] capitalize mt-5"
          >
            No More Articles
          </button>
        )}
      </div>
    </div>
  );
};

export default ArticleSection;
