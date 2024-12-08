import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";

const router = createBrowserRouter([
  {
    path: "/products",
    element: <ProductsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
