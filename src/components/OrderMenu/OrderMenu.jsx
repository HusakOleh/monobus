import React, { useState } from "react";
import classNames from "classnames";
import useMatchMedia from "use-match-media-hook";
import './OrderMenu.scss';
import { Button } from "../Button/Button";
import { OrderMenuItemCities } from "../OrderMenuItemCities/OrderMenuItemCities";
import { OrderMenuSitters } from "../OrderMenuItemSitters/OrderMenuSitters";
import { OrderMenuDate } from "../OrderMenuItemDate/OrderMenuDate";
import {Placing} from "../Placing/Placing";

import { cities } from "../../utils/Data/Data";
import { routesExtended } from "../../App";
import { prices } from "../../utils/Data/Data";
import dayjs from "dayjs";
import {Modal} from "@mui/material";

const numberOfSeats = 8;
const numberOfSeatsArr = [];
for (let i = 1; i <= numberOfSeats; i++) {
  numberOfSeatsArr.push({label: i, key: i});
}

const citiesToSelect = [{
  label: 'Оберіть місто',
  key: 0
}].concat(cities.map((city, i) => {
  return {label: city.city, key: i+1};
}));

export const OrderMenu = ({
  forModal=false,
  closeOrderMenu,
}) => {
  const [onDesktop] = useMatchMedia(["(min-width: 1280px)"]);
  const [numberOfSeats, setNumberOfSeats] = useState(numberOfSeatsArr[0].label);

  const [firstCityList, setFirstCityList] = useState(citiesToSelect);
  const [secondCityList, setSecondCityList] = useState(citiesToSelect);

  const [firstItem, setFirstItem] = useState(firstCityList[0].label);
  const [secondItem, setSecondItem] = useState(secondCityList[0].label);

  const [date, setDate] = useState(dayjs());

  const [open, setOpen] = useState(false);

  const [openAlert, setOpenAlert] = useState(false);

  const [openData, setOpenData] = useState(false);

  const routeChooseFork = routesExtended.map(rt => {
    if (rt.hasOwnProperty("fork")) {
      const rightFork = rt.fork
        .filter(el => el
          .some(el2 => el2.cityInfo.city === firstItem || el2.cityInfo.city === secondItem));

      const destruct = [].concat(...rightFork);

      return {
        ...rt,
        stations: [...rt.stations, ...destruct]
      };

    } else {
      return rt;
    }
  });


  const myDays = {
    0: "Нд.",
    1: "Пн.",
    2: "Вт.",
    3: "Ср.",
    4: "Чт.",
    5: "Пт.",
    6: "Сб."
  }

  const myDay = myDays[date.day()];

  const filteredRoutes = routeChooseFork.filter(rt => {
    const firstIndex = rt.stations.findIndex(firstIndex => firstIndex.cityInfo.city === firstItem);
    const secondIndex = rt.stations.findIndex(secondIndex => secondIndex.cityInfo.city === secondItem);
    return rt.stations.some(el => el.cityInfo.city === firstItem)
      && rt.stations.some(el2 => el2.cityInfo.city === secondItem)
      && secondIndex > firstIndex
      && (rt.stations[firstIndex].dispatchDays ? rt.stations[firstIndex].dispatchDays.includes(myDay) : true)
      && (rt.stations[secondIndex].dispatchDays ? rt.stations[secondIndex].dispatchDays.includes(myDay) : true);
  }).sort((rt1, rt2) => {
    const first = rt1.stations.findIndex(firstIndex => firstIndex.cityInfo.city === firstItem);
    const second = rt2.stations.findIndex(secondIndex => secondIndex.cityInfo.city === firstItem);

    const r1Time = +rt1.stations[first].departure.split(":")[0];
    const r2Time = +rt2.stations[second].departure.split(":")[0];

    return r1Time - r2Time;
  });

  const routeInfo = {
    routes: filteredRoutes,
    date,
    numberOfSeats
  };

  const submitForm = () => {
    if (date >= dayjs().subtract(1, "day")
      && firstItem !== firstCityList[0].label
      && secondItem !== secondCityList[0].label
      && filteredRoutes.length !== 0
      && prices[firstItem][secondItem]
    ) {
      setOpen(true);
      setOpenData(false);
    } else {
      setOpenAlert(true);
      setOpenData(false);
    }
  };

  return (
    <div
      className={
        classNames("order-menu", {
          "order-menu__onDesktop": onDesktop && !forModal
        })
      }
    >
      {forModal && (
        <div
          className="order-menu-close"
          onClick={() => closeOrderMenu(false)}
        >
        </div>
      )}

      <div className="order-menu__item-wrap">
        <OrderMenuItemCities
          icon='point'
          description="Звідки?"
          forModal={forModal}

          selectedList={firstCityList}
          setSelectedList={setSecondCityList}
          selectedItem={firstItem}
          setSelectItem={setFirstItem}
        />
      </div>

      <div className="order-menu__item-wrap">
        <OrderMenuItemCities
          icon='point'
          description="Куди?"
          forModal={forModal}

          selectedList={secondCityList}
          setSelectedList={setFirstCityList}
          selectedItem={secondItem}
          setSelectItem={setSecondItem}
        />
      </div>

      <div className="order-menu__line-block">
        <div className="order-menu__line-block-left">
          <OrderMenuDate
            icon='calendar'
            description="Дата:"
            forModal={forModal}

            date={date}
            setDate={setDate}

            openData={openData}
            setOpenData={setOpenData}
          />
        </div>

        <div className="order-menu__line-block-right">
          <OrderMenuSitters
            icon='people'
            description="Пасажири"
            forModal={forModal}
            cutSection={true}

            selectedList={numberOfSeatsArr}
            selectedItem={numberOfSeats}
            setSelectItem={setNumberOfSeats}
          />
        </div>
      </div>

      <div className="order-menu__button">
        <Button
          whiteButton={false}
          content="Замовити"
          forModal={forModal}
          onClick={submitForm}
        />
      </div>

      <div className="order-menu__modal">
        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
            closeOrderMenu(false);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="order-menu__modal-window">
            <Placing
              routeInfo={routeInfo}
              firstItem={firstItem}
              secondItem={secondItem}
              handleClose={setOpen}
              prices={prices}
              closeOrderMenu={closeOrderMenu}
              // setSuccess={setOpenSuccess}
            />
          </div>
        </Modal>
      </div>

      {/*#region*/}
      {/*ALERT MODAL*/}
      <div className="order-menu__modal">
        <Modal
          open={openAlert}
          onClose={() => {
            setOpenAlert(false);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="order-menu__modal-window">
            <div
              className="order-menu-close order-menu-close-alert"
              onClick={() => setOpenAlert(false)}
            ></div>
            <div className="order-menu__modal-alert">
              Маршрути за обраним напрямком недоступні
            </div>
          </div>
        </Modal>
      </div>
      {/*#endregion*/}

    </div>
  );
};
