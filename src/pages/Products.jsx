import { useContext, useEffect, useState } from "react";
import Carousel from "../components/fragments/Carousel/Carousel";
import { useSelector, useDispatch } from "react-redux";
import { CardProducts } from "../components/fragments/Card/CardProducts";
import { Promotion } from "../components/fragments/Section/Promotion";
import { CardCategory } from "../components/fragments/Card/CardCategory";
import { TableTopUp } from "../components/fragments/TableTopUp";
import { CardProducts2 } from "../components/fragments/Card/CardProducts2";
import { fetchProducts } from "../store/actions/productsActions";
import { Footer } from "../components/fragments/Footer/Footer";
import { AddCart } from "../components/fragments/Modals/AddCart";
import { useNavigate } from "react-router-dom";
import { TvRecomendation } from "../components/fragments/Section/TvRecomendation";
import { Button } from "../components/elements/Button/Primary/Button";
import { Browse } from "../components/fragments/Card/Browse";
import { Successful } from "../components/fragments/Modals/Successful";

export const ProductsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dataProducts } = useSelector((state) => state.dataProducts);
  const isDarkMode = useSelector((state) => state.dataProducts.isDarkMode);
  const [isOpen, setIsOpen] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null);

  console.log(isDarkMode);

  useEffect(() => {
    const data = localStorage.getItem("reduxState");
    if (data) {
      const parseData = JSON.parse(data);
      dispatch({
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: parseData.dataProducts.dataProducts,
      });
    } else {
      dispatch(fetchProducts());
    }
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

  // console.log(isOpen);
  // console.log(selectProduct);

  return (
    <section
      className={`flex min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="flex flex-col items-center justify-center flex-1 ">
        <div className="w-full pt-12 my-2 lg:pt-20 lg:w-4/5 2xl:w-3/5 2xl:pt-28 lg:my-4">
          <Carousel />
        </div>
        {/* test */}
        <div
          className="w-full h-auto p-2 mt-4 bg-white border border-gray-200 md:mx-auto md:rounded-xl lg:w-4/5 2xl:w-3/5"
          style={{
            boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          <div className="flex justify-around py-2 border-b border-gray-400 font-Poppins">
            <h2 className="text-sm font-semibold lg:text-lg 2xl:text-xl">
              Preferred Category
            </h2>
            <h2 className="hidden text-sm font-semibold lg:block lg:text-lg 2xl:text-xl">
              Top up
            </h2>
          </div>
          <div className="flex w-full">
            <div className="flex w-full lg:w-1/2">
              <CardCategory />
            </div>
            <TableTopUp />
          </div>
        </div>
        {/* test */}
        <div className="w-full my-8 lg:w-4/5 2xl:w-3/5 2xl:p-2">
          {/* <Browse /> */}

          <div className="space-y-4">
            <Promotion />
            <TvRecomendation />
            <hr className="w-full h-0.5 bg-gray-200 border-0 rounded dark:bg-gray-400"></hr>
            <Highlight />
            <hr className="w-full h-0.5 bg-gray-200 border-0 rounded dark:bg-gray-400"></hr>
            <CardProducts2
              data={dataProducts}
              title={"New Products"}
              openModal={modalOpen}
            />
            <Browse />
          </div>
        </div>
        <Footer />
      </div>
      {isOpen && <AddCart product={selectProduct} modalClose={modalClose} />}
    </section>
  );
};

const Highlight = () => {
  return (
    <div className="w-full h-auto p-6 bg-gray-900 lg:p-2 lg:h-96">
      <div className="flex flex-col-reverse items-center justify-center w-full h-full p-2 lg:flex-row text-slate-200">
        <div className="w-11/12 h-full p-4 space-y-6 lg:w-1/2 font-Poppins">
          <p className="font-semibold text-rose-600">Categoris</p>
          <h2 className="text-2xl font-bold lg:text-5xl ">
            Enhance Your Music Experience
          </h2>
          <p className="text-base lg:text-lg">
            JBL headphones deliver superior sound quality, comfort, and style
            for your everyday music experience.
          </p>
          <button className="w-2/5 py-2 duration-300 hover:scale-105 bg-rose-600 hover:bg-rose-400">
            Buy Now!
          </button>
        </div>
        <div className="w-11/12 h-full lg:w-1/2">
          <img
            src="/images/headphone.png"
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
