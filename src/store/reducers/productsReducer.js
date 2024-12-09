const initialsState = {
  dataProducts: [],
  isloading: false,
  error: null,
  cartItem: [],
  isDarkMode: false,
};

export const productsReducer = (state = initialsState, action) => {
  console.log("State before checkout:", state);
  switch (action.type) {
    case "FETCH_PRODUCTS_START":
      return { ...state, isloading: true, error: null };
    case "FETCH_PRODUCTS_SUCCESS":
      return { ...state, isloading: false, dataProducts: action.payload };
    case "FETCH_PRODUCTS_FAILURE":
      return { ...state, isloading: false, error: action.payload };
    case "CHECKOUT":
      return {
        ...state,
        dataProducts: state.dataProducts.map((product) => {
          const cartItem = action.payload.find(
            (item) => item.id === product.id
          );
          if (cartItem) {
            return {
              ...product,
              quantity: product.quantity - cartItem.quantity,
            };
          }
          return product;
        }),
        cartItem: [],
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
