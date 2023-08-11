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
<<<<<<< HEAD
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
=======
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
    path: "/book",
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
>>>>>>> ccb3a15c205fc2fce5e9d727b41bb5cec63cc1d2
  },
]);

export default router;
