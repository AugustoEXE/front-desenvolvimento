import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./components/global/AuthProvider";
import { BookProvider } from "./components/global/BookProvider";
import router from "./router";
function App() {
  return (
    <AuthProvider>
      <BookProvider>
        <RouterProvider router={router} />
      </BookProvider>
    </AuthProvider>
  );
}

export default App;
