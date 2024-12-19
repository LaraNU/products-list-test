import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ProductsPage from "./pages/ProductsPage";
import FullProductCard from "./components/FullProductCard";

const router = createBrowserRouter([
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/products/:productId",
    element: <FullProductCard />,
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
