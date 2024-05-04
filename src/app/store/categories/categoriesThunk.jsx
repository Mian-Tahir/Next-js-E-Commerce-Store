import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@/utils/axios'; 
import { toast } from "react-toastify";

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/products/categories');
      if (response.status === 200) {
        toast.success("Categories fetched successfully!");
        return response.data;
      } else {
        toast.error("Failed to fetch categories!");
        return rejectWithValue("Failed to fetch categories");
      }
    } catch (error) {
      toast.error("An error occurred while fetching categories!");
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCategoryDetails = createAsyncThunk(
  'categories/fetchCategoryDetails',
  async (name, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/products/category/${name}`);
      if (response.status === 200) {
        toast.success("Category details fetched successfully!");
        return response.data;
      } else {
        toast.error("Failed to fetch category details for " + name);
        return rejectWithValue("Failed to fetch category details for " + name);
      }
    } catch (error) {
      toast.error("An error occurred while fetching details for the category: " + name);
      return rejectWithValue(error.message);
    }
  }
);
