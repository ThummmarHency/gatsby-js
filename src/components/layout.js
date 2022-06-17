import React from "react";
import Navbar from "./Navbar";
import "../style/global.css";

const Layout = ({ children }) => {
  console.log("children", children);
  return (
    <>
      <div className="layout">
        <Navbar />
        <div className="content">{children}</div>
        <footer className="footer">
          <p>Copyrights 2022</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
