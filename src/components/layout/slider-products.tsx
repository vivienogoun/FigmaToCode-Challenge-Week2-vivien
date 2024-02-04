import { maxWidthMarginAuto } from "../../utils/constants";
import { ButtonTypes } from "../../utils/types";
import Button from "../common/button";
import ProductCard from "../common/card-product";
import ItemTab from "../common/item-tab";
import SectionTitle from "../common/section-title";
import image2 from "../../assets/images/image-product-2.png";
import image4 from "../../assets/images/image-product-4.png";
import image5 from "../../assets/images/image-product-5.png";
import image6 from "../../assets/images/image-product-6.png";

function SliderProducts() {
  return (
    <>
      <div className={`flex flex-col gap-4 sm:gap-8 ${maxWidthMarginAuto}`}>
        <SectionTitle text="best sellers" />
        <div className="hidden sm:flex justify-between">
          <div className="flex justify-between gap-10">
            <ItemTab text="all products" active />
            <ItemTab text="t-shirt" />
            <ItemTab text="hoodies" />
            <ItemTab text="jacket" />
          </div>
          <Button text="show all" type={ButtonTypes.small} />
        </div>
        <div className="flex flex-col sm:flex-row gap-5">
          <ProductCard
            image={image5}
            price="$236.00"
            subtitle="Dress"
            title="Basic Dress Green"
            hot
          />
          <ProductCard
            image={image2}
            price="$130.00"
            subtitle="Bag"
            title="Nike Sportswear Futura Luxe"
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
            image={image6}
            price="$198.00"
            subtitle="Shoe"
            title="Nike Air Zoom Pegasus"
            sale
            discount="$220.00"
          />
        </div>
      </div>
    </>
  );
}

export default SliderProducts;
