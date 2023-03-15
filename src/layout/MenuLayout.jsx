import React from "react";
import { Outlet } from "react-router-dom";
import { NavigationBar } from "../components/NavigationBar";

export const MenuLayout = () => {
  return (
    <main className="h-screen pb-24">
      <Outlet />
      <NavigationBar />
    </main>
  );
};
