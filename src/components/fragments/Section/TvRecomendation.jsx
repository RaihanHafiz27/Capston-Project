import { useEffect, useState } from "react";
import { CardProducts } from "../Card/CardProducts";

export const TvRecomendation = () => {
  const [dataTv, setDataTv] = useState([]);
  useEffect(() => {
    const fetchdData = async () => {
      try {
        const res = await fetch(
          "https://fakestoreapi.in/api/products/category?type=tv&limit=8"
        );
        const data = await res.json();
        console.log(data);
        setDataTv(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdData();
  }, []);
  return <CardProducts data={dataTv} title={"Best on Television"} />;
};
