import Image from "next/image";
import React from "react";
import iconTick from "../../assets/Amaze/card-tick-1 1.svg";
import iconChart from "../../assets/Amaze/chart-square 2.svg";

const AmazeNFT = () => {
  return (
    <div className="w-full bg-[rgba(217, 224, 236, 0.20)] py-14 sm:py-[129px] px-4 sm:px-28 flex items-start justify-start flex-col sm:flex-row">
      <div className="sm:w-1/2 w-full">
        <h2 className="uppercase max-w-[350px] w-auto text-[28px] font-bold">
          The amazing nft art of the world here
        </h2>
      </div>
      <div className="flex sm:w-1/2 w-full flex-col sm:flex-row">
        <div className="flex items-start gap-2">
          <div>
            <Image src={iconTick} height={36} width={36} alt="tick" />
          </div>
          <div>
            <h4>Fast Transaction</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus imperdiet.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <div>
              <Image src={iconChart} height={36} width={36} alt="chart" />
            </div>
            <div>
              <h4>Fast Transaction</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                etiam viverra tellus imperdiet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazeNFT;
