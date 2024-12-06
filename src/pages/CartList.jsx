import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const dataPayment = [
  {
    id: 1,
    icon: "/images/payments/mastercard.png",
    title: "Mastercard",
  },
  {
    id: 2,
    icon: "/images/payments/visa.png",
    title: "Visa",
  },
  {
    id: 3,
    icon: "/images/payments/paypal.png",
    title: "Paypal",
  },
  {
    id: 4,
    icon: "/images/payments/discover.png",
    title: "Discover",
  },
];

export const CartPage = () => {
  const dataCart = useSelector((state) => state.dataProducts.cartItem);
  const dispatch = useDispatch();

  const TotalPrice = dataCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM_CART", payload: { id } });
  };

  return (
    <section className="flex h-screen bg-gray-300 border-2 border-pink-500 dark:bg-gray-900">
      <div className="flex items-center justify-center flex-1 mt-20 border-2 border-black">
        <div
          className="w-4/5 2xl:w-3/5  h-[80vh] 2xl:h-[70vh] p-8 flex bg-white rounded-lg"
          style={{ boxShadow: "4px 4px 6px  rgba(0,0,0,0.5)" }}
        >
          <div className="flex flex-col w-3/5 font-Poppins">
            <h2 className="text-xl font-semibold text-gray-700">
              Shopping cart
            </h2>
            <p className="text-sm text-gray-500">
              you have {dataCart.length} item{dataCart.length > 1 ? "s" : ""} in
              your cart
            </p>
            <hr className="h-0.5 bg-gray-400 my-4" />
            <ListItem dataCart={dataCart} handleRemoveItem={handleRemoveItem} />
          </div>
          <div className="flex justify-end w-2/5 ">
            <FormPayment
              dataPayment={dataPayment}
              TotalPrice={TotalPrice}
              dataCart={dataCart}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ListItem = (props) => {
  const { dataCart, handleRemoveItem } = props;
  return (
    <div className="flex-1 overflow-auto">
      {dataCart.length > 0 ? (
        <table className="w-full table-fixed">
          <tbody>
            {dataCart.map((item) => (
              <tr key={item.id}>
                <td colSpan="4" className="p-2">
                  <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-[4px_4px_6px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-10 h-10"
                      />
                      <p className="ml-2 text-sm">
                        {item.title.substring(0, 10)}...
                      </p>
                    </div>
                    <p className="text-sm text-teal-600">${item.price}</p>
                    <p className="text-sm">Qty : {item.quantity}</p>
                    <button onClick={() => handleRemoveItem(item.id)}>
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
  );
};

const FormPayment = (props) => {
  const { TotalPrice, dataCart } = props;
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [nameCard, setNameCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const dispatch = useDispatch();

  const dataCheckout = {
    total_price: TotalPrice,
    name_card: nameCard,
    card_number: cardNumber,
    exp_date: expDate,
    cvv: cvv,
    products: dataCart,
  };

  const saveToLocal = () => {
    localStorage.setItem("data_checkout", JSON.stringify(dataCheckout));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedPayment || !nameCard || !cardNumber || !expDate || !cvv) {
      alert("mohon isi data anda!!");
    } else {
      saveToLocal();
      dispatch({ type: "CHECKOUT", payload: dataCheckout.products });
      alert("terima kasih mohon ditunggu dalam 3 hari");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-11/12 h-full p-4 bg-gray-400 rounded-xl font-Poppins"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl text-slate-200">Cart Details</h2>
        <img src="/images/user.png" alt="" className="w-10 h-10" />
      </div>
      <div className="grid grid-cols-4 gap-2 my-2">
        {dataPayment.map((item) => (
          <label
            htmlFor={item.id}
            key={item.id}
            className={`flex flex-col items-center justify-center p-2 duration-300 rounded-md cursor-pointer  hover:bg-white group ${
              selectedPayment === item.id ? "bg-white" : "bg-white/40"
            }`}
          >
            <input
              type="radio"
              id={item.id}
              name="payment"
              value={item.id}
              checked={selectedPayment === item.id}
              className="hidden peer"
              onChange={() => setSelectedPayment(item.id)}
            />
            <img
              src={item.icon}
              alt={item.title}
              className="w-full h-auto duration-300 group-hover:scale-110"
            />
          </label>
        ))}
      </div>
      <div>
        <label htmlFor="nameCard" className="text-sm">
          Name on Card
        </label>
        <input
          id="nameCard"
          name="nameCard"
          type="text"
          placeholder="Name"
          onChange={(e) => setNameCard(e.target.value)}
          className="w-full py-2 pl-4 text-sm rounded-md bg-white/50"
        />
        <label htmlFor="cardNumber" className="text-sm">
          Card Number
        </label>
        <input
          id="cardNumber"
          name="cardNumber"
          type="text"
          placeholder="111 222 333 444"
          onChange={(e) => setCardNumber(e.target.value)}
          className="w-full px-4 py-2 text-sm rounded-md bg-white/50"
        />
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div>
            <label htmlFor="expDate" className="text-sm">
              Expiration Date
            </label>
            <input
              id="expDate"
              name="expDate"
              type="date"
              onChange={(e) => setExpDate(e.target.value)}
              className="w-full px-2 py-2 text-sm text-gray-400 rounded-md bg-white/50"
            />
          </div>
          <div>
            <label htmlFor="cvv" className="text-sm">
              CVV
            </label>
            <input
              id="cvv"
              name="cvv"
              type="text"
              placeholder="123"
              onChange={(e) => setCvv(e.target.value)}
              className="w-full py-2 pl-4 text-sm rounded-md bg-white/50"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 mt-2">
        <div className="flex justify-between text-sm">
          <p>Sub Total</p>
          <p>${TotalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>Shipping</p>
          <p>$2</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>Total</p>
          <p>${(TotalPrice + 2).toFixed(2)}</p>
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-2 bg-rose-600 text-slate-200"
        >
          Checkout
        </button>
      </div>
    </form>
  );
};
