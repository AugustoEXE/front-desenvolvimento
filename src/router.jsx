import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/home";
import Book from "./pages/Book";
import CadBook from "./pages/CadBook";
import CadUser from "./pages/CadUser";
import CadGenre from "./pages/CadGenre";
import CadPublish from "./pages/CadPublish";
import CadAuthor from "./pages/CadAuthor";

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
    element: <Dashboard />,
  },
  {
    path: "/cad-book",
    element: <CadBook />,
  },
  {
    path: "/cad-user",
    element: <CadUser />,
  },
  {
    path: "/book",
    element: <Book />,
  },
  {
    path: "/cad-author",
    element: <CadAuthor />,
  },
  {
    path: "/cad-genre",
    element: <CadGenre />,
  },
  {
    path: "/cad-publish-company",
    element: <CadPublish />,
  },
]);

export default router;
