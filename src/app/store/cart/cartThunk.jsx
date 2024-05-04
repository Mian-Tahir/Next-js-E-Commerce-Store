import { createAsyncThunk } from "@reduxjs/toolkit";
import { addItem, removeItem } from "./cartSlice";

export const addCartItem = createAsyncThunk(
  "cart/addCartItem",
  async (item, { dispatch }) => {
    dispatch(addItem(item));
    console.log(item)
  }
);

export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async (id, { dispatch }) => {
    dispatch(removeItem(id));
    console.log(id)
  }
);
