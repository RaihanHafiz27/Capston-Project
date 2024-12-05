import { Link, useLocation } from "react-router-dom";
import { LogoutIcon } from "../../elements/icons/LogoutIcon";
import { Button } from "../../elements/Button/Primary/Button";
import { ProductsIcon } from "../../elements/icons/ProductsIcon";
import { CartIcon } from "../../elements/icons/CartIcon";
import { ProfileIcon } from "../../elements/icons/ProfileIcon";
import { HomeIcon } from "../../elements/icons/HomeIcon";
import { HamburgerIcon } from "../../elements/icons/HamburgerIcon";
import { HamburgerBtn } from "../../elements/Button/Hamburger/HamburgerButon";
import { useEffect, useRef, useState } from "react";
import { EllipsisIcon } from "../../elements/icons/EllipsisIcon";
import { Cart } from "../../elements/Cart/Cart";
import { AboutIcon } from "../../elements/icons/AboutIcon";
import { ServiceIcon } from "../../elements/icons/ServiceIcon";
import { ContactIcon } from "../../elements/icons/ContactIcon";
import { useDispatch, useSelector } from "react-redux";

const navbarItems = [
  {
    title: "Home",
    icon: <HomeIcon />,
    to: "/",
  },
  {
    title: "Products",
    icon: <ProductsIcon />,
    to: "/products",
  },
  {
    title: "About Us",
    icon: <AboutIcon />,
    to: "/about",
  },
  {
    title: "Contact Us",
    icon: <ContactIcon />,
    to: "/contact-us",
  },
  {
    title: "Services",
    icon: <ServiceIcon />,
    to: "",
  },
];

const subLinksServices = [
  {
    title: "Faq",
    link: "/faq-help",
  },
  {
    title: "Help",
    link: "/",
  },
  {
    title: "Returns",
    link: "/",
  },
  {
    title: "Order Tracking",
    link: "/",
  },
];

