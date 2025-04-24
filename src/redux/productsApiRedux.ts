import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ProdactCardProps {
  id: number;
  title: string;
  price?: string;
  category?: string;
  description: string;
  image: string;
}

type ProdactsResponse = ProdactCardProps[];

export const fakestoreApi = createApi({
  reducerPath: "fakestoreApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products" }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProdactsResponse, void>({
      query: () => "",
    }),
    getProductById: builder.query({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = fakestoreApi;
