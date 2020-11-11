import React from "react";
import "./whatis.css";
import savebees from "../../images/savebees.jpg";
import Image from "react-bootstrap/Image";

const whatis = () => (
  <div className="whatis">
    <div className="container">
    <div id={"whatis"}></div>
    <p className="pageTitle">What is macram&#233;</p>
    <Image src={savebees} fluid />
    <hr />
  </div></div>
);

export default whatis;
