import React from "react";
import "./blog.css";
import img6 from "../../images/IMG_1906.JPG";

const blog = () => (
  <div className="blog">
    <div className="container">
    <div id={"blog"}></div>
    <p className="pageTitle">Blog</p>
    <img className="blogImage" src={img6} alt="blogImage" />
    <hr />
  </div></div>
);

export default blog;
