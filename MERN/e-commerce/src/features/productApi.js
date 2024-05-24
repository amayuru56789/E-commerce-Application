import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: (id) => "product",
        }),
    }),
});

export const { useGetAllProductQuery } = productApi;
