import React from "react";
import {Dropdown} from "antd";

import { OrderMenuItem } from "../OrderMenuItem/OrderMenuItem";

export const OrderMenuSitters = ({
    icon,
    description,
    forModal=false,
    cutSection = false,

    selectedList,
    selectedItem,
    setSelectItem,
  }) => {

  const onClick = (e) => {
    setSelectItem(selectedList[e.key - 1].label);
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
            cutSection={true}
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
