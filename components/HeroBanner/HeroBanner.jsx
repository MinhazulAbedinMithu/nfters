import React from "react";
import IndigoBtn from "../IndigoBtn";
import HeroSlider from "./HeroSlider";

const HeroBanner = () => {
  return (
    <div className="w-full px-4 sm:px-28 pt-[40px] pb-[80px] bg-white flex items-center justify-between flex-col lg:flex-row">
      <div className="sm:w-full">
        <h1 className="max-w-[612px] w-full text-[#000] font-integral text-4xl font-bold">
          Discover, and collect Digital Art NFTs
        </h1>
        <p className="text-[#565656] text-xl font-dmSans max-w-[471px] w-full pt-4 pb-6">
          Digital marketplace for crypto collectibles and non-fungible tokens
          (NFTs). Buy, Sell, and discover exclusive digital assets.
        </p>
        <IndigoBtn text="Explore Now" />
        <div className="flex items-center justify-start gap-4 pt-6 leading-3 tracking-wide">
          <div>
            <h2 className="text-2xl font-integral font-bold text-[#000]">
              98k+
            </h2>
            <p className="text-lg text-[#565656]">Artwork</p>
          </div>
          <div>
            <h2 className="text-2xl font-integral font-bold text-[#000]">
              12k+
            </h2>
            <p className="text-lg text-[#565656]">Auction</p>
          </div>
          <div>
            <h2 className="text-2xl font-integral font-bold text-[#000]">
              15k+
            </h2>
            <p className="text-lg text-[#565656]">Artist</p>
          </div>
        </div>
      </div>
      <div className="w-auto sm:w-full">
        <HeroSlider />
      </div>
    </div>
  );
};

export default HeroBanner;
