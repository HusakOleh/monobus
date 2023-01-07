import React, {useEffect, useState} from "react";
import { DatePicker } from "antd";

import { OrderMenuItem } from "../OrderMenuItem/OrderMenuItem";

const dateFormat = 'DD/MM/YYYY';

export const OrderMenuDate = ({
  icon,
  description,
  forModal=false,
  cutSection = false,

  date,
  setDate,
  callback,


  openData,
  setOpenData
}) => {

  // const [isOpen, setIsOpen] = useState(false);

  // const onClick = () => setIsOpen(!isOpen);


  const onClick = () => setOpenData(!openData);

  useEffect(() => {
      if(date !== ''){
        setOpenData(false)
      }
  }, [date])

  return (

    <OrderMenuItem
      icon={icon}
      description={description}
      forModal={forModal}
      selectedItem={date.format(dateFormat)}

      reactNode={(
          <DatePicker
            // open={isOpen}
            open={openData}
            placement="bottomRight"
            style={{
              opacity: "0",
              position: "absolute",
              left: "0",
              width: "100%",
              bottom: "0",
              height: "1px",
              overflow: "hidden",
              padding: "0",
              cursor: "pointer",
          }}
            popupStyle={{
              zIndex: "2500",
              margin: "30px",
            }}
            format={dateFormat}
            onChange={(e) => {
              setDate(e)
            }
          }
            value={date}
            disabledDate={current => current.add(1, 'day').valueOf() < Date.now()}
          />
      )}
      callback={onClick}
    >
    </OrderMenuItem>
  );
};
