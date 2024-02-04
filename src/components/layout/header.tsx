import searchIcon from "../../assets/icons/search-icon.svg";
import logo from "../../assets/images/logo.png";

import accountIcon from "../../assets/icons/account-icon.svg";
import shoppingIcon from "../../assets/icons/shopping-icon.svg";
import { ButtonTypes } from "../../utils/types";
import Button from "../common/button";

function Header() {
  return (
    <>
      <div className={`flex flex-col gap-6`}>
        <TopHeader />
        <Menu />
      </div>
    </>
  );
}

function TopHeader() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between sm:gap-[33%]">
          <img
            src={searchIcon}
            alt="search icon"
            className="cursor-pointer hidden sm:block"
          />
          <a href="/">
            <img src={logo} alt="logo" className="max-w-[150px] sm:max-w-max" />
          </a>
          <div className="flex gap-4 sm:gap-8">
            <Button
              text="Account"
              type={ButtonTypes.simple}
              icon={accountIcon}
            />
            <Button
              text="Shopping"
              type={ButtonTypes.simple}
              icon={shoppingIcon}
            />
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

function Menu() {
  return (
    <>
      <div className="hidden sm:flex justify-between gap-8 text-base font-['Open_Sans']">
        <a>Jewelry & Accessories</a>
        <a>Clothing & Shoes</a>
        <a>Home & Living</a>
        <a>Wedding & Party</a>
        <a>Toys & Entertainment</a>
        <a>Art & Collectibles</a>
        <a>Craft Supplies & Tools</a>
      </div>
    </>
  );
}

export default Header;
