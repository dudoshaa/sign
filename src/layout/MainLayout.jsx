import React from "react";
import NavBar from "../components/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { OnlineUsers } from "../pages";

function MainLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      <NavBar />
      <main >
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
