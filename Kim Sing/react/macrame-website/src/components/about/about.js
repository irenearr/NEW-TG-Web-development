import React from "react";
import "./about.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import pirates from "../../images/pirates.jpg";
import picture from "../../images/picture.jpg";

const about = () => (
  <div className="about">
    <div id={"about"}></div>
    <div className="container">
    <p className="pageTitle">About me</p>
    <div className="aboutContent">
    <Image className="imageRound2" src={picture} roundedCircle fluid />
      <p className="aboutParagraph">
        Hi there! My name is Irene and this is my website. Here I showcase one of my favorite hobbies: making macram&#233; plant holders. I named my brand "handmade by Irene Arr", because it's an alias I often use. It comes from a time long ago when parties were still allowed and my best friend and I dressed up as.. pirates! Arrrr. Nowadays I'm studying to be a web developer and this is actually the first complete website that I've built. So let me tell you a little bit about me. I am educated as a cell biologist, studying the human body, diseases, and how it all works, mainly on a really tiny scale: the microscopic level. As a cell biologist I worked many hours inside a labaratory or behind my desk reading and writing scientific studies. {" "}
      </p>
      <Image className="imageRound1" src={pirates} roundedCircle fluid />
      <p className="aboutParagraph">
        To relax from the tedious work I needed to break away from it all through festivals (as I mentioned before), but also handicrafts. Working with your hands is a great way to quiet your mind a little. I've done different things such as painting and sculpturing, but my most recent distraction is macram&#233;. It's so easy to learn and you can make beautiful things with it! Combined with my love for plants, I started to make macram&#233; plant holders right here at my home in Amsterdam. The result is what you see on this site, lots and lots of different designs and using all kinds of materials. I hope you'll enjoy browsing, feel free to contact me with any questions! Find my contact information at the bottom of the page. {" "}
      </p>
      </div>
      <hr />
    </div>
  </div>
);

export default about;
