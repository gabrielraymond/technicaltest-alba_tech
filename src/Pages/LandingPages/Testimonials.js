import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import CarouselBrand from "../../components/CarouselBrand";
import TestimoniCard from "../../components/TestimoniCard";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials">
        <img className="bg gr3" src="Asset/Testimonials/Petik.png" alt="background"></img>
        <img className="bg gr4" src="Asset/Testimonials/Petik2.png" alt="background"></img>
        <img className="bg gr5" src="Asset/Testimonials/Group 25.png" alt="background"></img>
        <img className="bg gr6" src="Asset/Testimonials/Group 24.png" alt="background"></img>
      <div className="container">
        <div className="title-section text-center">
          <p>Testimonials</p>
          <h1>
            What clients love in working <br /> with Alba Tech
          </h1>
        </div>
        <div className="row">
          <div className="testimoni col-lg-5 col-sm-12  t1">
            <TestimoniCard
              title="Amazing people"
              comment={
                "They are people who are not only following the tasks, but can work as a team. Togehter."
              }
              imgUrl="Asset/portfolio/WebDev.jpg"
              clientName="Matthijs Piëst"
              status="COO at WieBetaaltWat"
            />
          </div>
          <div className="testimoni col-lg-4 col-sm-12 offset-lg-2 t2">
            <TestimoniCard
              title="Amazing people"
              comment={
                "They are people who are not only following the tasks, but can work as a team. Togehter."
              }
              imgUrl="Asset/portfolio/WebDev.jpg"
              clientName="Matthijs Piëst"
              status="COO at WieBetaaltWat"
            />
          </div>
          <div className="testimoni col-lg-4 col-sm-12 t2  position-1">
          <TestimoniCard
              title="Amazing people"
              comment={
                "They are people who are not only following the tasks, but can work as a team. Togehter."
              }
              imgUrl="Asset/portfolio/WebDev.jpg"
              clientName="Matthijs Piëst"
              status="COO at WieBetaaltWat"
            />
          </div>
          <div className="testimoni col-lg-5 col-sm-12 offset-lg-3 t1">
            <TestimoniCard
              title="Partnership approach"
              comment={
                "“We felt like we had a true partner throughout the process. They were clearly interested on our long-term success.”"
              }
              imgUrl="Asset/portfolio/WebDev.jpg"
              clientName="Matthijs Piëst"
              status="COO at WieBetaaltWat"
            />
          </div>
          <div className="testimoni col-lg-4 col-sm-12 t2 position-2">
          <TestimoniCard
              title="Amazing people"
              comment={
                "They are people who are not only following the tasks, but can work as a team. Togehter."
              }
              imgUrl="Asset/portfolio/WebDev.jpg"
              clientName="Matthijs Piëst"
              status="COO at WieBetaaltWat"
            />
          </div>
        </div>
        <CarouselBrand />

        <div className="consultation">
          <h3>Is software important for your business</h3>
          <h1>Build it with Alba Tech</h1>
          <Link to="/"><Button btnText="Consultation Now" /></Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
