import { useContext, useEffect } from "react";
import Carousel from "../components/fragments/Carousel/Carousel";
import { useSelector, useDispatch } from "react-redux";
import { CardProducts } from "../components/fragments/Card/CardProducts";
import { Recomendation } from "../components/fragments/Section/Promotion";
import { CardCategory } from "../components/fragments/Card/CardCategory";
import { TableTopUp } from "../components/fragments/TableTopUp";
import { CardProducts2 } from "../components/fragments/Card/CardProducts2";
import { fetchProducts } from "../store/actions/productsActions";

export const ProductsPage = () => {
  const dispatch = useDispatch();
  const { dataProducts } = useSelector((state) => state.dataProducts);

  // console.log(dataProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  // setModalIsOpen(true); // Munculkan modal ketika tombol Beli diklik
  // setShowBlur(true); // Tampilkan blur background

  // const { dataProducts, loading, error } = useSelector((state) => state);

  // console.log(dataProducts);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     dispatch({ type: "FETCH_PRODUCTS_START" }); // memulai loading
  //     try {
  //       const response = await fetch("https://fakestoreapi.com/products");
  //       const data = await response.json();
  //       dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: data });
  //     } catch (error) {}
  //   };
  //   fetchProducts();
  // }, [dispatch]);

  return (
    <section className="flex min-h-screen bg-gray-300 border-2 border-pink-600">
      <div className="flex flex-col items-center justify-center flex-1 border-2 border-black">
        <div className="w-3/5 pt-16 my-2 border-2 border-orange-500 2xl:pt-28 lg:my-4">
          <Carousel />
        </div>
        {/* test */}
        <div
          className="w-full h-auto p-2 bg-white md:mx-auto md:rounded-xl lg:w-11/12 2xl:w-3/5"
          style={{
            boxShadow: "1px 1px 4px rgba(0,0,0,0.2)",
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
        <div className="w-3/5 my-10 border-2 border-orange-500 lg:py-2">
          <div className="space-y-4">
            <hr className="w-full h-0.5 bg-gray-200 border-0 rounded dark:bg-gray-400"></hr>
            <Recomendation />
            <hr className="w-full h-0.5 bg-gray-200 border-0 rounded dark:bg-gray-400"></hr>
            <CardProducts2 data={dataProducts} title={"New Products"} />
          </div>
        </div>
        <div className="w-3/5 border-2 border-orange-500">Hello products</div>
      </div>
    </section>
  );
};
