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

  // console.log(isOpen);
  // console.log(selectProduct);

  return (
    <section className="flex min-h-screen border-2 border-pink-600 bg-slate-200">
      <div className="flex flex-col items-center justify-center flex-1 border-2 border-black">
        <div className="w-full pt-12 border-orange-500 my-2border-2 lg:pt-20 lg:w-4/5 2xl:w-3/5 2xl:pt-28 lg:my-4">
          <Carousel />
        </div>
        {/* test */}
        <div
          className="w-full h-auto p-2 bg-white border border-gray-200 md:mx-auto md:rounded-xl lg:w-4/5 2xl:w-3/5"
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
        <div className="w-full my-8 border-2 border-orange-500 lg:w-4/5 2xl:w-3/5 2xl:p-2">
          {/* <Browse /> */}

          <div className="space-y-4 ">
            <Promotion />
            {/* <TvRecomendation /> */}
            <hr className="w-full h-0.5 bg-gray-200 border-0 rounded dark:bg-gray-400"></hr>
            <div className="w-full h-auto p-6 bg-gray-900 border-2 border-pink-600 lg:p-0 lg:h-96">
              <div className="flex flex-col-reverse items-center justify-center w-full h-full p-2 border border-white lg:flex-row text-slate-200">
                <div className="w-11/12 h-full p-4 space-y-6 border border-blue-500 lg:w-1/2 font-Poppins">
                  <p className="font-semibold text-amber-500">Categoris</p>
                  <h2 className="text-2xl font-bold lg:text-5xl ">
                    Enhance Your Music Experience
                  </h2>
                  <p className="text-base lg:text-lg">
                    JBL headphones deliver superior sound quality, comfort, and
                    style for your everyday music experience.
                  </p>
                  <button className="w-2/5 py-2 bg-amber-500">Buy Now!</button>
                </div>
                <div className="w-11/12 h-full border border-yellow-400 lg:w-1/2">
                  <img
                    src="/images/headphone.png"
                    alt=""
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
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

{
  /* <div className="w-2/5 h-64 border-2 border-yellow-400">
                  <img
                    src="/images/img-1.jpg"
                    alt=""
                    className="object-cover object-right-top w-full h-full "
                  />
                </div>
                <div className="flex justify-end w-3/5 h-64 border-2 border-red-400">
                  <div className="w-full pl-4 border border-green-500">
                    <img
                      src="/images/img-4.jpg"
                      alt=""
                      className="object-cover object-left-top w-full h-full"
                    />
                  </div>
                </div>
                <div className="w-3/5 h-64 pr-4 border-2 border-red-400">
                  <img
                    src="/images/img-3.jpg"
                    alt=""
                    className="object-cover object-top w-full h-full "
                  />
                </div>
                <div className="w-2/5 h-64 border-2 border-red-400">
                  <img
                    src="/images/img-2.jpg"
                    alt=""
                    className="object-cover object-left-top w-full h-full "
                  />
                </div> */
}
