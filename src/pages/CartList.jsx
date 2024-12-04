import { useSelector } from "react-redux";

export const CartPage = () => {
  const dataCart = useSelector((state) => state.dataProducts.cartItem);
  console.log(dataCart.length);

  return (
    <section className="flex h-screen bg-gray-300 border-2 border-pink-500">
      <div className="flex items-center justify-center flex-1 mt-20 border-2 border-black">
        <div
          className="w-4/5  h-[80vh] p-8 flex bg-white rounded-lg"
          style={{ boxShadow: "4px 4px 6px  rgba(0,0,0,0.5)" }}
        >
          <div className="flex flex-col w-3/5 font-Poppins">
            <h2 className="text-xl font-semibold text-gray-700">
              Shopping cart
            </h2>
            <p className="text-sm text-gray-500">
              you have 3 items in your cart
            </p>
            <hr className="h-0.5 bg-gray-400 my-4" />
            <div className="flex-1 overflow-auto">
              {dataCart.length > 0 ? (
                <table className="w-full table-fixed">
                  <tbody>
                    {dataCart.map((item) => (
                      <tr key={item.id}>
                        <td colSpan="4" className="p-2">
                          <div
                            className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-md"
                            style={{ boxShadow: "4px 4px 6px rgba(0,0,0,0.3)" }}
                          >
                            <div className="flex items-center">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-10 h-10"
                              />
                              <p className="ml-2 text-sm">
                                {item.title.substring(0, 10)}
                              </p>
                            </div>
                            <p className="text-sm">{item.price}</p>
                            <p className="text-sm">{item.quantity}</p>
                            <button>
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
                                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="flex flex-col items-center justify-center h-full ">
                  <img src="/images/empty-cart.png" alt="" className="w-2/5" />
                  <p className="font-semibold text-gray-600">
                    Oooopppss Your Cart is empty
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-end w-2/5 ">
            <div className="w-11/12 h-full p-4 rounded-xl font-Poppins bg-rose-600">
              <div className="flex items-center justify-between">
                <h2 className="text-xl text-slate-200">Cart Details</h2>
                <img src="/images/user.png" alt="" className="w-12 h-12" />
              </div>
              <p>Cart type</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
