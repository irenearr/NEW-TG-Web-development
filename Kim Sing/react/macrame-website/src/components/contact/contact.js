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
      <div className="contactFrame"><p className="pageTitleContact">Contact</p>
  <p className="contactText">
    <table className="contactList">
      <tr>
        <td></td>
        <td>Irene van Dijk</td>
      </tr>
      <tr>
        <td><AiFillHome className="icons"/></td>
        <td>Eerste Leeghwaterstraat 12</td>
      </tr>
      <tr>
        <td></td>
        <td>1018RC Amsterdam</td>
      </tr>
      <tr>
        <td><FaPhone className="icons"/></td>
        <td>+31 6 48703611</td>
      </tr>
      <tr>
        <td><MdEmail className="icons"/></td>
        <td><a href="mailto:irene.a.vandijk@gmail.com">irene.a.vandijk(at)gmail.com</a></td>
      </tr>
      <tr>
        <td><AiFillInstagram className="icons"/></td>
        <td><a href="https://www.instagram.com/irene.arr/">irene.arr</a></td>
      </tr>
    </table>
     </p></div>
     </div>
     </div>
  </div>
);

export default contact;