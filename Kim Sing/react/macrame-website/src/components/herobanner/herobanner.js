import React from "react";
import "./herobanner.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../images/IMG_6466.jpeg";
import img2 from "../../images/IMG_6576.JPG";
import img3 from "../../images/IMG_6415.jpg";
import img4 from "../../images/IMG_6457.jpg";
import img5 from "../../images/IMG_6462.jpg";

const herobanner = () => (
  <div className="herobanner">
    <div className="container">
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-6" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="textShadow">Natural materials</h3>
          <p className="textShadow">
            Pure and simple, made with all natural jute rope
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item class="d-flex justify-content-center">
        <img className="d-block w-6" src={img2} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="textShadow">So many levels</h3>
          <p className="textShadow">
            Custom-made for one, two, three pots or anything you can imagine
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-6" src={img3} alt="Third slide" />

        <Carousel.Caption>
          <h3 className="textShadow">It's in the details</h3>
          <p className="textShadow">
            Handmade by own design with an eye for detail
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-6" src={img4} alt="Fourth slide" />
        <Carousel.Caption>
          <h3 className="textShadow">Designed to suit your needs</h3>
          <p className="textShadow">
            Anything is possible... almost. Just ask!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-6" src={img5} alt="Fifth slide" />
        <Carousel.Caption>
          <h3 className="textShadow">Made in Amsterdam</h3>
          <p className="textShadow">
            All plant hangers are handmade at my home in the centre of Amsterdam
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <hr />
    </div>
  </div>
);

export default herobanner;
