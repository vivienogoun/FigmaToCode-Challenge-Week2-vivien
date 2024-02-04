import { ButtonTypes } from "../../utils/types";
import Button from "../common/button";
import filterIcon from "../../assets/icons/filter-icon.svg";
import { maxWidthMarginAuto } from "../../utils/constants";
import ProductCard from "../common/card-product";
import image1 from "../../assets/images/image-product-1.png";
import image2 from "../../assets/images/image-product-2.png";
import image3 from "../../assets/images/image-product-3.png";
import image4 from "../../assets/images/image-product-4.png";
import image5 from "../../assets/images/image-product-5.png";
import image6 from "../../assets/images/image-product-6.png";
import image7 from "../../assets/images/image-product-7.png";
import image8 from "../../assets/images/image-product-8.png";
import SectionTitle from "../common/section-title";
import ItemTab from "../common/item-tab";

function GridProducts() {
  return (
    <>
      <div className={`flex flex-col gap-4 sm:gap-8 ${maxWidthMarginAuto}`}>
        <SectionTitle text="products" />
        <div className="hidden sm:flex justify-between">
          <div className="flex justify-between gap-10">
            <ItemTab text="all products" active />
            <ItemTab text="t-shirt" />
            <ItemTab text="hoodies" />
            <ItemTab text="jacket" />
          </div>
          <Button text="filter" type={ButtonTypes.small} icon={filterIcon} />
        </div>
        <div className="flex flex-col sm:grid grid-rows-2 grid-cols-4 gap-5">
          <ProductCard
            image={image1}
            price="$63.85"
            subtitle="Dress"
            title="Adicolor Classics Joggers"
          />
          <ProductCard
            image={image2}
            price="$130.00"
            subtitle="Bag"
            title="Nike Sportswear Futura Luxe"
          />
          <ProductCard
            image={image3}
            price="$53.00"
            subtitle="Scarf"
            title="Geometric print Scarf"
          />
          <ProductCard
            image={image4}
            price="$155.00"
            subtitle="Dress"
            title="Yellow Reserved Hoodie"
            sale
            discount="$364.00"
          />
          <ProductCard
            image={image5}
            price="$236.00"
            subtitle="Dress"
            title="Basic Dress Green"
            hot
          />
          <ProductCard
            image={image6}
            price="$198.00"
            subtitle="Shoe"
            title="Nike Air Zoom Pegasus"
            sale
            discount="$220.00"
          />
          <ProductCard
            image={image7}
            price="$120.50"
            subtitle="Dress"
            title="Nike Repel Miler"
          />
          <ProductCard
            image={image8}
            price="$160.00"
            subtitle="Glasses"
            title="Nike Sportswear Futura Luxe"
          />
        </div>
      </div>
    </>
  );
}

export default GridProducts;
