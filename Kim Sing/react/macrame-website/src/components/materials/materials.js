import React from "react";
import "./materials.css";
import Carousel from "react-bootstrap/Carousel";
import imgmat1 from "./images/IMG_7905.jpeg";
import imgmat2 from "./images/IMG_7914.jpeg";
import imgmat4 from "./images/IMG_7911.jpeg";
import imgmat5 from "./images/IMG_7925.jpeg";
import imgmat6 from "./images/IMG_7928.jpeg";


const materials = () => (
  <div className="materials">
    <div className="container">
    <div id={"materials"}></div>
    <p className="pageTitle">Materials & designs</p>
    <Carousel className="my-5">
      <Carousel.Item>
        <img className="d-block w-6" src={imgmat1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="textShadow">An eye catcher</h3>
          <p className="textShadow">
            This model made with cotton rope and wooden beads will stand out in your interior
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item class="d-flex justify-content-center">
        <img className="d-block w-6" src={imgmat4} alt="Second slide" />
        <Carousel.Caption>
          <h3 className="textShadow">Hanging shelf</h3>
          <p className="textShadow">
            With a piece of natural wood I easily make a hanging shelf to display a plant, or anything you like!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-6" src={imgmat5} alt="Third slide" />
        <Carousel.Caption>
          <h3 className="textShadow">Thicker rope for a robust effect</h3>
          <p className="textShadow">
            Different materials but also rope sizes give a whole variety of looks!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-6" src={imgmat6} alt="Fourth slide" />
        <Carousel.Caption>
          <h3 className="textShadow">Makes life easier</h3>
          <p className="textShadow">
            Combine this hanging shelf with an Ecosphere to bring some green into your home without any effort
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-6" src={imgmat2} alt="Fifth slide" />
        <Carousel.Caption>
          <h3 className="textShadow">Every model is unique</h3>
          <p className="textShadow">
            I never make the same hanger twice, so every plant hanger is unique, also great as a gift!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <hr />
    </div>
  </div>
);

export default materials;
