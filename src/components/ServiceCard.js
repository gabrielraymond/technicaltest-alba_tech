import React from "react";

const ServiceCard = (props) => {
  return (
    <div className="service col-lg-4">
      <div className="service-card">
        <div className="icon mb-3">
          <img
            src={props.img}
            alt={props.linkTitle}
          />
        </div>
        <a href={props.link}>
          {props.linkTitle} <span>&#10230;</span>
        </a>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
