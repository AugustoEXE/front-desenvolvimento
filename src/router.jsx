import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/home";
import CadBook from "./pages/CadBook";
import CadUser from "./pages/CadUser";
import Book from "./pages/Book";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/user",
    element: <Dashboard />
  },
  {
    path: "/cad-book",
    element: <CadBook />
  },
  {
    path: "/cad-user",
    element: <CadUser />
  },
  {
    path: "/book",
    element: <Book />
  }
]);

export default router;
