import React from "react";
import "./contact.css";
import eatlocals from "../../images/eatlocals.jpg";
import Image from "react-bootstrap/Image";

const contact = () => (
  <div className="contact">
    <div id={"contact"}></div>
    <p className="pageTitle">Contact</p>
    <Image src={eatlocals} fluid />
  </div>
);

export default contact;