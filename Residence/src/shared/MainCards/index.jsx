import React from "react";
import { urlFor } from "../../lib/sanity";
import { Heart } from "lucide-react";
import styles from "./style.module.scss";
import { clsx } from "clsx";

const MainCards = ({
  image,
  title,
  category,
  saleStatus,
  rooms,
  rooms2,
  size,
  price,
  rentStatus,
  person,
  sale,
  rent,
  active,
  place,
  featured,
  list,
  type,
  className = "",
  location,
}) => {
  return (
    <div className={clsx(styles.box, " w-full  overflow-hidden ")}>
      <div className={clsx(styles.boxImg, " relative rounded-2xl")}>
        <img
          className={` w-[525px] h-[228px] object-cover rounded-2xl overflow-hidden ${className}`}
          src={
            image
              ? urlFor(image)
              : "https://media.gettyimages.com/id/1428025002/video/error-loading-page.jpg?s=640x640&k=20&c=aoAvqG3jtD_gtL70BKBZoo-06WU51VRqnwGKxGH0foM="
          }
          alt=""
        />
        <div className="absolute inset-0 bg-black/20 rounded-2xl z-10"></div>
        {location && (
          <div className="absolute bottom-[30%] z-50 left-1/2 transform -translate-x-1/2 text-center ">
            <h2 className="text-[16px] leading-[21px] font-medium text-white">
              {location}
            </h2>
            <p className=" text-[#ffff] text-[13px] leading-[13px]">
              2 listing
            </p>
          </div>
        )}

        <div className="avatar absolute bottom-2.5  right-2.5 w-[90%] left-2.5 ">
          <ul className="flex items-center justify-between">
            {person && (
              <li>
                <img
                  className="w-[40px] h-[40px] rounded-full object-cover"
                  src={
                    person
                      ? urlFor(person)
                      : "https://denver-residence.b-cdn.net/wp-content/uploads/2014/05/person8-120x120.webp"
                  }
                  alt=""
                />
              </li>
            )}
            {person && (
              <li>
                <Heart fill="black" color="white" />
              </li>
            )}
          </ul>
        </div>
        <div className="left absolute top-5 left-2.5 flex items-center justify-between w-full ">
          {featured && (
            <h2 className="bg-[#6dbd92af] text-[11px] leading-[20px] px-[10px] text-[#fff] rounded-2xl">
              Featured
            </h2>
          )}
        </div>
        <div className="right absolute top-5 right-2.5 flex gap-2.5">
          {sale && (
            <h3 className="bg-[#6dbd92af] text-[11px] leading-[20px] px-[10px] text-[#fff] rounded-2xl">
              For Sale
            </h3>
          )}
          {rent && (
            <h3 className="bg-[#6dbd92af] text-[11px] leading-[20px] px-[10px] text-[#fff] rounded-2xl">
              For Rent
            </h3>
          )}
          {active && (
            <h3 className="bg-[#6dbd92af] text-[11px] leading-[20px] px-[10px] text-[#fff] rounded-2xl">
              Active
            </h3>
          )}
        </div>
      </div>

      <div className={`boxBody mt-3 flex flex-col gap-2 `}>
        {title ? (
          <h2 className="text-[16px] leading-[21px] font-medium">{title}</h2>
        ) : (
          <h2 className="text-[16px] leading-[21px] font-medium">{type}</h2>
        )}
        {list && (
          <p className=" text-[#5c727d] text-[13px] leading-[13px]">{list}</p>
        )}
        <ul className="flex items-center text-[#5c727d] text-[13px] leading-[13px] gap-1">
          <li>{place}</li>
          <li>{category}</li>
          <li>{saleStatus}</li>
        </ul>
        <ul className="flex items-center text-[#5c727d] text-[13px] leading-[13px] gap-1">
          <li>{rooms}</li>
          <li>{rooms2}</li>
          {size && (
            <li>
              Size
              <span>
                {size}
                <sup>2</sup>
              </span>
            </li>
          )}
        </ul>
        {price && (
          <h4 className="text-[15px] font-medium leading-[17px] mainColor">
            ${price}
            <span className="text-[13px]">{rentStatus}</span>
          </h4>
        )}
      </div>
    </div>
  );
};

export default MainCards;
