import React from "react";
import "./tutorials.css";
import drama from "../../images/drama.jpg";
import Image from "react-bootstrap/Image";

const tutorials = () => (
  <div className="tutorials">
    <div id={"tutorials"}></div>
    <p className="pageTitle">Tutorials</p>
    <Image src={drama} fluid />
  </div>
);

export default tutorials;
