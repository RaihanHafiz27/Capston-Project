import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, reduceQty } from "../../../store/actions/reduceQty";

export const AddCart = (props) => {
  const { modalClose, product } = props;
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state);
  const [quantity, setQuantity] = useState(0);

  const handleConfirm = () => {
    if (quantity > 0) {
      dispatch(reduceQty(product.id, quantity));
      dispatch(addToCart(product, quantity));
      modalClose();
    } else {
      alert("Quantity must be greater than 0");
    }
  };

  console.log(cartItem);

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative max-w-xs mx-auto">
          {/* Content Modal */}
          <div className="relative flex flex-col items-center justify-center px-10 py-4 transition-transform duration-500 ease-in-out delay-300 bg-white shadow-xl rounded-xl">
            <div className="w-full">
              <img
                src={product.image}
                alt=""
                className="w-full h-[30vh] object-contain"
              />
            </div>

            <p className="my-2 text-sm text-center text-gray-700 font-Poppins">
              {product.title}
            </p>
            <div className="flex items-center justify-center w-4/5 my-2 space-x-2">
              <button
                className="flex items-center justify-center w-10 h-10 font-bold text-white transition bg-gray-800 rounded-l hover:bg-gray-700 focus:ring-2 focus:ring-gray-500"
                onClick={() => setQuantity(quantity - 1)}
              >
                −
              </button>
              <p className="flex items-center justify-center w-16 h-10 font-medium text-gray-800 bg-white border border-gray-800">
                {quantity}
              </p>
              <button
                className="flex items-center justify-center w-10 h-10 font-bold text-white transition bg-gray-800 rounded-r hover:bg-gray-700 focus:ring-2 focus:ring-gray-500"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            {/* <div className="flex items-center justify-center w-4/5 my-2">
              <button
                className="w-1/3 border border-r-0 border-gray-800"
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </button>
              <p className="w-1/3 text-center border border-gray-800">
                {quantity}
              </p>
              <button
                className="w-1/3 border border-l-0 border-gray-800"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div> */}
            <button
              className="w-full py-2 bg-rose-600 hover:bg-rose-700 text-slate-200"
              onClick={() => handleConfirm()}
            >
              Confirm
            </button>
            {/* Close Modal */}
            <button
              onClick={() => modalClose()}
              className="absolute top-0 right-0 flex items-center justify-center px-6 py-1 bg-red-500 rounded-tr-lg rounded-bl-lg text-slate-200"
            >
              x
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
