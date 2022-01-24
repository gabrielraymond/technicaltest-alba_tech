import React from "react";

const TestimoniCard = (props) => {
  return (
    <div className="testimoni-card">
      <h2>{props.title}</h2>
      <h3>{props.comment}</h3>
      <div className="d-flex">
        <img src={props.imgUrl} alt="client" />
        <div>
          <h4>{props.clientName}</h4>
          <p>{props.status}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimoniCard;
