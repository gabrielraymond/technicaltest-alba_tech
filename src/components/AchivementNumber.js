import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const AchivementNumber = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 1165 ? setIsVisible(true) : setIsVisible(false);
    }
  };

  return (
    <div className="col-sm-4">
      <h2>
        {isVisible ? <CountUp end={props.numb} duration={1} /> : 0}
        <span>+</span>
      </h2>
      <h3>{props.title}</h3>
    </div>
  );
};
export default AchivementNumber;
