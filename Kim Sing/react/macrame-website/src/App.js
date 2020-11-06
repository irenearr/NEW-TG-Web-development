import React from "react";
import "./App.css";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "./images/new-logo.jpg";

function App() {
  return (
    <div className="app">
      <div id={"home"}></div>
      <div className="menubar">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic" className="nav">
            <div className="menuTekst">Menu</div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#home">Home</Dropdown.Item>
            <Dropdown.Item href="#gallery">Gallery</Dropdown.Item>
            <Dropdown.Item href="#about">About me</Dropdown.Item>
            <Dropdown.Item href="#whatis">What is macram&#233;?</Dropdown.Item>
            <Dropdown.Item href="#materials">Materials & designs</Dropdown.Item>
            <Dropdown.Item href="#tutorials">Tutorials</Dropdown.Item>
            <Dropdown.Item href="#blog">Blog</Dropdown.Item>
            <Dropdown.Item href="#contact">Contact</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <p className="pageTitle">Plant Holders by Irene Arr</p>

        <img className="logo" src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default App;
