import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import OnlineUsers from "../components/OnlineUsers";

function MainLayout() {
  return (
    <>
      <NavBar />
      <div className="h-full flex">
        <main className="w-96">
          <Outlet />
        </main>
        <OnlineUsers  />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
