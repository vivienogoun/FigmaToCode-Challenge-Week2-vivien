import { HotCardProps } from "../../utils/types";
import image from "../../assets/images/image-category.png";
import item1 from "../../assets/images/item-category-1.png";
import item2 from "../../assets/images/item-category-2.png";
import item3 from "../../assets/images/item-category-3.png";
import item4 from "../../assets/images/item-category-4.png";
import { maxWidthMarginAuto } from "../../utils/constants";

function HotCategory() {
  return (
    <>
      <div
        className={`flex flex-col sm:flex-row gap-5 relative mb-10 sm:mb-20 ${maxWidthMarginAuto}`}
      >
        <p className="font-[Roboto] text-3xl leading-10 sm:-rotate-90 sm:absolute -left-80 top-72 tracking-wider text-center uppercase">
          Explore new and popular styles
        </p>
        <Card image={image} />
        <div className="flex flex-col items-center sm:grid grid-rows-2 grid-cols-2 gap-5">
          <Card image={item1} />
          <Card image={item2} sale />
          <Card image={item3} />
          <Card image={item4} />
        </div>
      </div>
    </>
  );
}

function Card({ image, hot, sale }: HotCardProps) {
  return (
    <>
      <div className="relative cursor-pointer group">
        <img src={image} alt="" />
        {(hot || sale) && (
          <div
            className={`bg-[${
              hot ? "#ff6f61" : sale ? "#1e2832" : ""
            }] uppercase font-['Open_Sans'] font-semibold text-center text-xs text-white absolute top-4 px-2 py-1`}
          >
            {hot ? "hot" : sale ? "sale" : ""}
          </div>
        )}
        <div className="hidden border-2 border-[#1e2832] group-hover:flex justify-between py-3 px-2 bg-[#1e2832] absolute bottom-0 font-['Open_Sans'] font-semibold text-base text-white w-full">
          <span>Jacket</span>
          <span>103 Products</span>
        </div>
      </div>
    </>
  );
}

export default HotCategory;
