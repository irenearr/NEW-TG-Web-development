import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import About from "./components/about/about";
import Herobanner from "./components/herobanner/herobanner";
import Assortment from "./components/assortment/assortment";
import Whatis from "./components/whatis/whatis";
import Blog from "./components/blog/blog";
import Tutorials from "./components/tutorials/tutorials";
import Materials from "./components/materials/materials";
import Contact from "./components/contact/contact";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Herobanner />
    <Assortment />
    <About />
    <Whatis />
    <Materials />
    <Tutorials />
    <Blog />
    <Contact />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
