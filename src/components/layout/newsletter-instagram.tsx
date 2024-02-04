import SectionTitle from "../common/section-title";
import camIcon from "../../assets/icons/cam-icon.svg";
import submitIcon from "../../assets/icons/submit-icon.svg";
import image1 from "../../assets/images/image-insta-1.png";
import image2 from "../../assets/images/image-insta-2.png";
import image3 from "../../assets/images/image-insta-3.png";
import image4 from "../../assets/images/image-insta-4.png";
import image5 from "../../assets/images/image-insta-5.png";
import image6 from "../../assets/images/image-insta-6.png";
import Button from "../common/button";
import { ButtonTypes } from "../../utils/types";

function NewsletterInstagram() {
  return (
    <div className="flex flex-col items-center gap-8 sm:gap-16 py-10 sm:py-20 bg-gray">
      <div className="flex flex-col gap-8 sm:gap-16">
        <SectionTitle text="follow products and discounts on instagram" />
        <div className="grid grid-cols-2 grid-rows-3 sm:flex gap-5">
          <Card image={image1} />
          <Card image={image2} />
          <Card image={image3} />
          <Card image={image4} />
          <Card image={image5} />
          <Card image={image6} />
        </div>
      </div>
      <div className="flex flex-col gap-8 sm:gap-16">
        <SectionTitle text="or subscribe to the newsletter" />
        <div className="flex gap-5">
          <div className="flex flex-col gap-2 w-[90%]">
            <input
              type="email"
              placeholder="email address..."
              className="font-semibold text-base text-dark50 capitalize bg-transparent focus-visible:outline-none pl-4"
            />
            <hr className="bg-dark" />
          </div>
          <Button text="submit" type={ButtonTypes.line} icon={submitIcon} />
        </div>
      </div>
    </div>
  );
}

interface CardProps {
  image: string;
}

function Card({ image }: CardProps) {
  return (
    <div className="group relative">
      <img src={image} alt="" />
      <div className="hidden group-hover:flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 bg-dark50">
        <img src={camIcon} alt="" />
      </div>
    </div>
  );
}

export default NewsletterInstagram;
