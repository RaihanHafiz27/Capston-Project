// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// export const DetailsProducts = () => {
//   const details = useSelector((state) => state.dataProducts.dataProducts);
//   const { id } = useParams();

//   const data = details.find((item) => item.id == id);
//   console.log(data);
//   console.log(details);

//   return (
//     <section className="flex items-center justify-center min-h-screen bg-gray-300 border-2 border-pink-400">
//       <div className="flex w-4/5 border-2 border-black 2xl:w-3/5 lg:mt-24 2xl:mt-28">
//         <div className="flex items-center justify-between w-3/5 border-2 border-yellow-400">
//           <div className="w-2/6 space-y-2 border-2 border-pink-400">
//             <div className="bg-white border-2 border-pink-500">
//               <img src={data.image} alt="" className="w-1/2 h-auto mx-auto " />{" "}
//             </div>
//             <div className="bg-white border-2 border-pink-500">
//               <img src={data.image} alt="" className="w-1/2 h-auto mx-auto " />{" "}
//             </div>
//             <div className="bg-white border-2 border-pink-500">
//               <img src={data.image} alt="" className="w-1/2 h-auto mx-auto " />{" "}
//             </div>
//           </div>
//           <div className="w-3/5 h-full border-2 border-pink-500">
//             <img src={data.image} alt="" className="w-1/2 mx-auto" />
//           </div>
//         </div>
//         <div className="w-2/5 bg-white border-2 border-pink-500">test</div>
//       </div>
//     </section>
//   );
// };

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const DetailsProducts = () => {
  const products = useSelector((state) => state.dataProducts.dataProducts);
  const { id } = useParams();

  const product = products.find((item) => item.id == id);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-xl font-bold text-red-500">Product not found</h1>
      </div>
    );
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-300">
      <div
        className="w-4/5 max-h-[90vh] h-auto bg-white rounded-lg mt-24 flex flex-col md:flex-row overflow-hidden"
        style={{ boxShadow: "8px 8px 8px rgba(0,0,0,0.2)" }}
      >
        {/* Image Gallery */}
        <div className="p-4 md:w-2/3">
          <div className="flex flex-col items-center h-full space-y-4">
            <div className="w-full overflow-hidden border rounded-lg h-80">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex space-x-2">
              <div className="w-20 h-20 overflow-hidden border rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-20 h-20 overflow-hidden border rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-20 h-20 overflow-hidden border rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between p-6 overflow-auto md:w-1/3 font-Poppins">
          <div>
            <h2 className="mb-4 text-xl font-bold text-gray-800">
              {product.title}
            </h2>
            <p className="mb-2 text-gray-600">Category: {product.category}</p>
            <p className="mb-2 text-xl font-semibold text-teal-600">
              ${product.price}
            </p>
            <p className="text-sm text-gray-700">{product.description}</p>
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 text-white transition rounded-lg bg-rose-600 hover:bg-rose-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
