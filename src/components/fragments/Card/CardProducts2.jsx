import { Link } from "react-router-dom";

export const CardProducts2 = (props) => {
  const { data, title, openModal } = props;

  const getStars = (rating) => {
    const roundedRating = Math.round(rating);
    return "⭐".repeat(roundedRating);
  };

  return (
    <section className="p-2 lg:p-0">
      <h1 className="mb-2 text-2xl font-semibold text-gray-700 dark:text-slate-200 font-Poppins">
        {title}
      </h1>
      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        {data.map((item, id) => (
          <li
            key={id}
            className={` relative flex flex-col max-w-xs p-2 transition-all duration-300 bg-white border border-gray-200 rounded-lg font-Poppins hover:-translate-x-2 hover:-translate-y-2 `}
            style={{
              boxShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            <Link
              to={item.quantity < 1 ? "#" : `/product-details/${item.id}`}
              className={`flex-1 ${
                item.quantity < 1 ? " grayscale opacity-70" : ""
              }`}
            >
              <div className="w-4/5 mx-auto h-28">
                <img src={item.image} alt="" className="w-full h-full" />
              </div>
              <p className="text-sm font-medium line-clamp-1">{item.title}</p>
              <div className="flex my-1 text-sm">
                <p className="">{getStars(item.rating.rate)}</p>
                <p className="text-gray-500">({item.rating.count})</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-teal-600">
                  $ {item.price}
                </p>
                <p className="text-sm ">Qty : {item.quantity}</p>
              </div>
            </Link>
            <div className="flex items-end justify-between flex-1 mt-2">
              <button
                disabled={item.quantity < 1}
                onClick={() => openModal(item)}
                className={`w-full py-2 text-sm rounded-md bg-rose-600 hover:bg-rose-700 text-slate-200 ${
                  item.quantity < 1 ? "cursor-not-allowed grayscale" : ""
                }`}
              >
                add cart
              </button>
            </div>
            {item.quantity < 1 && (
              <div className="absolute top-0 right-16">
                <img
                  src="/images/sold-out.png"
                  alt="sold"
                  className="w-16 h-16 "
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
