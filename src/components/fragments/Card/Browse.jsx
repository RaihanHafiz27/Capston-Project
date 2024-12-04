export const Browse = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto py-10 border-2 border-pink-600 font-BebasNeue">
      <h2 className="mb-4 text-3xl font-bold tracking-widest text-gray-800 uppercase border lg:text-5xl dark:text-slate-200">
        Browse By Dress Style
      </h2>
      <div className="flex flex-wrap justify-between flex-1 w-full ">
        <div className="flex flex-col w-full lg:flex-row">
          <CardBrowse1
            image={"/images/img-1.jpg"}
            title={"Party"}
            description={"Stylish and glamorous attire for celebrations."}
          />
          <CardBrowse2
            image={"/images/img-3.jpg"}
            title={"Casual"}
            description={"Simple and comfortable outfits for everyday wear."}
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
          />
          <CardBrowse1
            image={"/images/img-2.jpg"}
            title={"Gym"}
            description={"Functional and flexible wear for your workouts."}
            classname={"object-left-top"}
          />
        </div>
      </div>
    </div>
  );
};

const CardBrowse1 = (props) => {
  const { image, title, description, classname = "object-right-top" } = props;
  return (
    <div
      className="relative w-full h-64 overflow-hidden border border-gray-300 rounded-lg lg:w-2/5 group"
      style={{
        boxShadow: "4px 4px 6px rgba(0,0,0,0.7)",
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
      {/* <span className="absolute bottom-0 w-full h-20 transition-all duration-500 ease-in-out translate-y-20 opacity-0 bg-gray-900/70 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="flex items-center justify-center w-full h-full">
          <p className="w-4/5 text-2xl tracking-wider text-center text-slate-200">
            {description}
          </p>
        </div>
      </span> */}
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
  const { image, title, description } = props;
  return (
    <div
      className={`flex justify-end w-full lg:w-3/5 h-64 ${
        title === "Casual" ? "lg:pl-4" : "lg:pr-4"
      }  group`}
    >
      <div
        className="relative w-full overflow-hidden rounded-lg"
        style={{
          boxShadow: "4px 4px 6px rgba(0,0,0,0.7)",
        }}
      >
        <img
          src={image}
          alt=""
          className="object-cover object-left-top w-full h-full transition-all duration-500 border border-gray-300 rounded-lg group-hover:brightness-75"
        />
        <p
          className={`absolute text-2xl font-semibold tracking-widest uppercase text-gray-700 ${
            title === "Casual" ? "left-4" : "right-4"
          } top-4`}
        >
          {title}
        </p>
        {/* <span className="absolute bottom-0 w-full h-20 transition-all duration-500 ease-in-out translate-y-20 opacity-0 bg-gray-900/70 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex items-center justify-center w-full h-full">
            <p className="w-4/5 text-2xl tracking-wider text-center text-slate-200">
              {description}
            </p>
          </div>
        </span> */}
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
