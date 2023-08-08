import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { fakeStoreAPI } from "../api/FakeStoreAPI";

const store = configureStore({
    reducer: {
        [fakeStoreAPI.reducerPath]: fakeStoreAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(fakeStoreAPI.middleware),
})

setupListeners(store.dispatch)
export default store;