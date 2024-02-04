import topImage from "../../assets/images/top-image.png";
import shoppingIcon from "../../assets/icons/shopping-icon-white.svg";
import Header from "./header";
import { maxWidthMarginAuto } from "../../utils/constants";
import Button from "../common/button";
import { ButtonTypes } from "../../utils/types";
import flowerLeft from "../../assets/images/flower-left.png";
import flowerRight from "../../assets/images/flower-right.png";

function TopMain() {
  return (
    <>
      <div className="bg-gray pt-8 pb-14 relative">
        <img
          src={flowerLeft}
          alt=""
          className="absolute left-0 bottom-20 hidden sm:block"
        />
        <img
          src={flowerRight}
          alt=""
          className="absolute right-0 bottom-36 hidden sm:block"
        />
        <div className={`${maxWidthMarginAuto} flex flex-col gap-20`}>
          <Header />
          <div className="flex flex-col-reverse sm:flex-row gap-16 sm:gap-32 items-center">
            <div className="inline-flex flex-col items-center sm:items-start gap-8 font-[Roboto]">
              <p className="font-light text-6xl leading-[55px]">Collections</p>
              <p className="text-2xl leading-[55px] capitalize max-w-[570px] text-center sm:text-left">
                you can explore ans shop many differnt collection from various
                barands here.
              </p>
              <Button
                text="shop now"
                type={ButtonTypes.large}
                icon={shoppingIcon}
              />
            </div>
            <div className="border-2 border-[#00000040] rounded-tl-[160px] rounded-tr-none rounded-br-[160px] rounded-bl-none">
              <img
                src={topImage}
                alt="top image"
                className="rounded-tl-[160px] rounded-tr-none rounded-br-[160px] rounded-bl-none relative right-4 bottom-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopMain;
