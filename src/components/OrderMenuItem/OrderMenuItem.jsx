import React from "react";
import classNames from "classnames";
import useMatchMedia from "use-match-media-hook";
import './OrderMenuItem.scss';

export const OrderMenuItem = ({
    icon,
    description,
    forModal=false,
    cutSection = false,

    selectedItem,

    reactNode,
    callback,
    onClick
  }) => {
  const [onDesktop] = useMatchMedia(["(min-width: 1280px)"]);

  return (
    <div
      className={
        classNames("order-menu-item", {
          "order-menu-item__onDesktop": onDesktop && !forModal
        })
      }
      onClick={callback}
    >
      <img
        className="order-menu-item__icon"
        src={`./assets/images/icons/${icon}.svg`}
        alt={icon}
      />


      <div className="order-menu-item__text">
        {
          (!cutSection || (onDesktop && !forModal))
          && (
            <div
              className="order-menu-item__text-description"
            >
              {description}
            </div>
          )
        }

        <div
          className="order-menu-item__text-selectedItem"
        >
          {selectedItem}
        </div>
      </div>

      <img
        className="order-menu-item__arrow"
        src='./assets/images/icons/arrow.svg'
        alt="arrow"
      />

        <div onClick={(e) => e.stopPropagation()}>
      {reactNode}
        </div>
    </div>
  );
};