const ellipsisLinks = [
  { title: "Profile", to: "/profile" },
  { title: "Order History", to: "/orders" },
  { title: "Wishlist", to: "/wishlist" },
  { title: "Login", to: "/signin" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isHover, setIsHover] = useState(false);
  // console.log(path.pathname);
  const sidebarRef = useRef(null);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.dataProducts.isDarkMode);

  console.log(isDarkMode);

  const handleDarkMode = () => dispatch({ type: "DARK_MODE" });

  // Close sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isHome = location.pathname === "/";
  const textColor = isHome ? "text-white" : "text-white";
  const titleColor = isHome ? "text-white" : "text-white";

  return (
    <nav
      className={`fixed z-50 flex items-center justify-center w-full  lg:py-2 ${
        isHome ? "bg-transparent" : "bg-rose-600 border-b-2 border-gray-200"
      }`}
    >
      <div
        className={`flex items-center justify-between w-full py-2 bg-transparent   lg:w-4/5 2xl:w-3/5 `}
      >
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="w-44 text-slate-200">
            <img
              src="/images/luxura-logo.png"
              alt=""
              className="w-full h-auto"
            />
          </div>

          {/* <NavbarTitle classname={`w-auto ${titleColor}`} /> */}
          {/* hamburger for mobile screen */}
          <div className="lg:hidden">
            <HamburgerBtn onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
          </div>
        </div>
        {/* links for large screen */}
        <div className="items-center justify-center hidden lg:flex">
          <LinksLargeScreen textColor={textColor} />
        </div>
        <div className="items-center justify-center hidden space-x-4 lg:flex">
          <DarkMode isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
          <Cart textColor={textColor} />
          <EllipsisMenu />
        </div>
      </div>
      <div
        ref={sidebarRef}
        className={`flex flex-col absolute w-64 h-screen bg-gray-900 lg:hidden transition-all duration-500 right-0 top-0 ${
          !isOpen ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between p-3 border border-pink-600 text-slate-200">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <img src="/images/user.png" alt="profile" className="w-8 h-8" />
              <p className="ml-2 text-sm">KannaAnissa</p>
            </div>
            <div className="flex ml-2 space-x-2">
              <Cart textColor={textColor} />
              <EllipsisMenu />
            </div>
          </div>
          <HamburgerBtn onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        </div>
        <div className="flex-1 mt-8 border border-white">
          <LinksMobileScreen
            textColor={textColor}
            location={location.pathname}
          />
        </div>
      </div>
    </nav>
  );
};

const LinksLargeScreen = (props) => {
  const { textColor } = props;
  const [isHover, setIsHover] = useState(false);
  return (
    <ul className="flex items-center justify-center space-x-6 list-none ">
      {navbarItems.map((item) => (
        <li
          key={item.title}
          className="relative"
          onMouseEnter={() => item.title === "Services" && setIsHover(true)}
          onMouseLeave={() => item.title === "Services" && setIsHover(false)}
          onClick={() => item.title === "Services" && setIsHover(!isHover)}
        >
          <Link
            to={item.to}
            className={`flex items-center text-xs lg:text-sm font-Poppins font-semibold leading-snug tracking-wider uppercase  ${textColor}`}
          >
            {item.title}
            {item.title === "Services" && (
              <img
                src={"/images/arrow-white.png"}
                width={20}
                height={10}
                alt="arrow"
                className={`ml-2 w-4 h-4 ${
                  isHover ? "rotate-90" : "rotate-0"
                } transition duration-500 ease-in-out`}
              />
            )}
          </Link>
          {item.title === "Services" && (
            <ul
              className={`bg-white absolute w-48 -left-12 top-6 lg:top-5 transition-all duration-500 ease-in-out rounded-md ${
                isHover ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              {subLinksServices.map((sub) => (
                <li key={sub.title} className="px-4 py-2">
                  <Link
                    className="text-sm text-gray-700 hover:text-amber-500 lg:text-base"
                    to={sub.link}
                  >
                    {sub.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

const LinksMobileScreen = (props) => {
  const { location } = props;
  const [subHover, setSubHover] = useState(false);
  return (
    <ul className="flex flex-col items-center justify-center space-y-8">
      {navbarItems.map((item) => (
        <li
          key={item.title}
          className={`relative w-11/12 py-2 rounded-md ${
            location === item.to ? "bg-gray-600" : ""
          }`}
        >
          <Link
            to={item.to}
            className="flex items-center justify-center text-slate-200 "
            onClick={() => item.title === "Services" && setSubHover(!subHover)}
          >
            <div className="flex items-center justify-between w-3/5 pl-6 ">
              <i>{item.icon}</i>
              <span className="flex-1 ml-2">{item.title}</span>
            </div>
            {item.title === "Services" && (
              <ul
                className={`bg-white absolute w-48  top-12 transition-all duration-300 ease-in-out rounded-md py-4 px-2 ${
                  subHover
                    ? "translate-y-0 opacity-100 visible"
                    : "-translate-y-10 opacity-0 invisible"
                }`}
              >
                {subLinksServices.map((sub) => (
                  <li key={sub.title} className="my-2 ">
                    <Link
                      className="text-sm text-gray-700 hover:text-amber-500 lg:text-base"
                      to={sub.link}
                    >
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

// Komponen Dropdown Menu
const DropdownMenu = ({ links, isOpen, closeMenu }) => {
  const token = localStorage.getItem("token");
  const handleLogout = () => localStorage.removeItem("token");
  return (
    <div
      className={`z-10 absolute top-8 -right-10 lg:-left-20 w-48 bg-white rounded-lg shadow-lg text-black transition-all duration-300 ${
        isOpen
          ? "scale-100 opacity-100"
          : "scale-75 opacity-0 pointer-events-none"
      }`}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          className="block px-4 py-2 hover:bg-gray-100"
          onClick={link.title === "Login" ? handleLogout : closeMenu}
        >
          {link.title === "Login" && token ? "Logout" : link.title}
        </Link>
      ))}
    </div>
  );
};

// Komponen Ellipsis Menu
const EllipsisMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Tombol Titik Tiga */}
      <button onClick={toggleMenu} className="">
        <EllipsisIcon />
      </button>

      {/* Dropdown Menu */}
      <DropdownMenu
        links={ellipsisLinks}
        isOpen={isOpen}
        closeMenu={closeMenu}
      />
    </div>
  );
};

const DarkMode = (props) => {
  const { isDarkMode, handleDarkMode } = props;
  console.log(isDarkMode);

  return (
    <button onClick={handleDarkMode}>
      {isDarkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 text-slate-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 text-slate-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      )}
    </button>
  );
};
