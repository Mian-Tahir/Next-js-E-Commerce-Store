import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories, fetchCategoryDetails } from './categoriesThunk';

const initialState = {
  categories: [],
  categoryDetails: [],
  status: 'idle',
  error: null,
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handling fetching all categories
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
        state.error = null; // Clear previous errors on new request
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch categories';
      })
      // Handling fetching details for a specific category
      .addCase(fetchCategoryDetails.pending, (state) => {
        state.status = 'loading';
        state.error = null; 
      })
      .addCase(fetchCategoryDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categoryDetails = action.payload;
      })
      .addCase(fetchCategoryDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch category details';
      });
  },
});

export default categorySlice.reducer;
