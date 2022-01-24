import React from "react";

const PortfolioCard = (props) => {
  return (
    <div className="col-lg-4">
      <div className="card">
        <img src={props.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <p>
            <span>{props.titleType}</span>
          </p>
          <h5 className="card-title">{props.titleName}</h5>
          <p className="card-text">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
