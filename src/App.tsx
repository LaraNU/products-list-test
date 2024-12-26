import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
