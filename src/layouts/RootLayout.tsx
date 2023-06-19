import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/demo";
const RootLayout = () => {
  useEffect(() => {
    addEventListener("scroll", () => {
      console.log(window.scrollX, window.scrollY, window.location.pathname);
      if (window.scrollY) {
        sessionStorage.setItem(window.location.pathname, window.scrollY);
      }
    });
  });
  return (
    <div className="root-layout" style={{ position: "relative" }}>
      <header style={{ position: "sticky", top: 0 }}>
        <ResponsiveAppBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default RootLayout;
