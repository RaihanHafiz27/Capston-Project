import { useEffect, useState } from "react";
import Carousel from "../components/fragments/Carousel/Carousel";
import { useSelector, useDispatch } from "react-redux";
import { Promotion } from "../components/fragments/Section/Promotion";
import { TableTopUp } from "../components/fragments/TableTopUp";
import { CardProducts2 } from "../components/fragments/Card/CardProducts2";
import { fetchProducts } from "../store/actions/productsActions";
import { Footer } from "../components/fragments/Footer/Footer";
import { AddCart } from "../components/fragments/Modals/AddCart";
import { useNavigate } from "react-router-dom";
import { TvRecomendation } from "../components/fragments/Section/TvRecomendation";
import { Browse } from "../components/fragments/Card/Browse";
import { Highlight } from "../components/fragments/Section/Highlight";

export const ProductsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dataProducts } = useSelector((state) => state.dataProducts);
  const isDarkMode = useSelector((state) => state.dataProducts.isDarkMode);
  const [isOpen, setIsOpen] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null);

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

  return (
    <section
      className={`flex min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="flex flex-col items-center justify-center flex-1 ">
        <div className="w-full pt-12 my-2 lg:pt-20 lg:w-4/5 2xl:w-3/5 2xl:pt-28 lg:my-4">
          <Carousel />
        </div>
        <TableTopUp />
        <div className="w-full my-8 lg:w-4/5 2xl:w-3/5 2xl:p-2">
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
