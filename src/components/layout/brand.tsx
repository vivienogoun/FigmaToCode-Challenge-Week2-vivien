import brand1 from "../../assets/images/brand-1.png";
import brand2 from "../../assets/images/brand-2.png";
import brand3 from "../../assets/images/brand-3.png";
import brand4 from "../../assets/images/brand-4.png";
import brand5 from "../../assets/images/brand-5.png";
import { maxWidthMarginAuto } from "../../utils/constants";

function Brand() {
  return (
    <>
      <div
        className={`flex overflow-auto justify-between gap-16 ${maxWidthMarginAuto}`}
      >
        <img src={brand1} alt="brand 1" />
        <img src={brand2} alt="brand 2" />
        <img src={brand3} alt="brand 3" />
        <img src={brand4} alt="brand 4" />
        <img src={brand5} alt="brand 5" />
      </div>
    </>
  );
}

export default Brand;
