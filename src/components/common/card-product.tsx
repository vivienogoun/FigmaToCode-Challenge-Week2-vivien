import { ButtonTypes, ProductCardProps } from "../../utils/types";
import heartIcon from "../../assets/icons/heart-icon.svg";
import searchIcon from "../../assets/icons/search-icon-white.svg";
import shoppingIcon from "../../assets/icons/shopping-icon-white.svg";
import Button from "./button";

function ProductCard({
  image,
  hot,
  sale,
  price,
  subtitle,
  title,
  discount,
}: ProductCardProps) {
  return (
    <div>
      <div className="relative cursor-pointer group">
        <img src={image} alt={title} />
        {(hot || sale) && (
          <div
            className={`${
              hot ? "bg-primary" : "bg-black"
            } uppercase font-['Open_Sans'] font-semibold text-center text-xs text-white absolute top-4 px-2 py-1`}
          >
            {hot ? "hot" : sale ? "sale" : ""}
          </div>
        )}
        <div className="hidden border-2 border-[#1e2832] group-hover:flex justify-between p-2 bg-[#1e2832] absolute bottom-0 font-['Open_Sans'] font-semibold text-base text-white w-full">
          <div className="flex gap-4">
            <img src={heartIcon} alt="heart" className="cursor-pointer" />
            <img src={searchIcon} alt="search" className="cursor-pointer" />
          </div>
          <Button
            text="shop now"
            type={ButtonTypes.simple}
            icon={shoppingIcon}
          />
        </div>
      </div>
      <div className="flex flex-col px-1 py-2 gap-2 font-['Open_Sans'] text-base">
        <p className="font-semibold">{title}</p>
        <div className="flex justify-between">
          <span className="text-dark50">{subtitle}</span>
          <div className="flex items-end gap-2">
            {discount !== null && (
              <span className="font-semibold text-right text-sm text-dark50 line-through">
                {discount}
              </span>
            )}
            <span
              className={`font-semibold text-right ${
                discount == null ? "text-dark" : "text-primary"
              }`}
            >
              {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
