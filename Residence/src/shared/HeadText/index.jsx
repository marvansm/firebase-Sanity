import React from "react";

const Headtext = ({text}) => {
  return (
    <div>
      <div className="header-text">
        <h2 className="font-semibold text-[24px] leading-[30px] text-[#484848] w-[300px]">
          {text}
        </h2>
      </div>
    </div>
  );
};

export default Headtext;
