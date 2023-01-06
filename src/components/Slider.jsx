import React from "react";
import image1 from "../images/Ecommerce checkout laptop-amico.png";
import image2 from "../images/Jewelry shop-amico.png";
import image3 from "../images/Niche service marketplace-amico.png";
import image4 from "../images/Thrift shop-rafiki.png";
import "./slider.css";

function Slider() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100 " alt="slider one" />
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block w-100" alt="slider two" />
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block w-100" alt="slider three" />
        </div>
        <div className="carousel-item">
          <img src={image4} className="d-block w-100" alt="slider four" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true">
          <i className="fa-solid fa-chevron-left"></i>
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
