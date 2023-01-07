import React from "react";
import {Dropdown} from "antd";
import {cities} from "../../utils/Data/Data";
import {routesExtended} from "../../App";

import { OrderMenuItem } from "../OrderMenuItem/OrderMenuItem";

export const OrderMenuItemCities = ({
    icon,
    description,
    forModal=false,
    cutSection = false,

    selectedList,
    setSelectedList,
    selectedItem,
    setSelectItem,
  }) => {

  const filteredCities = cities.map((city, i) => {
    return {label: city.city, key: i+1};
  })


  // const filteredCities = cities.map((city, i) => {
  //   if (selectedItem === 'Оберіть місто') {
  //     return {label: city.city, key: i+1};
  //   }
  //
  //
  //   return {label: city.cityLatin, key: i+1};
  // })

  const citiesToSelect2 = [{
    label: 'Оберіть місто',
    key: 0
  }].concat(filteredCities);

  const onClick = (e) => {
    setSelectItem(selectedList[e.key].label);
    setSelectedList(citiesToSelect2);
  };

  return (
    <Dropdown menu={
      {
        items: selectedList,
        onClick: onClick,
      }
    }>
      <a>
        <OrderMenuItem
          icon={icon}
          description={description}
          forModal={forModal}

          selectedItem={selectedItem}
        >
        </OrderMenuItem>
      </a>
    </Dropdown>
  );
};
