const initialsState = {
  dataProducts: [],
  isloading: false,
  error: null,
  cartItem: [],
  isDarkMode: false,
};

export const productsReducer = (state = initialsState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_START":
      return { ...state, loading: true, error: null };
    case "FETCH_PRODUCTS_SUCCESS":
      return { ...state, loading: false, dataProducts: action.payload };
    case "FETCH_PRODUCTS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "REDUCE_QUANTITY":
      return {
        ...state,
        dataProducts: state.dataProducts.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity - action.payload.amount }
            : product
        ),
      };
    case "ADD_TO_CART":
      const existingItem = state.cartItem.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cartItem: state.cartItem.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload],
      };
    case "REMOVE_ITEM_CART":
      return {
        ...state,
        cartItem: state.cartItem.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "DARK_MODE":
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};
