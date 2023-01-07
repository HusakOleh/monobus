import './TariffsContainer.scss';
import React from "react";

export const TariffsContainer = ({
   icon,
   title,
   prices,
   stations,
   from
 }) => {

  return (
    <div
      className="tariffs_container"
    >
      <img
        className="tariffs_container__img"
        src={`./assets/images/icons/${icon}.svg`}
        alt={icon}
      />

      <div className="tariffs_container__content">
        <h4 className="tariffs_container__title">
          {title}
        </h4>

        <ul className="tariffs_container__list">
          {stations.map((st, i) => (
            prices[st.cityInfo.city]
            &&
            <li
              className="tariffs_container__list-item"
              key={i}
            >
              {`${from} - ${st.cityInfo.city} ${prices[st.cityInfo.city]} грн`}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
