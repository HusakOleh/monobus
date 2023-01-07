import React from "react";
import {Link as ScrollLink} from "react-scroll";
import './NavBar.scss';

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ScrollLink
        className="nav-bar__link"
        to="home"
        spy={true}
        smooth={true}
        duration={500}
      >
        monobus
      </ScrollLink>


      <ul className="nav-bar__list">
        <li className="nav-bar__list-item">
          <ScrollLink
            to="order"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            Заплануйте поїздку
          </ScrollLink>
        </li>
        <li className="nav-bar__list-item">
          <ScrollLink
            to="departure"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Маршрути
          </ScrollLink>
        </li>
        <li className="nav-bar__list-item">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Довідка
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};
