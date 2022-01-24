import React from "react";
import "./Portfolio.css";
import PortfolioCard from "../../components/PortfolioCard";
import portfolioData from "../../Asset/data/portfolioData";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container-md">
        <div className="title-section text-center mb-4 ">
          <p>Portfolio</p>
          <h1>
            The software that we we build <br /> takes our clients to the next
            level
          </h1>
        </div>
        <div className="row mb-4">
          {portfolioData.map((d) => {
            return (
              <PortfolioCard
                imgUrl={d.imgUrl}
                titleType={d.titleType}
                titleName={d.titleName}
                desc={d.desc}
                key={d.id}
              />
            );
          })}
        </div>
        <div className="tex-center d-flex justify-content-center">
          <Link to="/">
            <Button btnText="Learn more" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
