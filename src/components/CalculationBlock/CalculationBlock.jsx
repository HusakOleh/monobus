import React from "react";
import './CalculationBlock.scss';

export const CalculationBlock = ({
    icon,
    title,
    content,
    width,
    route
  }) => {

  let dispatchDays = '';

  if (route) {
    const dis = route.stations.find(el => el.hasOwnProperty("dispatchDays"));

    dis
      ? dis.dispatchDays.forEach(el => dispatchDays += `${el},`)
      : dispatchDays = "";

    dispatchDays = dispatchDays.split(",")
    dispatchDays.pop()
    dispatchDays = dispatchDays.join(",");
  }


  return (
    <div
      className="calculation-block"
      style={{width: `${width}`}}
    >
      <img
        className="calculation-block__img"
        src={`./assets/images/icons/${icon}.svg`}
        alt={icon}
      />

      <div className="calculation-block__content">
        <h4 className="calculation-block__title">
          {title}
        </h4>
        <p className="calculation-block__p">
          {dispatchDays || content}
        </p>
      </div>

    </div>
  );
}
