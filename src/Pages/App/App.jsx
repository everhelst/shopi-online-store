import { BrowserRouter, useRoutes } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import Home from "../Home";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/clothing", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/jewelery", element: <Home /> },
    { path: "/others", element: <Home /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-Orders", element: <MyOrders /> },
    { path: "/my-Orders/last", element: <MyOrder /> },
    { path: "/my-Orders/:id", element: <MyOrder /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
