import { createSlice } from "@reduxjs/toolkit";
import { fakestoreApi } from "./productsApiRedux";

interface Product {
  id: number;
  title: string;
  price?: string;
  category?: string;
  description: string;
  image: string;
  isLiked?: boolean;
}

let newId = 0;

const productsSlice = createSlice({
  name: "products",
  initialState: [] as Product[],
  reducers: {
    createProduct(state, action) {
      state.push({ ...action.payload, isLiked: false, id: ++newId });
    },
    deleteProduct(state, action) {
      return state.filter((p) => p.id !== action.payload);
    },
    likeProduct(state, action) {
      const product = state.find((p) => p.id === action.payload);
      if (product) {
        product.isLiked = !product.isLiked;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(fakestoreApi.endpoints.getProducts.matchFulfilled, (_, action) => {
        newId = action.payload.length;
        return action.payload.map((product: Product) => ({
          ...product,
          isLiked: false,
        }));
      })
      .addMatcher(
        fakestoreApi.endpoints.getProductById.matchFulfilled,
        (state, action) => {
          const product = action.payload;
          const existingProduct = state.find((p) => p.id === product.id);

          if (!existingProduct) {
            state.push({ ...product, isLiked: false });
          } else {
            Object.assign(existingProduct, product);
          }
        }
      );
  },
});

export const { likeProduct, deleteProduct, createProduct } = productsSlice.actions;
export default productsSlice.reducer;
