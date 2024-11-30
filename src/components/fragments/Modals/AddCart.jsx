export const AddCart = (props) => {
  const { modalClose, product } = props;
  return (
    <>
      <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-1/4 max-w-xs mx-auto">
          {/* Content Modal */}
          <div className="relative flex flex-col items-center justify-center p-6 transition-transform duration-500 ease-in-out delay-300 bg-white shadow-xl rounded-xl">
            <img src={product.image} alt="" className="w-1/2" />
            <p>{product.title}</p>
            <button
              onClick={() => modalClose()}
              className="absolute text-2xl text-white -right-2 -top-7"
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
