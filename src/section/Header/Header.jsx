import React from "react";
import './Header.scss'
import { NavBar } from "../../components/NavBar/NavBar";
import { OrderMenu } from "../../components/OrderMenu/OrderMenu";

export const Header = () => {
  return (
    <header className="header container" id="home">
      <NavBar />

      <h1 className="header__title">
        Квитки на автобус по Україні за один клік.
      </h1>

      <div className="header__order-menu-wrap" id="order">
        <OrderMenu />
      </div>
    </header>
  );
};
