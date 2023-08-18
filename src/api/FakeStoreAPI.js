import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

let primaryURL = `https://fakestoreapi.com/`;
// const fallbackURL = `https://dummyjson.com`;
// let primaryURL = null;

(async () => {
  const response = await fetch(`${primaryURL}`);
  response.ok?
    (primaryURL = `https://fakestoreapi.com`)
    : (primaryURL = `https://dummyjson.com`);
})();

export const fakeStoreAPI = createApi({
  reducerPath: 'fakeStoreAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${primaryURL}`,
    useBase: async () => {
      try {
        const response = await fetch(`${primaryURL}`);
        return response.ok;
      } catch (error) {
        return false;
      }
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
    }),
    getCategoryProducts: builder.query({
      query: (catagory) => `products/category/${catagory}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoryProductsQuery } =
  fakeStoreAPI;
