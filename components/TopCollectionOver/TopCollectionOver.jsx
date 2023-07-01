import Image from "next/image";
import React from "react";
import imgLeftCard from "../../assets/TopCollection/topCard.png";
import imgEthurium from "../../assets/ethereum.png";
import imgOwner from "../../assets/hero/owner-1.png";
import MiddleCard from "./MiddleCard";
import imgOneCol from "../../assets/TopCollection/listImgOne.png";
import imgTwoCol from "../../assets/TopCollection/listImgTwo.png";
import imgThreeCol from "../../assets/TopCollection/listImgThree.png";
import imgFourCol from "../../assets/TopCollection/listImgFour.png";
import imgFiveCol from "../../assets/TopCollection/listImgFive.png";
import imgVarified from "../../assets/TopCollection/verify_1.svg";

const collectionList = [
  {
    id: 1,
    img: imgOneCol,
    title: "CryptoFunks",
    price: "19,769.39",
    stat: "+26.52%",
    isIncrese: true,
    isVarified: true,
  },
  {
    id: 2,
    img: imgTwoCol,
    title: "Cryptix",
    price: "2769.39",
    stat: "+10.52%",
    isIncrese: false,

    isVarified: false,
  },
  {
    id: 3,
    img: imgThreeCol,
    title: "Frensware",
    price: "9232.39",
    stat: "+2.52%",
    isIncrese: true,
    isVarified: false,
  },
  {
    id: 4,
    img: imgFourCol,
    title: "PunkArt",
    price: "3,769.39",
    stat: "+1.52%",
    isIncrese: true,
    isVarified: true,
  },
  {
    id: 5,
    img: imgFiveCol,
    title: "Art Crypto",
    price: "10,769.39",
    stat: "+2.52%",
    isIncrese: false,
    isVarified: false,
  },
];

const TopCollectionOver = () => {
  return (
    <div className="w-full px-4 sm:px-28 pt-[40px] pb-[80px] bg-white flex items-start justify-between flex-col lg:flex-row">
      <div>
        <Image src={imgLeftCard} width="auto" height="auto" alt="nft img" />
        <div className="flex items-center justify-between pt-6">
          <div className="flex items-center justify-start gap-2">
            <Image
              src={imgOwner}
              alt="User Photo"
              width={32}
              height={32}
              className="ronded-full"
            />
            <div>
              <h4 className="font-bold text-[20px] font-dmSans">
                The Futr Abstr
              </h4>
              <p className="text-[14px] text-[#363639] font-dmSans">
                10 in the stock
              </p>
            </div>
          </div>
          <div>
            <p className="font-dmSans text-[12px] font-medium">Highest Bid</p>
            <div className="flex gap-2">
              <Image src={imgEthurium} alt="eth" width={12} />
              <h6 className="text-[#3A3A3A] text-[16px] font-dmSans">
                0.25 ETH
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 pt-4 sm:pt-0">
        <MiddleCard />
        <MiddleCard />
        <MiddleCard />
      </div>
      <div className="pt-4 sm:pt-0">
        <h4 className="uppercase text-[#000] text-[20px] font-integral font-bold">
          Top Collection Over
        </h4>
        <p className="text-[#3D00B7] text-[18px] font-dmSans font-bold">
          Last 7 days
        </p>

        <div className="pl-4 border-l border-[#F0F0F0]">
          {collectionList.map((nftItem, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4 py-4 border-b border-[#F0F0F0]"
            >
              <div className="flex items-center justify-start gap-4">
                <h2 className="text-[24px] font-dmSans font-bold ">
                  {nftItem.id}
                </h2>
                <div className="relative w-full h-full">
                  <Image
                    src={nftItem.img}
                    height="auto"
                    width="auto"
                    alt="nft img"
                  />
                </div>
                {nftItem.isVarified && (
                  <div className="absolute top-0 left-[60px]">
                    <Image
                      src={imgVarified}
                      height="auto"
                      width="auto"
                      alt="varified img"
                    />
                  </div>
                )}
                <div className="w-full flex flex-col justify-start items-start">
                  <h4>{nftItem.title}</h4>
                  <div className="flex gap-2">
                    <Image src={imgEthurium} alt="eth" width={12} />
                    <h6 className="text-[#3A3A3A] text-[16px] font-dmSans">
                      {nftItem.price}
                    </h6>
                  </div>
                </div>
              </div>
              <h2
                className={`text-[20px] font-semibold ${
                  nftItem.isIncrese ? "text-[#14C8B0]" : "text-[#FF002E]"
                }`}
              >
                {nftItem.stat}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCollectionOver;
