import React from "react";
import './CardRoute.scss';
import classNames from "classnames";


const weeksDay = ["Нд.", "Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб."];

export const CardRoute = ({
  date,
  route,
  final=false,
  setIsBooked,
  firstItem,
  secondItem,
  setSelectRt,
  price
}) => {

  const firstStationIndex = route.stations.findIndex(st => st.cityInfo.city === firstItem);
  const lastStationIndex = route.stations.findIndex(st => st.cityInfo.city === secondItem);

  const transfer = route.stations.slice(firstStationIndex + 1, lastStationIndex).find(st => st.transfer);

  const dayToStringStart = `${weeksDay[date.day()]} ${date.date()}.${date.month() + 1} `;

  const firstStationHour = +(route.stations[firstStationIndex].departure).split(':')[0];
  const lastStationHour = +(route.stations[lastStationIndex].arrival).split(':')[0];

  const plusDate = date.add(1, 'day');

  const dayToStringEnd = firstStationHour <= lastStationHour
    ? `${weeksDay[date.day()]} ${date.date()}.${date.month() + 1} `
    : `${weeksDay[plusDate.day()]} ${plusDate.date()}.${plusDate.month() + 1} `;

  return (
    <div className="card-route">
      {/*{route.routeID}*/}

      <div className="card-route__item card-route__details">
        <div className="card-route__item card-route__details-city">
          <div className="card-route__item card-route__details-city-time">
            {dayToStringStart}
            <span> {route.stations[firstStationIndex].departure}</span>
          </div>

          <div className="card-route__item card-route__details-city-place">
            <span>
              {`${route.stations[firstStationIndex].cityInfo.city} `}
            </span>
              {route.stations[firstStationIndex].cityInfo.address}
          </div>
        </div>

          <div
            className={classNames("card-route__item card-route__details-transfer",
              {
                "card-route__details-transfer-hidden": !transfer
              })}
          >
            <span>Пересадка: {transfer && `${transfer.cityInfo.city}` || "немає"}</span>
          </div>

        <div className="card-route__item card-route__details-city">
          <div className="card-route__item card-route__details-city-time">
            {dayToStringEnd}
            <span> {route.stations[lastStationIndex].arrival}</span>
          </div>

          <div className="card-route__item card-route__details-city-place">
            <span>
              {`${route.stations[lastStationIndex].cityInfo.city} `}
            </span>
              {route.stations[lastStationIndex].cityInfo.address}
          </div>
        </div>

      </div>

      <div className="card-route__item card-route__price">
        <div className="card-route__item card-route__price-value">
          <div>Ціна:</div>
          <div className="card-route__item card-route__price-value-strong">
            {`${price} грн.`}
          </div>
        </div>


        {final || (
            <div
              className="button card-route__item card-route__price-book"
              onClick={() => {
                setIsBooked(true);
                setSelectRt(route.routeID);
              }}
            >
              Бронювати
            </div>
          )
        }

      </div>
    </div>
  );
};
