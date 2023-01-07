import React from "react";
import './TrackerSection.scss'
import {TrackerSectionItem} from "../TrackerSectionItem/TrackerSectionItem";

import { routesExtended } from "../../App";

export const TrackerSection = () => {
  return (
    <section
      className="tracker-section container"
    >
      {routesExtended.map((route, i) => (
        <div
          className="tracker-section__wrap"  id="departure"
          key={i}
        >
          <TrackerSectionItem
           route={route}
          />
        </div>
      ))}
    </section>
  );
};
