import React from "react";
import "./about.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import pirates from "../../images/pirates.jpg";

const about = () => (
  <div className="about">
    <div id={"about"}></div>
    <p className="pageTitle">About me</p>
    <div className="aboutContent">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sed
        similique quibusdam commodi hic aperiam non? Laudantium sapiente odio
        eligendi perferendis, esse magni quaerat. Ipsam voluptas eos rem
        molestiae suscipit.{" "}
      </p>
      <Image className="imageRound" src={pirates} roundedCircle fluid />
    </div>
  </div>
);

export default about;
