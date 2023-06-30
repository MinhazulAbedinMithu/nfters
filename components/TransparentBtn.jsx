import React from "react";

const TransparentBtn = ({ text, px = "px-6", py = "py-2" }) => {
  return (
    <button
      className={`border-[#3D00B7] border bg-[#fff] text-[14px] font-dmSans text-[#3D00B7] font-bold flex items-center justify-center ${px} ${py} rounded-full hover:bg-[#3D00B7] hover:border-transparent hover:text-white transition-all delay-100`}
    >
      {text}
    </button>
  );
};

export default TransparentBtn;
