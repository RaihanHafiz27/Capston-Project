// import { Link } from "react-router-dom";

import { Link, Outlet, useLocation } from "react-router-dom";

import { useState } from "react";
import TypewriterComponent from "typewriter-effect";
import { SignInWith } from "../fragments/SignInWith";
import { FormLogin } from "../fragments/Form/FormLogin";

export const AuthLayout = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className=" w-screen h-screen  bg-[url('/images/17178.jpg')] bg-cover bg-center">
      <div className="flex flex-col w-full h-full ">
        <div className="p-5">
          <div className="w-44 text-slate-200">
            <img
              src="/images/luxura-logo-gray.png"
              alt=""
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="flex-1 w-full ">
          <div className="flex items-center justify-center w-full lg:w-1/2 h-5/6">
            <div
              className="flex flex-col items-center justify-center w-11/12 bg-white lg:w-1/2 2xl:w-2/5 rounded-xl "
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
              </div>
              <div className="inline-flex items-center justify-center w-full my-2 lg:my-4">
                <hr className="w-1/5 lg:w-1/4 h-0.5 bg-gray-200 border-0 rounded dark:bg-gray-400"></hr>
                <p className="mx-2 text-sm text-gray-600 md:text-base">
                  or continue with
                </p>
                <hr className="w-1/5 lg:w-1/4 h-0.5 bg-gray-200 border-0 rounded dark:bg-gray-400"></hr>
              </div>
              <SignInWith />
            </div>
          </div>
          <div className="flex items-end justify-end w-full h-1/6">
            <PromoBanner />
          </div>
        </div>
      </div>
    </div>
  );
};

const Navigation = () => {
  const location = useLocation();
  return (
    <div className="my-4 text-center 2xl:my-6">
      <div className="my-2 text-lg font-semibold 2xl:my-5 lg:text-xl 2xl:text-2xl font-Poopins text-rose-600">
        <TypewriterComponent
          options={{
            strings: [
              location.pathname === "/signin"
                ? "Let's start shopping now!"
                : "Get the best deals!",
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
        className={`mx-2 lg:text-sm 2xl:text-xl font-semibold tracking-wide font-Poopins ${
          location.pathname === "/signin"
            ? " text-rose-600  underline underline-offset-8"
            : "text-gray-400 relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-rose-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:-bottom-1.5 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-rose-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:-bottom-1.5 after:right-[50%]"
        }`}
      >
        Sign in
      </Link>
      <Link
        to={"/signup"}
        className={`mx-2 lg:text-sm 2xl:text-xl font-semibold tracking-wide font-Poopins ${
          location.pathname === "/signup"
            ? "underline underline-offset-8 text-rose-600"
            : "text-gray-400 relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-rose-600 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:-bottom-1.5 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-rose-600 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:-bottom-1.5 after:right-[50%]"
        }`}
      >
        Sign up
      </Link>
    </div>
  );
};

const PromoBanner = () => {
  return (
    <div className="flex items-center lg:items-end lg:justify-end lg:h-full">
      <img
        src="/images/banner.png"
        alt=""
        className="w-40 h-auto ml-2 lg:w-60 2xl:w-96"
      />
    </div>
  );
};
