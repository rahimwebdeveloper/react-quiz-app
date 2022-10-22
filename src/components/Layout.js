import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import "./style/layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="main">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
