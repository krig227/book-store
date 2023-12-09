export const addToCart = (book) => {
  return {
    type: "ADD_TO_CART",
    payload: book,
  };
};

export const removeFromCart = (bookId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: bookId,
  };
};

export const increaseCartItem = (book) => {
  return {
    type: "INCREASE_CART_ITEM",
    payload: book,
  };
};

export const decreaseCartItem = (book) => {
  return {
    type: "DECREASE_CART_ITEM",
    payload: book,
  };
};

export const showMiniCart = () => {
  return {
    type: "SHOW_MINI_CART",
  };
};

export const hideMiniCart = () => {
  return {
    type: "HIDE_MINI_CART",
  };
};

export const setBookType = (bookId, bookType) => {
  return {
    type: "SET_BOOK_TYPE",
    payload: { bookId, bookType },
  };
};
