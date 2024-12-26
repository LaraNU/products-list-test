import "./App.css";
import { useEffect } from "react";
import { fakestoreApi } from "./redux/productsApiRedux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "./redux/store";
import { RootState } from "./redux/store";
import ProductsPage from "./pages/ProductsPage";
import FullProductCard from "./pages/FullProductPage";
import CreateProductPage from "./pages/CreateProductPage";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/products",
    element: (
      <Layout>
        <ProductsPage />
      </Layout>
    ),
  },
  {
    path: "/products/:productId",
    element: (
      <Layout>
        <FullProductCard />
      </Layout>
    ),
  },
  {
    path: "/create-product",
    element: (
      <Layout>
        <CreateProductPage />
      </Layout>
    ),
  },
]);

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const productsLoaded = useSelector((state: RootState) => state.products.length > 0);

  useEffect(() => {
    if (!productsLoaded) {
      dispatch(fakestoreApi.endpoints.getProducts.initiate());
    }
  }, [dispatch, productsLoaded]);

  return <RouterProvider router={router} />;
}

export default App;
