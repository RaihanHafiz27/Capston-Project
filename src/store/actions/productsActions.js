export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: "FETCH_PRODUCTS_START" });
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_PRODUCTS_FAILURE", payload: error.message }); // Error
  }
};
