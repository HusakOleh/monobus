import React from "react";
import useMatchMedia from 'use-match-media-hook';
import './DepartureListItem.scss';

export const DepartureListItem = ({station}) => {
  const [onDesktop] = useMatchMedia(["(min-width: 1280px)"])

  return (
    <>
      {
        !onDesktop
        &&
        (
          <li
            className="departure-list-item"
          >
            {station.cityInfo.city} - {station.departure || ("-")}
          </li>
        )
        ||
        (
          <li
            className="departure-list-item departure-list-item--desktop"
          >
            <p>
              {station.departure || ("-")} | {station.cityInfo.city}
            </p>

            <p
              className="departure-list-item--gray"
            >
              {station.cityInfo.address || ("-")}
            </p>
          </li>
        )
      }
    </>
  );
};
