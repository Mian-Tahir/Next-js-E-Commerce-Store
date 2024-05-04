
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@/utils/axios'; 
import { toast } from "react-toastify";

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/products');
      if (response.status === 200) {
        toast.success("Products fetched successfully!");
        return response.data;
      } else {
        toast.error("Failed to fetch products!");
        return rejectWithValue("Failed to fetch products");
      }
    } catch (error) {
      toast.error("An error occurred while fetching products!");
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProduct = createAsyncThunk(
  'products/fetchProduct',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/products/${productId}`);
      if (response.status === 200) {
        toast.success("Product fetched successfully!");
        return response.data;
      } else {
        toast.error("Failed to fetch product!");
        return rejectWithValue("Failed to fetch product");
      }
    } catch (error) {
      toast.error("An error occurred while fetching the product!");
      return rejectWithValue(error.message);
    }
  }
);


