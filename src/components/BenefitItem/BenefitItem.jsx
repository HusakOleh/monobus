import React from "react";
import './BenefitItem.scss'

export const BenefitItem = ({
  image,
  title,
  content
  }) => {
  return (
    <div className="benefits-item scale">

      <div className="benefits-item__img-container">
        <img
          className="benefits-item__img"
          src={`./assets/images/icons/benefit-${image}.svg`}
          alt={image}
        />
      </div>


      <h3 className="benefits-item__title">
        {title}
      </h3>

      <p className="benefits-item__content">
        {content}
      </p>
    </div>
  );
};
