import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Browse = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-auto py-0 font-BebasNeue">
      <h2
        data-aos="zoom-out"
        data-aos-duration="1000"
        data-aos-delay="500"
        className="my-6 text-3xl font-bold tracking-widest text-gray-800 uppercase lg:text-5xl dark:text-slate-200"
      >
        Browse By Dress Style
      </h2>
      <div className="flex flex-wrap justify-between flex-1 w-full ">
        <div className="flex flex-col w-full lg:flex-row">
          <CardBrowse1
            image={"/images/img-1.jpg"}
            title={"Party"}
            description={"Stylish and glamorous attire for celebrations."}
            aosType={"fade-down"}
            aosDuration={"1500"}
            aosDelay={"500"}
          />
          <CardBrowse2
            image={"/images/img-3.jpg"}
            title={"Casual"}
            description={"Simple and comfortable outfits for everyday wear."}
            aosType={"fade-left"}
            aosDuration={"1500"}
            aosDelay={"1000"}
          />
        </div>
        <div className="flex flex-col w-full mt-4 lg:flex-row">
          <CardBrowse2
            image={"/images/img-4.jpg"}
            title={"Formal"}
            description={
              "Elegant and professional outfits for formal occasions."
            }
            classname={"object-right-top"}
            aosType={"fade-right"}
            aosDuration={"1500"}
            aosDelay={"1000"}
          />
          <CardBrowse1
            image={"/images/img-2.jpg"}
            title={"Gym"}
            description={"Functional and flexible wear for your workouts."}
            classname={"object-left-top"}
            aosType={"fade-up"}
            aosDuration={"1500"}
            aosDelay={"500"}
          />
        </div>
      </div>
    </div>
  );
};

const CardBrowse1 = (props) => {
  const {
    image,
    title,
    description,
    classname = "object-right-top",
    aosType,
    aosDuration,
    aosDelay,
  } = props;
  return (
    <div
      data-aos={aosType}
      data-aos-duration={aosDuration}
      data-aos-delay={aosDelay}
      className="relative w-full h-64 overflow-hidden border border-gray-300 rounded-lg dark:border-none lg:w-2/5 group"
      style={{
        boxShadow: "4px 4px 6px rgba(0,0,0,0.5)",
      }}
    >
      <img
        src={image}
        alt=""
        className={`object-cover  w-full h-full transition-all duration-500 group-hover:brightness-75 ${classname}`}
      />
      <p
        className={`absolute text-2xl font-semibold tracking-widest uppercase text-gray-700 top-4 ${
          title === "Party" ? "left-4" : "right-4"
        }`}
      >
        {title}
      </p>
      <span className="absolute bottom-0 w-full h-20 transition-all duration-500 ease-in-out translate-y-0 opacity-100 bg-gray-900/70 group-hover:translate-y-20 group-hover:opacity-0 md:opacity-0 md:translate-y-20 md:group-hover:translate-y-0 md:group-hover:opacity-100">
        <div className="flex items-center justify-center w-full h-full">
          <p className="w-4/5 text-lg tracking-wider text-center lg:text-2xl text-slate-200">
            {description}
          </p>
        </div>
      </span>
    </div>
  );
};

const CardBrowse2 = (props) => {
  const { image, title, description, aosType, aosDuration, aosDelay } = props;
  return (
    <div
      data-aos={aosType}
      data-aos-duration={aosDuration}
      data-aos-delay={aosDelay}
      className={`flex justify-end w-full lg:w-3/5 h-64 ${
        title === "Casual" ? "lg:pl-4" : "lg:pr-4"
      }  group`}
    >
      <div
        className="relative w-full overflow-hidden rounded-lg"
        style={{
          boxShadow: "4px 4px 6px rgba(0,0,0,0.5)",
        }}
      >
        <img
          src={image}
          alt=""
          className="object-cover object-left-top w-full h-full transition-all duration-500 border border-gray-300 rounded-lg dark:border-none group-hover:brightness-75"
        />
        <p
          className={`absolute text-2xl font-semibold tracking-widest uppercase text-gray-700 ${
            title === "Casual" ? "left-4" : "right-4"
          } top-4`}
        >
          {title}
        </p>
        <span className="absolute bottom-0 w-full h-20 transition-all duration-500 ease-in-out translate-y-0 opacity-100 bg-gray-900/70 group-hover:translate-y-20 group-hover:opacity-0 md:opacity-0 md:translate-y-20 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <div className="flex items-center justify-center w-full h-full">
            <p className="w-4/5 text-lg tracking-wider text-center lg:text-2xl text-slate-200">
              {description}
            </p>
          </div>
        </span>
      </div>
    </div>
  );
};
