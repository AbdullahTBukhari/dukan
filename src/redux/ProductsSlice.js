import { createSlice } from '@reduxjs/toolkit';
import { useGetProductsQuery } from '../api/FakeStoreAPI';
import ProductsData from '../components/ProductsData';

async function ProductAsInitialState () {
  const { data: initialState } = await useGetProductsQuery();
  return initialState;
};
const initialState = await ProductAsInitialState();

const ProductSlice = createSlice({
  name: `products`,
  initialState,
  reducers: {},
});

export default ProductSlice.reducer;
