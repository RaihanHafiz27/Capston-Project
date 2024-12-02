export const Browse = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto py-6 text-gray-800 bg-gray-200 border-2 border-pink-600 font-BebasNeue">
      <h2 className="mb-4 text-5xl font-bold tracking-widest uppercase border ">
        Browse By Dress Style
      </h2>
      <div className="flex flex-wrap justify-between flex-1 w-11/12 border-2 border-black">
        <div className="flex w-full border-2 border-red-500">
          <div className="relative w-2/5 h-64 overflow-hidden border-2 border-yellow-400 group">
            <img
              src="/images/img-1.jpg"
              alt=""
              className="object-cover object-right-top w-full h-full transition-all duration-500 group-hover:brightness-75"
            />
            <p className="absolute text-2xl font-semibold tracking-widest uppercase top-4 left-4">
              Party
            </p>
            <span className="absolute bottom-0 w-full h-20 transition-all duration-500 ease-in-out translate-y-20 opacity-0 bg-gray-900/70 group-hover:translate-y-0 group-hover:opacity-100">
              test
            </span>
          </div>
          <div className="flex justify-end w-3/5 h-64 pl-4 border-2 border-red-400 group">
            <div className="relative w-full overflow-hidden">
              <img
                src="/images/img-3.jpg"
                alt=""
                className="object-cover object-left-top w-full h-full transition-all duration-500 group-hover:brightness-75"
              />
              <p className="absolute text-2xl font-semibold tracking-widest uppercase top-4 left-4">
                Casual
              </p>
              <span className="absolute bottom-0 w-full h-20 transition-all duration-500 ease-in-out translate-y-20 opacity-0 bg-gray-900/70 group-hover:translate-y-0 group-hover:opacity-100">
                test
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full mt-4 border-2 border-green-500">
          <div className="flex justify-end w-3/5 h-64 pr-4 border-2 border-red-400 group">
            <div className="relative w-full overflow-hidden">
              <img
                src="/images/img-4.jpg"
                alt=""
                className="object-cover object-left-top w-full h-full transition-all duration-500 group-hover:brightness-75"
              />
              <p className="absolute text-2xl font-semibold tracking-widest uppercase top-4 right-4">
                Formal
              </p>
              <span className="absolute bottom-0 w-full h-20 transition-all duration-500 ease-in-out translate-y-20 opacity-0 bg-gray-900/70 group-hover:translate-y-0 group-hover:opacity-100">
                test
              </span>
            </div>
          </div>
          <div className="relative w-2/5 h-64 overflow-hidden border-2 border-red-400 group">
            <img
              src="/images/img-2.jpg  "
              alt=""
              className="object-cover object-left-top w-full h-full transition-all duration-500 group-hover:brightness-75"
            />
            <p className="absolute text-2xl font-semibold tracking-widest uppercase top-4 right-4">
              Gym
            </p>
            <span className="absolute bottom-0 w-full h-20 transition-all duration-500 ease-in-out translate-y-20 opacity-0 bg-gray-900/70 group-hover:translate-y-0 group-hover:opacity-100">
              test
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
