import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    title: 'Хранилище продуктов',
    count: 0,
    product: null,
    products: [],
    totalProducts: 0,
}


export const getAllProducts = createAsyncThunk('productsSlice/getAllProducts',
  async ({ sortBy, limit, skip }) => {
    let { data } = await axios.get(`https://dummyjson.com/products`, {
      params: {sortBy,limit,skip,order: 'desc',},
    });
    return data; 
  }
);


export const searchProducts = createAsyncThunk('productsSlice/searchProducts',
  async (search) => {
    let { data } = await axios.get(`https://dummyjson.com/products/search?q=${search}`);
    return data.products;
  }
);


export const getProduct = createAsyncThunk('productsSlice/getProduct',
  async (id) => {
    let res = await fetch('https://dummyjson.com/products/' + id);
    let data = await res.json();
    return data;
  }
);

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload.products;  
      state.totalProducts = action.payload.total; 
    });

 
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });


    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productsSlice.reducer;