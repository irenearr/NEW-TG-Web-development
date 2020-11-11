import React from "react";
import "./tutorials.css";
import drama from "../../images/drama.jpg";
import Image from "react-bootstrap/Image";

const tutorials = () => (
  <div className="tutorials">
    <div className="container">
    <div id={"tutorials"}></div>
    <p className="pageTitle">Tutorials</p>
    <Image className="tutorialsImage" src={drama} fluid />
    <hr />
  </div></div>
);

export default tutorials;
