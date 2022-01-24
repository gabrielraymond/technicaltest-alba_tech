import React, { useEffect } from "react";
import "./Achivement.css";
import AOS from "aos";
import "aos/dist/aos.css";
import AchivementNumber from "../../components/AchivementNumber";
import achivementData from "../../Asset/data/achivementData";

const Achivement = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section id="achivement">
      <div className="container-md text-center">
        <h1>
          Our Progress Comes with a Collaboration Between <br /> Creativity,
          Ideas, and Technology
        </h1>
        <div className="row">
          {achivementData.map(d => {return(
            <AchivementNumber numb={d.numb} title={d.title} key={d.id} />
          )})}
          
          
        </div>
      </div>
    </section>
  );
};

export default Achivement;
