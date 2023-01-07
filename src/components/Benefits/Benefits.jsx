import React from "react";
import './Benefits.scss';
import {BenefitItem} from "../BenefitItem/BenefitItem";

export const Benefits = () => {
  return (
      <section className="benefits container">
        <div className="benefits__row-container">
          <BenefitItem
            image="convenient"
            title="Зручно для кожного"
            content="Купуй квитки онлайн у будь-який час на сайті"
          />
          <BenefitItem
            image="direction"
            title="3 основні напрямки"
            content="Рейтинг рейсів перевізників за відгуками пасажирів"
          />
        </div>

        <div className="benefits__row-container">
          <BenefitItem
            image="safety"
            title="Безпечна оплата"
            content="Стандарти безпеки PCI DSS для захисту платіжних даних"
          />
          <BenefitItem
            image="transport"
            title="Комфортний транспорт"
            content="Ми пропонуємо поїздки в комфортабельних автобусах"
          />
        </div>
      </section>
  );
};
