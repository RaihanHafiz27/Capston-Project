import { createBrowserRouter, useParams } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { ProductsPage } from "../pages/Products";
import { MainLayout } from "../components/layouts/Mainlayout";
import { LoginPage } from "../pages/Signin";
import { AuthLayout } from "../components/layouts/AuthLayout";
import { RegisterPage } from "../pages/Signup";
import { ProtectedRoute } from "./Protectedroute";
import { CartPage } from "../pages/CartList";
import { DetailsProducts } from "../pages/Details";
import { AboutPage } from "../pages/About";
import { ContactUsPage } from "../pages/Contact";
import { FAQAndHelp } from "../pages/FaqHelp";

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
        element: <ProductsPage />,
      },
      {
        path: `/product-details/:id`,
        element: <DetailsProducts />,
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "/faq-help",
        element: <FAQAndHelp />,
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
