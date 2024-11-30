import { Cart } from "../../elements/Cart/Cart";
import CartPlus from "../../elements/icons/CartPlus";

export const CardProducts2 = (props) => {
  const { data, title, openModal } = props;

  console.log(data);

  return (
    <section className="border-2 border-black ">
      <h1 className="mb-2 text-2xl font-semibold font-Poppins text-amber-600">
        {title}
      </h1>
      <ul className="grid grid-cols-5 gap-4">
        {data.map((item, id) => (
          <li
            key={id}
            className="p-4 transition-all duration-300 bg-white rounded-lg font-Poppins hover:-translate-x-2 hover:-translate-y-2"
            style={{
              boxShadow: "1px 1px 4px rgba(0,0,0,0.2)",
            }}
          >
            <div className="w-full h-32 ">
              <img src={item.image} alt="" className="w-full h-full" />
            </div>
            {/* <div className="flex flex-col items-center justify-center w-1/2 border border-black h-2/5">
              <img src={item.image} alt="img" className="w-full h-full" />
            </div> */}

            <div>
              <p className="text-sm font-semibold">
                {item.title.substring(0, 18)}...
              </p>
              <p className="text-sm lowercase">
                {item.description.substring(0, 47)}...
              </p>
              <div className="flex justify-between my-1 text-sm">
                <p className="text-sm ">Quantity : {item.quantity}</p>

                <p className="text-gray-600">
                  {item.rating.rate} | {item.rating.count} sold
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between ">
              <p className="font-semibold text-teal-600">$ {item.price}</p>
              <button
                onClick={() => openModal(item)}
                className="relative w-1/2 py-1 overflow-hidden text-sm transition-transform duration-500 border rounded-lg group border-amber-500"
              >
                <span className="absolute top-0 left-0 w-0 h-full transition-all duration-500 bg-amber-500 group-hover:w-full"></span>
                <span className="relative z-10 delay-150 group-hover:text-slate-200">
                  add cart
                </span>
              </button>
            </div>
            {/* gunakan untuk di details page */}
            {/* <button className="relative w-full py-2 overflow-hidden text-sm transition-transform duration-500 border rounded-lg group border-amber-500">
              <span className="absolute top-0 left-0 w-0 h-full transition-all duration-500 bg-amber-500 group-hover:w-full"></span>
              <span className="relative z-10 delay-150 group-hover:text-slate-200">
                add cart
              </span>
            </button> */}
          </li>
        ))}
      </ul>
    </section>
  );
};

{
  /* <span className="relative p-1 text-teal-800 border border-teal-800 rounded-full group hover:text-slate-200">
{/* <img
  src="/images/cart-plus.png"
  alt=""
  className="w-8 h-8 p-2"
/> */
}
{
  /* <span className="absolute top-0 left-0 w-full h-full bg-teal-800 rounded-full"></span>
<div className="relative z-10">
  <CartPlus color="currentColor" />
</div>
</span> */
}
