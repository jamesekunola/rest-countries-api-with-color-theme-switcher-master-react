import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = ({ isLightMode, toggleTheme }) => {
  return (
    <div>
      <Header isLightMode={isLightMode} toggleTheme={toggleTheme} />
      <Outlet />
    </div>
  );
};

export default Layout;
