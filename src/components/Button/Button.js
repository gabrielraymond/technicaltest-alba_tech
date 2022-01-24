import React from "react";
import './Button.css';

const Button = (props) => {
  return <button className="btn btn-yellow">{props.btnText}</button>;
};

export default Button;
