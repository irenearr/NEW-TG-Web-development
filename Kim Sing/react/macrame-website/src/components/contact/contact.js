import React from "react";
import "./contact.css";
import { AiFillHome } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

const contact = () => (
  <div className="contact">
    <div className="container">
    <div id={"contact"} className="contactDiv">
    <p className="pageTitleContact">Contact</p>
  <p className="contactText">
     <ul className="contactList">
       <li>Irene van Dijk</li>
       <li><AiFillHome /> Eerste Leeghwaterstraat 12</li>
       <li>1018RC Amsterdam</li>
       <li><FaPhone />  +31 6 48703611</li>
<li><MdEmail /> <a href="mailto:irene.a.vandijk@gmail.com">irene.a.vandijk(at)gmail.com</a></li>
       <li><AiFillInstagram /> <a href="https://www.instagram.com/irene.arr/">irene.arr</a></li>
     </ul></p>
     </div>
     </div>
  </div>
);

export default contact;