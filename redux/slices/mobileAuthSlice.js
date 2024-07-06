import { createSlice } from "@reduxjs/toolkit";
import { mobileAuthApi } from "../apis/mobileAuthApi";

const mobileAuthSlice = createSlice({
    name: "mobileAuthSlice",
    initialState: {},
    reducers: {
        handleLogin: (state, { payload }) => {
            state.user = payload
        }
    },
    extraReducers: builder => builder
        .addMatcher(mobileAuthApi.endpoints.customerLogin.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })
        .addMatcher(mobileAuthApi.endpoints.customerLogout.matchFulfilled, (state, { payload }) => {
            state.user = null
        })
})

export const { handleLogin } = mobileAuthSlice.actions
export default mobileAuthSlice.reducer
