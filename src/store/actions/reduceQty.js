export const reduceQty = (id, amount) => ({
  type: "REDUCE_QUANTITY",
  payload: { id, amount },
});

export const addToCart = (product, quantity) => ({
  type: "ADD_TO_CART",
  payload: { ...product, quantity },
});
