import React from "react";
import "./CarouselBrand.css";

const CarouselBrand = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <div className="d-flex justify-content-center">
            <img src="Asset/Brand/Astra Internasional.png" alt="..." />
            <img src="Asset/Brand/Jago.png" alt="..." />
            <img src="Asset/Brand/Pertamina.png" alt="..." />
            <img src="Asset/Brand/Union.png" alt="..." />
            <img src="Asset/Brand/Adidas.png" alt="..." />
          </div>
        </div>
        <div className="carousel-item " data-bs-interval="10000">
          <div className="d-flex justify-content-center">
            <img src="Asset/Brand/Adidas.png" alt="..." />
            <img src="Asset/Brand/Astra Internasional.png" alt="..." />
            <img src="Asset/Brand/Jago.png" alt="..." />
            <img src="Asset/Brand/Pertamina.png" alt="..." />
            <img src="Asset/Brand/Union.png" alt="..." />
          </div>
        </div>
        <div className="carousel-item " data-bs-interval="10000">
          <div className="d-flex justify-content-center">
            <img src="Asset/Brand/Adidas.png" alt="..." />
            <img src="Asset/Brand/Astra Internasional.png" alt="..." />
            <img src="Asset/Brand/Jago.png" alt="..." />
            <img src="Asset/Brand/Pertamina.png" alt="..." />
            <img src="Asset/Brand/Union.png" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselBrand;
