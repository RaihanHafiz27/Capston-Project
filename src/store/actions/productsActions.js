export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: "FETCH_PRODUCTS_START" });
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();

    data = data.map((item) => ({
      ...item,
      quantity: 20,
    }));

    console.log(data);

    dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_PRODUCTS_FAILURE", payload: error.message }); // Error
  }
};
