const initialsState = {
  dataProducts: [],
  isloading: false,
  error: null,
};

export const productsReducer = (state = initialsState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_START":
      return { ...state, loading: true, error: null };
    case "FETCH_PRODUCTS_SUCCESS":
      return { ...state, loading: false, dataProducts: action.payload };
    case "FETCH_PRODUCTS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
