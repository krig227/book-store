const initialState = {
  cartItems: [],
  showMiniCart: false,
  selectedBookTypes: {},
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const bookIdToAdd = action.payload.bookId || action.payload.book.bookId;

      const existingItem = state.cartItems.find((item) => {
        const itemBookId =
          item.book && item.book.bookId ? item.book.bookId : item.bookId;
        return itemBookId === bookIdToAdd;
      });

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) => {
            const itemBookId =
              item.book && item.book.bookId ? item.book.bookId : item.bookId;
            return itemBookId === bookIdToAdd
              ? { ...item, quantity: item.quantity + 1 }
              : item;
          }),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      const bookIdToRemove =
        action.payload.bookId || action.payload.book.bookId;
      console.log(bookIdToRemove);
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          const itemBookId =
            item.book && item.book.bookId ? item.book.bookId : item.bookId;
          return itemBookId !== bookIdToRemove;
        }),
      };

    case "INCREASE_CART_ITEM":
      const bookIdIncreasing =
        action.payload.bookId || action.payload.book.bookId;
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          const itemBookId =
            item.book && item.book.bookId ? item.book.bookId : item.bookId;
          return itemBookId === bookIdIncreasing
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
      };

    case "DECREASE_CART_ITEM":
      const bookIdDecreasing =
        action.payload.bookId || action.payload.book.bookId;
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) => {
            const itemBookId =
              item.book && item.book.bookId ? item.book.bookId : item.bookId;
            return itemBookId === bookIdDecreasing
              ? { ...item, quantity: item.quantity - 1 }
              : item;
          })
          .filter((item) => item.quantity > 0),
      };

    case "SHOW_MINI_CART":
      return { ...state, showMiniCart: true };

    case "HIDE_MINI_CART":
      return { ...state, showMiniCart: false };

    case "SET_BOOK_TYPE":
      return {
        ...state,
        selectedBookTypes: {
          ...state.selectedBookTypes,
          [action.payload.bookId]: action.payload.bookType,
        },
      };

    default:
      return state;
  }
};

export default cartReducer;
