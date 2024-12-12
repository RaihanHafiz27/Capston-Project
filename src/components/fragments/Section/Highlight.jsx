import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Highlight = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);
  return (
    <div className="w-full h-auto p-6 bg-gray-900 lg:p-2 lg:h-96">
      <div className="flex flex-col-reverse items-center justify-center w-full h-full p-2 lg:flex-row text-slate-200">
        <div className="w-11/12 h-full p-4 space-y-6 lg:w-1/2 font-Poppins">
          <p className="font-semibold text-rose-600">Categoris</p>
          <h2
            data-aos="zoom-out"
            data-aos-duration="1500"
            data-aos-delay="500"
            className="text-2xl font-bold lg:text-5xl"
          >
            Enhance Your Music Experience
          </h2>
          <p
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="1000"
            className="text-base lg:text-lg"
          >
            JBL headphones deliver superior sound quality, comfort, and style
            for your everyday music experience.
          </p>
          <button
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1200"
            className="w-2/5 py-2 duration-300 hover:scale-105 bg-rose-600 hover:bg-rose-400"
          >
            Buy Now!
          </button>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="1000"
          className="w-11/12 h-full lg:w-1/2"
        >
          <img
            src="/images/headphone.png"
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
