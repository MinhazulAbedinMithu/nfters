"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";

import imgEthurium from "../../assets/ethereum.png";
import cardOwnerOne from "../../assets/hero/owner-1.png";
import imgSlideSticker from "../../assets/hero/sliderSticker.png";
import Image from "next/image";

const sliderInfo = [
  {
    img: "https://i.ibb.co/R04gMGC/hero-card-1.png",
    title: "Abstr Gradient NFT",
    ownerPhoto: cardOwnerOne,
    ownerName: "Arkhan17",
    currentBid: "0.25 ETH",
    EndsIn: "12h 43m 42s",
  },
  {
    img: "https://i.ibb.co/pQ0rb35/hero-card-2.png",
    title: "Awesome NFT",
    ownerPhoto: cardOwnerOne,
    ownerName: "Minhaz",
    currentBid: "0.25 ETH",
    EndsIn: "12h 43m 42s",
  },
  {
    img: "https://i.ibb.co/R04gMGC/hero-card-1.png",
    title: "Abstr Gradient NFT",
    ownerPhoto: cardOwnerOne,
    ownerName: "Arkhan17",
    currentBid: "0.25 ETH",
    EndsIn: "12h 43m 42s",
  },
  {
    img: "https://i.ibb.co/pQ0rb35/hero-card-2.png",
    title: "Awesome NFT",
    ownerPhoto: cardOwnerOne,
    ownerName: "Minhaz",
    currentBid: "0.25 ETH",
    EndsIn: "12h 43m 42s",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper relative"
    >
      <Image
        src={imgSlideSticker}
        alt="sticker"
        width={101}
        height={101}
        className="absolute top-[45%] left-[-20%] z-10 pointer-events-none"
      />
      {sliderInfo.map((sliderItem, index) => (
        <SwiperSlide
          key={index}
          style={{
            // backgroundImage: `url(${sliderItem.img})`,
            backgroundImage: "url(" + sliderItem.img + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="p-4 flex flex-col justify-between h-full relative">
            <div>
              <h2>{sliderItem.title}</h2>
              <div className="w-full flex items-center justify-start gap-2">
                <Image
                  src={sliderItem.ownerPhoto}
                  alt="User Photo"
                  width={32}
                  height={32}
                  className="ronded-full"
                />
                <span className="text-sm font-bold">
                  {sliderItem.ownerName}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-2 bg-[rgba(0,0,0,0.12)] rounded-md">
              <div>
                <p className="text-[12px]">Current Bid</p>
                <div className="flex items-center justify-start gap-1">
                  <Image src={imgEthurium} alt="eth" width={12} />
                  <span className="text-[16px]">{sliderItem.currentBid}</span>
                </div>
              </div>
              <div>
                <p className="text-[12px]">Ends in</p>
                <div className="flex items-center justify-start">
                  <span className="text-[16px]">{sliderItem.EndsIn}</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* <SwiperSlide
        style={{
          backgroundImage: "url(" + cardImgOne + ")",
          height: "100%",
          width: "100%",
        }}
      >
        <div>
          <h2>sdgasdgfsdg</h2>
        </div>
      </SwiperSlide> */}
    </Swiper>
  );
};

export default HeroSlider;
