import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { fakeStoreAPI } from "../api/FakeStoreAPI";
import  cartReducer  from "./CartSlice"

const store = configureStore({
    reducer: {
        [fakeStoreAPI.reducerPath]: fakeStoreAPI.reducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(fakeStoreAPI.middleware),
})

setupListeners(store.dispatch)
export default store;