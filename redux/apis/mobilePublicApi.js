import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const publicApi = createApi({
    reducerPath: "publicApi",
    baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5000/api/public` }),
    tagTypes: ["public"],
    endpoints: (builder) => {
        return {
            getPublicProducts: builder.query({
                query: () => {
                    return {
                        url: "/products",
                        method: "GET"
                    }
                },
                transformResponse: data => data.result,
                providesTags: ["public"]
            }),
            getPublicProductDetails: builder.query({
                query: (id) => {
                    return {
                        url: `/product-details/${id}`,
                        method: "GET",
                    }
                },
                transformResponse: data => data.result,
                invalidatesTags: ["public"]
            }),

        }
    }
})

export const {
    useGetPublicProductDetailsQuery,
    useGetPublicProductsQuery,
    useLazyGetPublicProductsQuery
} = publicApi
