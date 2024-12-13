import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { AddCart } from "../components/fragments/Modals/AddCart";

export const DetailsProducts = () => {
  const products = useSelector((state) => state.dataProducts.dataProducts);
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const product = products.find((item) => item.id == id);

  const modalOpen = (product) => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsOpen(true);
      setSelectedProduct(product);
    } else {
      Navigate("/signin");
    }
  };

  const modalClose = () => {
    setIsOpen(!isOpen);
  };

  const getStars = (rating) => {
    const roundedRating = Math.round(rating);
    return "⭐".repeat(roundedRating);
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-xl font-bold text-red-500">Product not found</h1>
      </div>
    );
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-300 dark:bg-gray-900">
      <div
        className="w-4/5 max-h-[90vh] h-auto bg-white rounded-lg mt-24 flex flex-col md:flex-row overflow-hidden"
        style={{ boxShadow: "8px 8px 8px rgba(0,0,0,0.2)" }}
      >
        {/* Start Image  */}
        <div className="p-4 md:w-2/3">
          <div className="flex flex-col items-center h-full space-y-4">
            <div className="w-full overflow-hidden border rounded-lg h-80">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain w-full h-full transition-transform duration-300 ease-in-out hover:scale-150"
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
        {/* End Image  */}
        {/* Start Product Details */}
        <div className="flex flex-col justify-between p-6 overflow-auto md:w-1/3 font-Poppins">
          <div>
            <h2 className="text-xl font-bold text-gray-800 ">
              {product.title}
            </h2>
            <p className="my-2 text-gray-600">Category: {product.category}</p>
            <div className="flex my-2 ">
              <p>{getStars(product.rating.rate)}</p>
              <p className="text-gray-500">({product.rating.count})</p>
            </div>
            <p className="text-gray-700">Quantity : {product.quantity}</p>
            <p className="text-xl font-semibold text-teal-600">
              ${product.price}
            </p>
            <p className="text-sm text-gray-700">{product.description}</p>
          </div>
          <div className="mt-6">
            <button
              onClick={() => modalOpen(product)}
              className="w-full px-4 py-2 text-white transition rounded-lg bg-rose-600 hover:bg-rose-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
        {/* End Product Details */}
      </div>
      {isOpen && <AddCart product={selectedProduct} modalClose={modalClose} />}
    </section>
  );
};
