import React from "react";
import logo from "/logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Image of todo list" />
      <h1>Add Your List Here ✌️</h1>
    </header>
  );
}
