import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/authReducer";
import cartReducer from "./Reducers/cartReducer";

const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});

export default store;
