import React from "react";
import Navbar from "./Navbar";
import '../styles/global.css'

export default function Layouts({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>copyright @ 2023</footer>
    </div>
  );
}
