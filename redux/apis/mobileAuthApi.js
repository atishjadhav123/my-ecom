

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const mobileAuthApi = createApi({
    reducerPath: "mobileAuthApi",
    baseQuery: fetchBaseQuery({
        // baseUrl: "https://ecom-full-server-yi2r.onrender.com/api/auth"
        baseUrl: "http://localhost:5000/api/auth"
    }),
    endpoints: (builder) => {
        return {
            customerLogin: builder.mutation({
                query: userData => {
                    return {
                        url: "/login-user",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => data.result
            }),
            customerRegister: builder.mutation({
                query: userData => {
                    return {
                        url: "/register-user",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            customerLogout: builder.mutation({
                query: userData => {
                    return {
                        url: "/logout-user",
                        method: "POST",
                        body: userData
                    }
                },
            }),

        }
    }
})

export const {
    useCustomerLoginMutation,
    useCustomerLogoutMutation,
    useCustomerRegisterMutation } = mobileAuthApi
