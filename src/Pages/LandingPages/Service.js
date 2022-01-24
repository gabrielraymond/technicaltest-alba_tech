import React from "react";
import ServiceCard from "../../components/ServiceCard";
import "./Service.css";
import icons from "../../Asset/data/iconDataUrl";
import servicesData from "../../Asset/data/serviceData";

const Service = () => {
  return (
    <section id="services">
      <div className="container-md">
        <div className="title-section text-center" >
          <p>Complete Package</p>
          <h1>From product design to software continuous delivery</h1>
        </div>
        <div className="row">
          {servicesData.map((s) => {
            return (
              <ServiceCard
                img={s.imgUrl}
                linkTitle={s.title}
                link={s.link}
                desc={s.desc}
                key={s.id}
              ></ServiceCard>
            );
          })}
        </div>
        <div className="row mt-4">
          {icons.map((icon) => {
            return (
              <div className="t-icon col-lg-2 col-sm-3" key={icon.id}>
                <img src={`Asset/icon/${icon.imgUrl}`} alt={icon.imgUrl}/>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
