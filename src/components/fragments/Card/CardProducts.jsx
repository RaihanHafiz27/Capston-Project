import { useRef } from "react";

export const CardProducts = (props) => {
  const { data, title } = props;

  const sliderRef = useRef(null);

  const handleSlideLeft = () =>
    sliderRef.current.scrollBy({ left: -1000, behavior: "smooth" });

  const handleScrollRight = () => {
    sliderRef.current.scrollBy({ left: 1000, behavior: "smooth" });
  };

  // const filteredData = filterCondition ? data.filter(filterCondition) : data;
  const filteredData = data.filter((item) => item.discount != null);

  return (
    <section className="relative w-full h-auto overflow-hidden border-2 border-black">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold uppercase lg:text-2xl font-Poppins text-amber-600">
          {title}
        </h1>
        <div className="space-x-2">
          <button
            onClick={handleSlideLeft}
            className="p-2 bg-gray-200 rounded-full shadow-lg "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={handleScrollRight}
            className="p-2 bg-gray-200 rounded-full shadow-lg "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <hr className="w-full h-0.5 bg-gray-200 border-0 rounded dark:bg-gray-400 my-2 "></hr>
      <ul
        ref={sliderRef}
        className="flex w-full gap-2 py-2 overflow-hidden overflow-x-auto lg:gap-4 scrollbar-none"
      >
        {filteredData.map((item) => (
          <li
            key={item.id}
            className="flex-grow-0 flex-shrink-0 max-w-[176px] max-h-[300px] p-2 bg-white relative border border-gray-200 rounded-lg transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2"
            style={{
              boxShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            <div className="flex flex-col items-center justify-center  h-[120px] ">
              <img src={item.image} alt="img" className="w-full h-full " />
            </div>
            <p className="text-sm font-medium line-clamp-2">{item.title}</p>
            <p className="my-2 text-xs text-gray-600">⭐⭐⭐⭐⭐</p>

            <div className="flex text-sm">
              <p className="font-thin text-gray-400">${item.price}</p>
              <span className="mx-2">|</span>{" "}
              <p className="font-semibold text-teal-600">
                ${(item.price * (1 - item.discount / 100)).toFixed(2)}
              </p>
            </div>
            <span className="absolute top-0 left-0 px-3 py-1 text-sm font-semibold rounded-tl-md rounded-br-md bg-amber-500 text-slate-200">
              -{item.discount}%
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

{
  /* <ul
ref={sliderRef}
className="relative flex py-2 space-x-2 overflow-x-auto 2xl:space-x-4 scrollbar-none whitespace-nowrap"
>
{filteredData.length > 0 ? (
  filteredData.map((item, id) => (
    <li
      key={id}
      className="relative max-w-[11rem] p-4 transition-all duration-300 bg-white border border-gray-200 rounded-lg w-44 shrink-0 font-Poppins hover:-translate-x-2 hover:-translate-y-2"
      style={{
        boxShadow: "1px 1px 4px rgba(0,0,0,0.2)",
      }}
    >
      <div className="flex flex-col items-center justify-center h-3/5">
        <img src={item.image} alt="img" className="w-4/5 h-full" />
      </div>
      <div>
        <p className="text-sm font-semibold tracking-wide">
          {item.title.substring(0, 30)}...
        </p>
        <p>⭐⭐⭐⭐⭐</p>
        {/* <p className="text-sm text-justify lowercase">
          {item.description.substring(0, 37)}...
        </p> */
}
//   <div className="flex text-sm">
//     <p className="font-thin text-gray-400">${item.price}</p>
//     <span className="mx-2">|</span>
//     <p className="font-semibold text-teal-600">
//       ${(item.price * (1 - item.discount / 100)).toFixed(2)}
//     </p>
//   </div>
// </div>
{
  /* <div className="flex items-center justify-around w-full mt-2 mb-4 ">
      <button className="w-2/5 py-1 text-sm border rounded-md border-amber-500">
        add cart
      </button>
      <button className="w-2/5 py-1 text-sm border rounded-md bg-amber-500 border-amber-500">
        buy now
      </button>
    </div> */
}
//       <div className="absolute top-0 left-0 px-3 py-1 rounded-md bg-amber-500 text-slate-200">
//         <span className="text-sm font-semibold">-{item.discount}%</span>
//       </div>
//     </li>
//   ))
// ) : (
//   <p>test</p>
// )}
// </ul> */}
