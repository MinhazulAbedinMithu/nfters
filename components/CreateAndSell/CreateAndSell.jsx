import React from "react";
import imgOne from "../../assets/CreateAndSell/createOne.png";
import imgTwo from "../../assets/CreateAndSell/createTwo.png";
import imgThree from "../../assets/CreateAndSell/createThree.png";
import imgOwnerFemale from "../../assets/CreateAndSell/ownerOne.png";

import Image from "next/image";
import IndigoBtn from "../IndigoBtn";
const CreateAndSell = () => {
  return (
    <div className="bg-white w-full py-[70px] px-4 sm:px-28 flex items-center justify-between gap-10 flex-col md:flex-row">
      <div className="flex items-center justify-start gap-10 flex-col sm:flex-row w-full md:w-3/5">
        <div className="flex flex-col items-end gap-10">
          <div className="relative w-auto h-auto">
            <Image src={imgOne} height="auto" width="auto" alt="nft img" />
            <div className="absolute -bottom-8 -right-8">
              <Image
                src={imgOwnerFemale}
                height="auto"
                width="auto"
                alt="nft img"
              />
            </div>
          </div>
          <div className="relative w-auto h-auto">
            <Image src={imgThree} height="auto" width="auto" alt="nft img" />

            <div className="absolute -bottom-8 -right-8">
              <Image
                src={imgOwnerFemale}
                height="auto"
                width="auto"
                alt="nft img"
              />
            </div>
          </div>
        </div>
        <div className="relative w-auto h-auto">
          <Image src={imgTwo} height="auto" width="auto" alt="nft img" />

          <div className="absolute -bottom-8 -right-8">
            <Image
              src={imgOwnerFemale}
              height="auto"
              width="auto"
              alt="nft img"
            />
          </div>
        </div>
      </div>
      <div className="w-full sm:w-2/5">
        <h2 className="uppercase font-integral font-bold text-[32px] lg:max-w-[300px] w-full">
          Create and sell your nfts
        </h2>
        <p className="text-[#636363] font-dmSans py-[40px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
          phasellus placerat a pellentesque tellus sed egestas. Et tristique
          dictum sit tristique sed non. Lacinia lorem id consectetur pretium
          diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
        </p>
        <IndigoBtn text="Sign Up Now" />
      </div>
    </div>
  );
};

export default CreateAndSell;
