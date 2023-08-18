import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./components/global/AuthProvider";
import { UpdateProvider } from "./components/global/UpdateProvider";
import router from "./router";
import { BookProvider } from "./components/global/BookProvider";
function App() {
  return (
    <AuthProvider>
      <BookProvider>
        <UpdateProvider>
          <RouterProvider router={router} />
        </UpdateProvider>
      </BookProvider>
    </AuthProvider>
  );
}

export default App;
