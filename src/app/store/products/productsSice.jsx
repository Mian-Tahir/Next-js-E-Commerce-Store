// productSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts, fetchProduct } from './productsThunk';

const initialState = {
  products: [],
  product: null,
  status: 'idle',
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handling the fetching of all products
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null; 
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch products';
      })
      // Handling fetching a single product
      .addCase(fetchProduct.pending, (state) => {
        state.status = 'loading';
        state.error = null; 
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch product'; 
      });
  },
});

export default productSlice.reducer;
