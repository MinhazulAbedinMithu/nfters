import Image from "next/image";
import React from "react";
import imgCollectionOne from "../../assets/Collection/bigOne.png";
import imgSmallOne from "../../assets/Collection/smallOne.png";
import imgSmallTwo from "../../assets/Collection/smallTwo.png";
import cardOwnerOne from "../../assets/hero/owner-1.png";
import TransparentBtn from "../TransparentBtn";

const CollectionNFT = () => {
  return (
    <div className="w-full bg-[rgba(217, 224, 236, 0.20)] py-[70px] px-4 sm:px-28">
      <h2 className="uppercase font-bold text-[28px] font-integral pb-8">
        Collection featured NFTs
      </h2>
      <div className="flex items-center justify-between gap-4 flex-col sm:flex-row">
        <div>
          <div className="flex items-start justify-start gap-2">
            <div>
              <Image
                src={imgCollectionOne}
                width="auto"
                height="auto"
                alt="nft img"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Image
                src={imgSmallOne}
                width="auto"
                height="auto"
                alt="nft img"
              />
              <Image
                src={imgSmallTwo}
                width="auto"
                height="auto"
                alt="nft img"
              />
              <Image
                src={imgSmallOne}
                width="auto"
                height="auto"
                alt="nft img"
              />
            </div>
          </div>
          <div>
            <h4 className="py-4 font-bold">Amazing Collection</h4>
            <div className="flex items-center justify-between ">
              <Image
                src={cardOwnerOne}
                height="auto"
                width="auto"
                alt="owner"
              />
              <TransparentBtn text="Total 54 Items" px="px-4" py="py-1" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-start justify-start gap-2">
            <div>
              <Image
                src={imgCollectionOne}
                width="auto"
                height="auto"
                alt="nft img"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Image
                src={imgSmallOne}
                width="auto"
                height="auto"
                alt="nft img"
              />
              <Image
                src={imgSmallTwo}
                width="auto"
                height="auto"
                alt="nft img"
              />
              <Image
                src={imgSmallOne}
                width="auto"
                height="auto"
                alt="nft img"
              />
            </div>
          </div>
          <div>
            <h4 className="py-4 font-bold">Amazing Collection</h4>
            <div className="flex items-center justify-between ">
              <Image
                src={cardOwnerOne}
                height="auto"
                width="auto"
                alt="owner"
              />
              <TransparentBtn text="Total 54 Items" px="px-4" py="py-1" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-start justify-start gap-2">
            <div>
              <Image
                src={imgCollectionOne}
                width="auto"
                height="auto"
                alt="nft img"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Image
                src={imgSmallOne}
                width="auto"
                height="auto"
                alt="nft img"
              />
              <Image
                src={imgSmallTwo}
                width="auto"
                height="auto"
                alt="nft img"
              />
              <Image
                src={imgSmallOne}
                width="auto"
                height="auto"
                alt="nft img"
              />
            </div>
          </div>
          <div>
            <h4 className="py-4 font-bold">Amazing Collection</h4>
            <div className="flex items-center justify-between ">
              <Image
                src={cardOwnerOne}
                height="auto"
                width="auto"
                alt="owner"
              />
              <TransparentBtn text="Total 54 Items" px="px-4" py="py-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionNFT;
