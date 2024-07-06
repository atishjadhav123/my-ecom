import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        // baseUrl: `https://ecom-full-server-yi2r.onrender.com/api/user`
        baseUrl: `http://localhost:5000/api/user`
    }),
    tagTypes: ["user", "order"],
    endpoints: (builder) => {
        return {
            getUserOrders: builder.query({
                query: id => {
                    return {
                        url: `/order/${id}`,
                        method: "GET"
                    }
                },
                transformResponse: data => data.result,
                providesTags: ["user"]
            }),
            getUserOrderDetails: builder.query({
                query: id => {
                    return {
                        url: `/order-details/${id}`,
                        method: "GET"
                    }
                },
                providesTags: ["user"]
            }),
            userPlaceOrder: builder.mutation({
                query: orderData => {
                    return {
                        url: "/place-order",
                        method: "POST",
                        body: orderData
                    }
                },
                invalidatesTags: ["order"]
            }),
            userCancelOrder: builder.mutation({
                query: orderData => {
                    return {
                        url: `/order-cancel/${orderData._id}`,
                        method: "PUT",
                        body: orderData
                    }
                },
                invalidatesTags: ["order"]
            }),
            userUpdatePassword: builder.mutation({
                query: userData => {
                    return {
                        url: `/update-password`,
                        method: "PUT",
                        body: userData
                    }
                },
                invalidatesTags: ["order"]
            }),
        }
    }
})

export const {
    useGetUserOrdersQuery,
    useLazyGetUserOrdersQuery,
    useGetUserOrderDetailsQuery,
    useUserPlaceOrderMutation,
    useUserCancelOrderMutation,
    useUserUpdatePasswordMutation
} = userApi
