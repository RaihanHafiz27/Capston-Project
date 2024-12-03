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
          <div className="relative flex flex-col items-center justify-center p-10 transition-transform duration-500 ease-in-out delay-300 bg-white shadow-xl rounded-xl">
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
            <div className="flex items-center justify-center w-4/5 my-2">
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
            </div>
            <button
              className="w-full py-2 bg-amber-500"
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

// import { useState, useEffect } from "react";

// export const AddCart = (props) => {
//   const { modalClose, product } = props;
//   const [isVisible, setIsVisible] = useState(false);
//   const [qty, setQty] = useState(0);

//   useEffect(() => {
//     setTimeout(() => setIsVisible(true), 50); // Memulai animasi setelah modal dirender
//   }, []);

//   // const Add = () => {
//   //   qty + 1
//   // }

//   return (
//     <>
//       <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
//       <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
//         <div
//           className={`relative w-1/4 max-w-xs mx-auto transition-transform duration-500 ease-in-out ${
//             isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//           }`}
//         >
//           {/* Content Modal */}
//           <div className="relative flex flex-col items-center justify-center p-6 bg-white shadow-xl rounded-xl">
//             <img src={product.image} alt="" className="w-1/2 h-auto" />
//             <p>{product.title}</p>
//             <button
//               onClick={() => {
//                 setIsVisible(false); // Animasi keluar
//                 setTimeout(() => modalClose(), 500); // Tutup modal setelah animasi selesai
//               }}
//               className="absolute text-2xl text-white -right-2 -top-7"
//             >
//               x
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
