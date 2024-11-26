import { Outlet } from "react-router-dom";
import { Navbar } from "../fragments/Navbar/Navbar";
export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
