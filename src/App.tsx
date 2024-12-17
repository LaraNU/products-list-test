import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ProductsPage from "./pages/ProductsPage";

const router = createBrowserRouter([
  {
    path: "/products",
    element: <ProductsPage />,
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
