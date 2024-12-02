import { useEffect, useState } from "react";
import { CardProducts } from "../Card/CardProducts";

export const Promotion = () => {
  const [dataRec, setDataRec] = useState([]);
  useEffect(() => {
    const fetchdData = async () => {
      try {
        const resposne = await fetch(
          "https://fakestoreapi.in/api/products?limit=12"
        );
        const data = await resposne.json();
        setDataRec(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdData();
  }, []);
  return (
    <CardProducts
      data={dataRec}
      title="Special Promotion"
      filterCondition={(item) => item.discount > 0}
    />
  );
};
