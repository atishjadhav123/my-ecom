import { configureStore } from "@reduxjs/toolkit";
import { publicApi } from "./apis/mobilePublicApi";
import { userApi } from "./apis/mobileUserApi";
import mobileUserSlice from "./slices/mobileUserSlice";
import { mobileAuthApi } from "./apis/mobileAuthApi";
import mobileAuthSlice from "./slices/mobileAuthSlice";

export const API_URL = "https://ecom-full-server-redn.onrender.com/api"

const reduxStore = configureStore({
    reducer: {
        [publicApi.reducerPath]: publicApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [mobileAuthApi.reducerPath]: mobileAuthApi.reducer,
        user: mobileUserSlice,
        auth: mobileAuthSlice
    },
    middleware: def => [
        ...def(),
        publicApi.middleware,
        mobileAuthApi.middleware,
        userApi.middleware
    ]
})

export default reduxStore