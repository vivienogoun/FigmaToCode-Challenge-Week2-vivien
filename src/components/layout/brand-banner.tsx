import zara1 from "../../assets/images/zara-logo-1.png";
import zara2 from "../../assets/images/zara-logo-2.png";
import { ButtonTypes } from "../../utils/types";
import Button from "../common/button";

function BrandBanner() {
  return (
    <div
      className="hidden sm:flex justify-end items-end relative h-[776px]"
      style={{
        backgroundImage: "url('/background.png')",
      }}
    >
      <div className="w-1/2 flex flex-col items-start gap-12 pl-[10%] pb-[7%]">
        <img src={zara1} alt="zara" className="absolute right-0 top-8" />
        <img src={zara2} alt="zara" />
        <p className="font-[Roboto] text-2xl text-white max-w-[504px]">
          Lustrous yet understated. The new evening wear collection exclusively
          offered at the reopened Giorgio Armani boutique in Los Angeles.
        </p>
        <Button text="see collection" type={ButtonTypes.large} invertColors />
      </div>
    </div>
  );
}

export default BrandBanner;
