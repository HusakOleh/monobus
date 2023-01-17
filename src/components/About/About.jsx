import React, { useState } from "react";
import './About.scss';
import { Button } from "../Button/Button";
import { OrderMenu } from "../OrderMenu/OrderMenu";

import { Modal } from "@mui/material";

export const About = () => {
  const [openOrder, setOpenOrder] = useState(false);
  const handleClose = () => setOpenOrder(false);

  return (
    <section className="about container" id="about">
      <h2 className="about__title">
        Заповни форму, або телефонуй нам для замовлення свого квитку.
      </h2>

      <p className="about__content">
        Автобуси – Mercedes-Benz Sprinter.
        Високий рівень комфорту для пасажирів, надійність
        та гарна комплектація автобуса допоможуть
        зробити вашу поїздку приємною.
      </p>

      <ul className="about__list">
        <li className="about__list-item">
          Автобуси - Mercedes-Benz Sprinter
        </li>
        <li className="about__list-item">
          Влаштовані кондиціонери та usb порти
        </li>
        <li className="about__list-item">
          Кількість місць - 18
        </li>
        <li className="about__list-item">
          Чіткий графік поїздок
        </li>
      </ul>

      <ul className="about__contacts">
        Зв'язок з диспетчером:
        <li className="about__contacts-item">
          <a
            href="tel:+38 (066) 270-69-90"
            className="footer__link"
          >
            +380733706990
          </a>
        </li>
        <li className="about__contacts-item">
          <a
            href="tel:+38 (066) 270-69-90"
            className="footer__link"
          >
            +380963706990
          </a>
        </li>
        <li className="about__contacts-item">
          <a
            href="tel:+38 (066) 270-69-90"
            className="footer__link"
          >
            +380993706990
          </a>
        </li>
        <li className="about__contacts-item">
          <a
            href="tel:+38 (066) 270-69-90"
            className="footer__link"
          >
            +380662706990
          </a>
        </li>
      </ul>

      <div className="about__button">
        <Button
          content="Замовити квиток"
          whiteButton={true}
          onClick={() => setOpenOrder(true)}
        />
      </div>

      <div className="about__modal">
        <Modal
          open={openOrder}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="about__modal-window">
            <OrderMenu
              forModal={true}
              closeOrderMenu={setOpenOrder}
            />
          </div>
        </Modal>
      </div>
    </section>
  );
};
