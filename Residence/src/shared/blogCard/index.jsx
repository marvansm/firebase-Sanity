import React from "react";
import styles from "./style.module.scss";
import { clsx } from "clsx";
import { urlFor } from "../../lib/sanity";

const BlogCard = ({
  image,
  avatar,
  title,
  description,
  sale,
  rent,
  active,
  featured,
  price,
}) => {
  return (
    <div className={clsx(styles.box, " w-full  overflow-hidden ")}>
      <div className={clsx(styles.boxImg, " relative ")}>
        <img
          className=" w-[525px] h-[228px] object-cover  overflow-hidden "
          src={
            image
              ? urlFor(image)
              : "https://media.gettyimages.com/id/1428025002/video/error-loading-page.jpg?s=640x640&k=20&c=aoAvqG3jtD_gtL70BKBZoo-06WU51VRqnwGKxGH0foM="
          }
          alt=""
        />
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
        <div className="price absolute bottom-2.5 left-2.5">
          <h3 className="bg-[#bc8664] text-[13px] leading-[20px] px-[10px] text-[#fff] rounded-2xl font-medium py-[3px]">
            $ {price}
          </h3>
        </div>
      </div>
      <div className="boxBody p-[15px] flex gap-6">
        <div className="avatar">
          <img
            className="avatar w-[40px] h-[40px] rounded-full object-cover"
            src={
              avatar
                ? urlFor(avatar)
                : "https://denver-residence.b-cdn.net/wp-content/uploads/2014/05/person8-120x120.webp"
            }
            alt=""
          />
        </div>
        <div className="content">
          <h2 className="text-[16px] leading-[21px] font-medium">{title}</h2>
          <p className="text-[#5c727d] text-[14px]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
