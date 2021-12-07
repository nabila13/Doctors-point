import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../../image/b1.png";
import img2 from "../../image/b2.png";
import img3 from "../../image/b3.png";
const Banner = () => {
    return (
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;