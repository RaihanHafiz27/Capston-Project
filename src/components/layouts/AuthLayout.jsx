// import { Link } from "react-router-dom";

import { Link, Outlet, useLocation } from "react-router-dom";
import { NavbarTitle } from "../fragments/Navbar/NavbarTitle";
import { useState } from "react";
import TypewriterComponent from "typewriter-effect";
import { SignInWith } from "../fragments/SignInWith";
import { FormLogin } from "../fragments/Form/FormLogin";

export const AuthLayout = ({ children }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className=" w-screen h-screen border-2 border-blue-800 bg-[url('/images/17178.jpg')] bg-cover bg-center">
      <div className="flex flex-col w-full h-full border-2 border-pink-500">
        <div className="p-5">
          <NavbarTitle />
        </div>
        <div className="flex items-center justify-center flex-1 border-2 border-black">
          <div className="w-2/5 border-2 border-white ">
            <div
              className="flex flex-col items-center justify-center w-11/12 bg-white lg:w-3/5 rounded-xl 2xl:ml-20"
              style={{
                boxShadow: isHover ? "2px 2px 8px rgba(0,0,0,0.6)" : "none",
                transition: "box-shadow 0.3s ease-in-out",
              }}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <Navigation />
              <div className="flex flex-col w-4/5 lg:w-4/5">
                <Outlet />
                {children}
                {/* <FormLogin /> */}
              </div>
              <div className="inline-flex items-center justify-center w-full my-4">
                <hr className="w-1/5 lg:w-1/4 h-0.5 bg-gray-200 border-0 rounded dark:bg-gray-400"></hr>
                <p className="mx-2 text-sm text-gray-600 md:text-base">
                  or continue with
                </p>
                <hr className="w-1/5 lg:w-1/4 h-0.5 bg-gray-200 border-0 rounded dark:bg-gray-400"></hr>
              </div>
              <SignInWith />
            </div>
          </div>
          <PromoBanner />
        </div>
      </div>
    </div>
  );
};

const Navigation = () => {
  const location = useLocation();
  return (
    <div className="my-4 text-center 2xl:my-6">
      <div className="my-2 text-lg font-semibold 2xl:my-5 lg:text-xl 2xl:text-2xl font-Poopins text-amber-600">
        <TypewriterComponent
          options={{
            strings: [
              location.pathname === "/signin"
                ? "Welcome to Login Page"
                : "Welcome to Register Page",
            ],
            autoStart: true,
            loop: true,
            delay: 250,
            deleteSpeed: 50,
            cursor: "|",
            cursorClassName: "Typewriter__cursor",
          }}
        />
      </div>
      <Link
        to={"/signin"}
        className={`mx-1 lg:text-lg 2xl:text-xl font-semibold tracking-wide font-Poopins ${
          location.pathname === "/"
            ? " text-amber-600  underline underline-offset-8"
            : "text-gray-400 relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-amber-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:-bottom-1.5 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-amber-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:-bottom-1.5 after:right-[50%]"
        }`}
      >
        Sign in
      </Link>
      <Link
        to={"/signup"}
        className={`mx-1 lg:text-lg 2xl:text-xl font-semibold tracking-wide font-Poopins ${
          location.pathname === "/register"
            ? "underline underline-offset-8 text-amber-600"
            : "text-gray-400 relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-amber-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:-bottom-1.5 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-amber-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:-bottom-1.5 after:right-[50%]"
        }`}
      >
        Sign up
      </Link>
    </div>
  );
};

const PromoBanner = () => {
  return (
    <div className="flex items-center lg:items-end lg:justify-end h-1/6 lg:h-full lg:w-1/2">
      <img
        src="/images/banner.png"
        alt=""
        className="w-40 ml-2 lg:h-auto h-4/5 lg:w-72 2xl:w-96 lg:ml-0"
      />
    </div>
  );
};
