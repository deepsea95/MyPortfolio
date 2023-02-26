/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useTranslation } from "react-i18next";

const Project = ({ imageUrl, productText, projectLink }) => {
  return (
    <div className="product" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="productInfo">
        <a href={projectLink}>
          <p className="productText">{productText}</p>
        </a>
      </div>
    </div>
  );
};

function HoverCards() {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column">
      <h1 className="about-title">{t("projects")}</h1>
      <div id="products">
        <Project
          imageUrl="https://via.placeholder.com/150"
          productText="Pokedex"
          projectLink=""
        />

        <Project
          imageUrl="https://via.placeholder.com/150"
          productText="Search Movies"
          projectLink=""
        />

        <Project
          imageUrl="https://via.placeholder.com/150"
          productText="Color Grading"
          projectLink="https://color-grading-app.netlify.app/"
        />

        <Project
          imageUrl="https://via.placeholder.com/150"
          productText="Coming soon !"
          projectLink=""
        />
      </div>
    </div>
  );
}

export default HoverCards;
