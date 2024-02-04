import { maxWidthMarginAuto } from "../../utils/constants";
import logo from "../../assets/images/logo.png";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import twitterIcon from "../../assets/icons/twitter-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";
import instagramIcon from "../../assets/icons/instagram-icon.svg";
import payementIcons from "../../assets/images/icons-payment.png";
import Button from "../common/button";
import { ButtonTypes } from "../../utils/types";
import upIcon from "../../assets/icons/up-icon.svg";

function Footer() {
  function onScrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="flex flex-col gap-10 sm:gap-20">
      <div
        className={`${maxWidthMarginAuto} flex flex-col sm:flex-row justify-between gap-8`}
      >
        <div className="flex flex-col gap-4 sm:gap-8">
          <img src={logo} alt="" className="max-w-[180px]" />
          <p className="font-['Open_Sans'] text-base text-black75 max-w-[350px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="flex gap-6">
            <a href="#">
              <img src={facebookIcon} alt="facebook" />
            </a>
            <a href="#">
              <img src={twitterIcon} alt="twitter" />
            </a>
            <a href="#">
              <img src={linkedinIcon} alt="linkedin" />
            </a>
            <a href="#">
              <img src={instagramIcon} alt="instagram" />
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-60">
          <FooterMenu
            title="catalog"
            links={["necklaces", "hoodies", "jewelry box", "t-shirt", "jacket"]}
          />
          <FooterMenu
            title="about us"
            links={[
              "our producers",
              "sitemap",
              "FAQ",
              "about us",
              "terms & conditions",
            ]}
          />
          <FooterMenu
            title="customer services"
            links={[
              "contact us",
              "track your order",
              "product care & repair",
              "book an appointement",
              "shipping & returns",
            ]}
          />
        </div>
      </div>
      <div className="bg-black py-4">
        <div
          className={`${maxWidthMarginAuto} flex flex-col sm:flex-row gap-4 justify-between items-center font-['Open_Sans']`}
        >
          <span className="text-base text-white">© 2022 Coral , Inc.</span>
          <img src={payementIcons} alt="payement methods" />
          <Button
            text="scroll to top"
            type={ButtonTypes.small}
            icon={upIcon}
            right
            onClick={onScrollToTop}
          />
        </div>
      </div>
    </div>
  );
}

interface FooterMenuProps {
  title: string;
  links: string[];
}

function FooterMenu({ links, title }: FooterMenuProps) {
  return (
    <div className="flex flex-col gap-3 font-['Open_Sans']">
      <span className="font-semibold text-base mb-3 uppercase">{title}</span>
      {links.map((link, index) => (
        <a key={index} href="#" className="text-sm capitalize">
          {link}
        </a>
      ))}
    </div>
  );
}

export default Footer;
