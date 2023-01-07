import React, { useState } from "react";
import './Departure.scss'
import { DepartureListItem } from "../DepartureListItem/DepartureListItem";

export const Departure = ({route}) => {
  const stations = route.stations;
  const isReverse = false; //if we have reverse direction set isReverse === true

  const [show, setShow] = useState(true);

  const stationsList = stations.map((station, i) => (
    <DepartureListItem
      station={station}
      key={i}
    />
  ))


  return (
    <div className="departure">
      <img
        className="departure__img"
        src="./assets/images/icons/timetable-clock.svg"
        alt="clock"
      />
      <h4
        className="departure__title"
      >
        Час відправки з міста:
      </h4>

      <div
        className="departure__schedule departure__schedule--start-to-end"
      >
        <h3 className="departure__schedule-title">
          {`Відправлення з міста
          ${stations[0].cityInfo.city}`}
        </h3>
        <ul className="departure__list">
          {show && stationsList.slice(0, 7) || stationsList}
        </ul>
          {stationsList.length > 7 && (
              <button
                  className="departure__list-show-button"
                  onClick={() => setShow(!show)}
              >
                  {show && "показати ще..." || "згорнути..."}
              </button>
          )}



      </div>

      {isReverse && (
        <div
          className="departure__schedule departure__schedule--end-to-start"
        >
          <h3 className="departure__schedule-title">
            {`Відправлення з міста
            ${stations[stations.length - 1].cityInfo.city}`}
          </h3>
          <ul className="departure__list">
            {stations.map((station, i) => (
              <DepartureListItem
                station={station}
                key={i}
              />
            ))}
          </ul>
        </div>
      )}



    </div>
  );
};
