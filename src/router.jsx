import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Book from "./pages/Book";
import CadBook from "./pages/CadBook";
import CadUser from "./pages/CadUser";
import CadGenre from "./pages/CadGenre";
import CadPublish from "./pages/CadPublish";
import CadAuthor from "./pages/CadAuthor";
import AdminHome from "./pages/AdminHome";
import GenreList from "./pages/lists/GenresList";
import AuthorList from "./pages/lists/AuthorList";
import PublisherList from "./pages/lists/PublisherList";
import BooksList from "./pages/lists/BooksList";
import UsersList from "./pages/lists/UsersList";

import { ProtectedRoute } from "./components/global/AuthProvider";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: (
      <>
        <ProtectedRoute />
        <Home />
      </>
    ),
  },
  {
    path: "/user",
    element: (
      <>
        <ProtectedRoute />
        <Dashboard />
      </>
    ),
  },
  {
    path: "/cad-book",
    element: (
      <>
        <ProtectedRoute />
        <CadBook />
      </>
    ),
  },
  {
    path: "/cad-user",
    element: (
      <>
        <ProtectedRoute />
        <CadUser />
      </>
    ),
  },
  {
    path: "/book/:id",
    element: (
      <>
        <ProtectedRoute />
        <Book />
      </>
    ),
  },
  {
    path: "/cad-author",
    element: (
      <>
        <ProtectedRoute />
        <CadAuthor />
      </>
    ),
  },
  {
    path: "/cad-genre",
    element: (
      <>
        <ProtectedRoute />
        <CadGenre />
      </>
    ),
  },
  {
    path: "/cad-publish-company",
    element: (
      <>
        <ProtectedRoute />
        <CadPublish />
      </>
    ),
  },
  {
    path: "/admin",
    element: (
      <>
        <ProtectedRoute />
        <AdminHome />
      </>
    ),
  },
  {
    path: "/list-genres",
    element: (
      <>
        <ProtectedRoute />
        <GenreList />
      </>
    ),
  },
  {
    path: "/list-authors",
    element: (
      <>
        <ProtectedRoute />
        <AuthorList />
      </>
    ),
  },
  {
    path: "/list-publishers",
    element: (
      <>
        <ProtectedRoute />
        <PublisherList />
      </>
    ),
  },
  {
    path: "/list-books",
    element: (
      <>
        <ProtectedRoute />
        <BooksList />
      </>
    ),
  },
  {
    path: "/list-users",
    element: (
      <>
        <ProtectedRoute />
        <UsersList />
      </>
    ),
  },
]);

export default router;
