import { createBrowserRouter, redirect } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { ProductsPage } from "../pages/Products";
import { MainLayout } from "../components/layouts/Mainlayout";
import { LoginPage } from "../pages/Signin";
import { AuthLayout } from "../components/layouts/AuthLayout";
import { RegisterPage } from "../pages/Signup";
import { CartPage } from "../pages/CartList";
import { DetailsProducts } from "../pages/Details";
import { AboutPage } from "../pages/About";
import { ContactUsPage } from "../pages/Contact";
import { FAQAndHelp } from "../pages/FaqHelp";
import { ProfilePage } from "../pages/Profile";

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
        element: <CartPage />,
        loader: () => {
          if (!localStorage.getItem("token")) {
            return redirect("/signin");
          }
          return null;
        },
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
      {
        path: "/profile",
        element: <ProfilePage />,
        loader: () => {
          if (!localStorage.getItem("token")) {
            return redirect("/signin");
          }
          return null;
        },
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
        loader: () => {
          if (localStorage.getItem("token")) {
            return redirect("/");
          }
          return null;
        },
      },
      {
        path: "signup",
        element: <RegisterPage />,
        loader: () => {
          if (localStorage.getItem("token")) {
            return redirect("/");
          }
          return null;
        },
      },
    ],
  },
]);

export default router;
