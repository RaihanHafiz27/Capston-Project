import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { ProductsPage } from "../pages/Products";
import { MainLayout } from "../components/layouts/Mainlayout";
import { LoginPage } from "../pages/Signin";
import { AuthLayout } from "../components/layouts/AuthLayout";
import { RegisterPage } from "../pages/Signup";
import { ProtectedRoute } from "./Protectedroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: (
          <ProtectedRoute>
            <ProductsPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
