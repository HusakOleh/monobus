import React from "react";
import './TrackerSectionItem.scss';
import {CalculationBlock} from "../CalculationBlock/CalculationBlock";
import {TariffsContainer} from "../TariffsContainer/TariffsContainer";
import { Departure } from "../Departure/Departure";

import { prices } from "../../utils/Data/Data";

export const TrackerSectionItem = ({route}) => {
  const stations = route.stations;
  const priceList = prices[stations[0].cityInfo.city];

  const fullPrice = priceList[stations[route.stations.length - 1].cityInfo.city];


  return(
        <div
          className="
            tracker_section-item
          "
        >
          <h2
            className="
              tracker_section-item__title
              tracker_section-item-col--1-5
              tracker_section-item-row--1-1
            "
          >
            {`${stations[0].cityInfo.city} -
            ${stations[stations.length - 1].cityInfo.city}`}
          </h2>

          <div className="
              tracker_section-item__calculation
              tracker_section-item-col--1-5
              tracker_section-item-row--2-2
            "
          >
            <div className="tracker_section-item__calculation-left">
              <CalculationBlock
                icon="flight"
                title="Маршрут:"
                content="Щоденный"
                route={route}
              />
            </div>

            <div className="tracker_section-item__calculation-right">
              <CalculationBlock
                icon="money"
                title="Вартість:"
                content={
                `${fullPrice} грн`
              }
              />
            </div>
          </div>

          <div
            className="
              tracker_section-item-col--1-5
              tracker_section-item-row--3-3
            "
          >
            <TariffsContainer
              icon="road"
              title="Тарифні зупинки:"
              prices={priceList}
              stations={stations}
              from={stations[0].cityInfo.city}
            />
          </div>

          <div
            className="
              tracker_section-item-col--6-12
              tracker_section-item-row--1-4
            "
          >
            <Departure
              route={route}
            />
          </div>


          <img
            className="tracker_section-item__map
                tracker_section-item-col--1-5
                tracker_section-item-row--4-4
              "
            src={`./assets/images/Maps/${route.map}.png`}
            alt="map"
          />
        </div>
    )
}
