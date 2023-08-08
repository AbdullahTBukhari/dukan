import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fakeStoreAPI = createApi({
    reducerPath: 'fakeStoreAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/'}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products',
        }),
        getCategoryProducts: builder.query({
            query: (catagory) => `products/category/${catagory}`,
        }),
    }),
})

export const { useGetProductsQuery, useGetCategoryProductsQuery } = fakeStoreAPI;