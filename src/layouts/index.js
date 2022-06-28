import React from "react";
import Navbar from "../components/Navbar";
import "../style/global.css";

export default ({ children, pageContext }) => {
  switch (pageContext.layout) {
    case "special":
      return (
        <>
          <div className="layout">
            <Navbar />
            <div className="side-content">{children}</div>
            <footer className="footer">
              <p>special layout</p>
            </footer>
          </div>
        </>
      );
    case "nolayout":
      return (
        <>
          <div className="layout">
            <div className="side-content">{children}</div>
          </div>
        </>
      );

    default:
      return (
        <div className="layout">
          <Navbar />
          <div className="content">{children}</div>
          <footer className="footer">
            <p>Copyrights 2022</p>
          </footer>
        </div>
      );
  }
};
