import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { Provider, useSelector } from "react-redux";
import store from "./store";

// Custom hook untuk mengatur kelas dark mode
const DarkModeHandler = () => {
  const isDarkMode = useSelector((state) => state.dataProducts.isDarkMode);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return null;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <DarkModeHandler />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
