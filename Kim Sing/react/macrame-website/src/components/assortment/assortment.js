import "./assortment.css";
import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

const Assortment = () => (
  <div className="container">
    <div id={"gallery"}></div>
    <p className="pageTitle">Gallery</p>
    <Gallery photos={photos} direction={"column"} />
  </div>
);

export default Assortment;
