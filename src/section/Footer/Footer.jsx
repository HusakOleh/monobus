import React from "react";
import {Link as ScrollLink} from "react-scroll";
import './Footer.scss'

export const Footer = () => {
  return (
    <footer className="container" id="footer">
      <div className="footer">
        <ScrollLink
          className="footer__link footer__link--main"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          perevozky.ua
        </ScrollLink>


        <div className="footer__contact">
          <span>
            Зв'язок з диспетчером:
          </span>
          <a
            href="tel:+38 (066) 270-69-90"
            className="footer__link"
          >
            +380662706990
          </a>
          <span>
            /
          </span>
          <a
            href="tel:+38 (099) 370-69-90"
            className="footer__link"
          >
            +380993706990
          </a>
        </div>
      </div>
    </footer>
  );
};
