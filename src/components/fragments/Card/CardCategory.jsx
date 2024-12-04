import { Link } from "react-router-dom";

const categorylist = {
  category: [
    {
      title: "Promo ",
      image: "/images/category/promo.png",
    },
    {
      title: "Fashion",
      image: "/images/category/t-shirt.png",
    },
    {
      title: "Shoes",
      image: "/images/category/shoes.png",
    },
    {
      title: "Send Gift",
      image: "/images/category/gift.png",
    },
    {
      title: "PlayStation",
      image: "/images/category/joystick.png",
    },
    {
      title: "Mall",
      image: "/images/category/online-shopping.png",
    },
    {
      title: "Tickets",
      image: "/images/category/train.png",
    },
    {
      title: "Furniture",
      image: "/images/category/sofa.png",
    },
  ],
};

export const CardCategory = () => {
  return (
    <div className="grid w-full grid-cols-4 gap-2">
      {categorylist.category.map((item, index) => (
        <Link
          key={index}
          className="flex flex-col items-center justify-center p-2"
        >
          <div className="p-2 transition-all duration-300 bg-gray-200 rounded-full hover:bg-gray-400 ">
            <img
              src={item.image}
              alt=""
              className="w-8 h-8 transition-all duration-300 scale-110 rounded-lg 2xl:w-12 2xl:h-12 hover:scale-125"
            />
          </div>
          <span className="text-xs 2xl:text-sm font-Poppins">{item.title}</span>
        </Link>
      ))}
    </div>
  );
};
