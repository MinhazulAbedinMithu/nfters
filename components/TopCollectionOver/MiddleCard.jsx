import Image from "next/image";
import React from "react";
import imgSmallCard from "../../assets/TopCollection/smallCard.png";
import imgOwner from "../../assets/hero/owner-1.png";
import imgEth2 from "../../assets/TopCollection/ethereum2.svg";
import IndigoBtn from "../IndigoBtn";
const MiddleCard = () => {
  return (
    <div className="flex items-start justify-start gap-2">
      <Image
        src={imgSmallCard}
        width="auto"
        height="auto"
        alt="nft small card"
      />
      <div className="flex items-start justify-between flex-col">
        <h4 className="font-bold text-[20px]">The Futr Abstr</h4>
        <div className="flex items-center justify-between gap-2 pt-2 pb-4">
          <Image
            src={imgOwner}
            alt="User Photo"
            width={32}
            height={32}
            className="ronded-full"
          />
          <div className="flex items-center justify-between gap-2 border border-[#00AC4F] rounded-md px-3 py-1">
            <Image src={imgEth2} height="auto" width="auto" alt="Eth" />
            <h5 className="text-[#00AC4F]">0.25 ETH</h5>
          </div>
          <p className="text-[#757575] text-[14px] font-dmSans">1 of 8</p>
        </div>
        <IndigoBtn text="Place a bid" />
      </div>
    </div>
  );
};

export default MiddleCard;
