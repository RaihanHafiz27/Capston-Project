import { Link, useLocation } from "react-router-dom";
import { LogoutIcon } from "../../elements/icons/LogoutIcon";
import { NavbarTitle } from "./NavbarTitle";
import { Button } from "../../elements/Button/Primary/Button";
import { ProductsIcon } from "../../elements/icons/ProductsIcon";
import { CartIcon } from "../../elements/icons/CartIcon";
import { ProfileIcon } from "../../elements/icons/ProfileIcon";
import { HomeIcon } from "../../elements/icons/HomeIcon";
import { HamburgerIcon } from "../../elements/icons/HamburgerIcon";
import { HamburgerBtn } from "../../elements/Button/Hamburger/HamburgerButon";
import { useRef, useState } from "react";

const navbarItems = [
  {
    icon: <HomeIcon />,
    title: "Home",
    to: "/",
  },
  {
    icon: <ProductsIcon />,
    title: "Products",
    to: "/products",
  },
  // {
  //   icon: <CartIcon />,
  //   title: "Cart",
  //   to: "/cart",
  // },
  {
    icon: <ProfileIcon />,
    title: "Profile",
    to: "/profile",
  },
];

const mobileNavbarItems = [
  {
    icon: <HomeIcon />,
    title: "Home",
    to: "/",
  },
  {
    icon: <ProductsIcon />,
    title: "Products",
    to: "/products",
  },
  {
    icon: <CartIcon />,
    title: "Cart",
    to: "/cart",
  },
  {
    icon: <ProfileIcon />,
    title: "Profile",
    to: "/profile",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  // console.log(path.pathname);

  const isHome = location.pathname === "/";
  const textColor = isHome ? "text-white" : "text-white";
  const titleColor = isHome ? "text-white" : "text-white";

  return (
    <nav className="fixed z-50 flex items-center justify-center w-full border-2 border-white lg:py-6 2xl:py-8">
      <div
        className={`flex items-center justify-between w-full py-2 px-4 lg:rounded-full ${
          isHome ? "bg-transparent lg:bg-gray-900" : "bg-amber-500 "
        } lg:w-3/5 lg:py-4 lg:px-6 2xl:px-8`}
      >
        <div className="flex justify-between w-full lg:w-auto">
          <NavbarTitle classname={`w-auto ${titleColor}`} />
          {/* hamburger for mobile screen */}
          <div className="lg:hidden">
            <HamburgerBtn onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
          </div>
        </div>
        {/* links for large screen */}
        <div className="items-center justify-center hidden lg:flex">
          <ul className="flex flex-col items-center space-x-8 list-none lg:flex-row">
            {navbarItems.map((item) => (
              <li key={item.title}>
                {/* font-Roboto  */}
                <Link
                  to={item.to}
                  className={`flex items-center text-sm font-Poppins font-semibold leading-snug tracking-widest uppercase  2xl:text-base space-x-1 ${textColor}`}
                >
                  {/* <i>{item.icon}</i> */}
                  <span className="">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="items-center justify-center hidden space-x-4 lg:flex">
          <Link
            to={"/"}
            className={`relative flex items-center text-sm font-Roboto font-semibold leading-snug tracking-widest uppercase  2xl:text-base space-x-1 ${textColor}`}
          >
            <CartIcon />
            <p className="absolute px-1 text-xs text-white bg-red-500 rounded-full -left-2 -top-1">
              1
            </p>
          </Link>
          <Link
            to={"/signin"}
            className={`flex items-center text-sm 2xl:text-base font-semibold leading-snug tracking-widest uppercase bg-transparent hover:bg-transparent lg:py-0 font-Roboto ${textColor}`}
            // onClick={handleLogout}
          >
            logout
          </Link>
        </div>
      </div>
      <div
        className={`flex flex-col absolute w-64 h-screen bg-gray-800 lg:hidden transition-all duration-500 right-0 top-0 ${
          !isOpen ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between p-3 border border-pink-600 text-slate-200">
          <div className="flex items-center justify-center">
            <img src="/images/user.png" alt="profile" className="w-8 h-auto" />
            <p className="ml-2">KannaAnissa</p>
          </div>
          <HamburgerBtn onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        </div>
        <div className="flex-1 mt-8 border border-white">
          <ul className="flex flex-col items-center justify-center space-y-8">
            {mobileNavbarItems.map((item) => (
              <li
                key={item.title}
                className="w-4/5 py-2 rounded-md bg-amber-600"
              >
                <Link
                  to={item.to}
                  className="flex items-center justify-center text-slate-200 "
                >
                  <i>{item.icon}</i>
                  <span className="ml-2">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-4/5 mx-auto mb-10">
          <Button>logput</Button>
        </div>
      </div>
    </nav>
  );
};
