import React from "react";

const IndigoBtn = ({ text }) => {
  return (
    <button className="bg-[#3D00B7] border border-transparent text-[14px] font-dmSans text-white font-bold flex items-center justify-center px-6 py-2 rounded-full hover:border-[#3D00B7] hover:bg-white hover:text-[#3D00B7] transition-all delay-100">
      {text}
    </button>
  );
};

export default IndigoBtn;
