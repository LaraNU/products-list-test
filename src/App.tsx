import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ProductsPage from "./pages/ProductsPage";
import FullProductCard from "./pages/FullProductPage";
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
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
