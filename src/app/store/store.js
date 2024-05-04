import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productReducer from "./products/productsSice";
import categoryReducer from "./categories/categoriesSlice";
import cartReducer from "./cart/cartSlice";

const reducers = combineReducers({
  products: productReducer,
  categories: categoryReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
