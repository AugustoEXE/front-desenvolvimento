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
import { ProtectedRoute } from "./components/global/AuthProvider";
const router = createBrowserRouter([

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element:
      <>
        <ProtectedRoute />
        <Home />
      </>,
  },
  {
    path: "/user",
    element:
      <>
        <ProtectedRoute />
        <Dashboard />
      </>
  },
  {
    path: "/cad-book",
    element:
      <>
        <ProtectedRoute />
        <CadBook />
      </>
  },
  {
    path: "/cad-user",
    element:
      <>
        <ProtectedRoute />
        <CadUser />
      </>

  },
  {
    path: "/book/:id",
    element:
      <>
        <ProtectedRoute />
        <Book />
      </>

  },
  {
    path: "/cad-author",
    element:
      <>
        <ProtectedRoute />
        <CadAuthor />
      </>

  },
  {
    path: "/cad-genre",
    element:
      <>
        <ProtectedRoute />
        <CadGenre />
      </>

  },
  {
    path: "/cad-publish-company",
    element:
      <>
        <ProtectedRoute />
        <CadPublish />
      </>
  },

]);

export default router;
