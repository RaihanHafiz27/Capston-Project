import { useContext, useEffect, useState } from "react";
import Carousel from "../components/fragments/Carousel/Carousel";
import { useSelector, useDispatch } from "react-redux";
import { CardProducts } from "../components/fragments/Card/CardProducts";
import { Recomendation } from "../components/fragments/Section/Promotion";
import { CardCategory } from "../components/fragments/Card/CardCategory";
import { TableTopUp } from "../components/fragments/TableTopUp";
import { CardProducts2 } from "../components/fragments/Card/CardProducts2";
import { fetchProducts } from "../store/actions/productsActions";
import { Footer } from "../components/fragments/Footer/Footer";
import { AddCart } from "../components/fragments/Modals/AddCart";
import { useNavigate } from "react-router-dom";

export const ProductsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dataProducts } = useSelector((state) => state.dataProducts);
  const [isOpen, setIsOpen] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null);

  // console.log(dataProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const modalOpen = (product) => {
    const token = localStorage.getItem("token");
    if (token) {
      setSelectProduct(product);
      setIsOpen(!isOpen);
    } else {
      navigate("/signin");
    }
  };

  const modalClose = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);
  console.log(selectProduct);

  return (
    <section className="flex min-h-screen border-2 border-pink-600 bg-slate-200">
      <div className="flex flex-col items-center justify-center flex-1 border-2 border-black">
        <div className="w-3/5 pt-16 my-2 border-2 border-orange-500 2xl:pt-28 lg:my-4">
          <Carousel />
        </div>
        {/* test */}
        <div
          className="w-full h-auto p-2 bg-white md:mx-auto md:rounded-xl lg:w-11/12 2xl:w-3/5"
          style={{
            boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          <div className="flex justify-around py-2 border-b border-gray-400 font-Roboto">
            <h2 className="text-sm font-semibold lg:text-xl">
              Preferred Category
            </h2>
            <h2 className="hidden text-sm font-semibold lg:block lg:text-xl">
              Top up
            </h2>
          </div>
          <div className="flex w-full">
            <div className="flex w-full lg:w-1/2">
              <CardCategory />
            </div>
            <TableTopUp /> {/* Mengirim prop handlePurchase */}
          </div>
        </div>
        {/* test */}
        <div className="w-3/5 my-10 border-2 border-orange-500 lg:p-2">
          <div className="space-y-4">
            <Recomendation />
            <hr className="w-full h-0.5 bg-gray-200 border-0 rounded dark:bg-gray-400"></hr>
            <CardProducts2
              data={dataProducts}
              title={"New Products"}
              openModal={modalOpen}
            />
          </div>
        </div>
        <Footer />
      </div>
      {isOpen && <AddCart product={selectProduct} modalClose={modalClose} />}
    </section>
  );
};
