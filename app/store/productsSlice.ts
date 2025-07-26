import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/app/types/product";
import { products } from "@/app/data/products";

const initialState: Product[] = products;

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
