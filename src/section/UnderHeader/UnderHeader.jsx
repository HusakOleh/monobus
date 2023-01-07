import React from "react";
import './UnderHeader.scss'
import {IconLink} from "../../components/IconLink/IconLink";
import {Link} from "react-scroll";

export const UnderHeader = () => {
  return (
    <div className="underHeader">
      <Link
        className="underHeader__main-link"
        to="home"
        spy={true}
        smooth={true}
        duration={500}
      >
        monobus
      </Link>

      <div className="underHeader__link">
        <IconLink
          link='departure'
          image='road'
        />

        <IconLink
          link='footer'
          image='headphone'
        />
      </div>
    </div>
  );
};
