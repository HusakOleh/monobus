import React, {useState, useRef} from "react";
import './Placing.scss';
import {CardRoute} from "../CardRoute/CardRoute";
import {CardContact} from "../CardContact/CardContact";
import {CardPassenger} from "../CardPassenger/CardPassenger";
import classNames from "classnames";


export const Placing = ({
  routeInfo,
  firstItem,
  secondItem,
  handleClose,
  prices,
  closeOrderMenu,
}) => {
  const [isBooked, setIsBooked] = useState(false);
  const [selectRt, setSelectRt] = useState(0);

  const [final, setFinal] = useState(false)

  const [pasInfo, setPasInfo] = useState({});
  const passengersInfo = (key, newValue) => {
    setPasInfo(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        ...newValue
      }
    }))
  };

  const price = prices[firstItem][secondItem];

  const [cusInfo, setCusInfo] = useState({
    phone: '',
    email: '',
    note: '',
  });
  const customerInfo = (key, newValue) => {
    setCusInfo(prevState => ({
      ...prevState,
      [key]: newValue
    }))
  };

  const [correctPhone, setCorrectPhone] = useState(true)

  const onSubmit = () => {
    const orderInfo = {
      ...pasInfo,
      ...cusInfo,
      selectRt,
      from: firstItem,
      to: secondItem,
      date: routeInfo.date.format('DD/MM/YYYY')
    }

    const phone = orderInfo.phone.replace(/\s/g, "");

    if (phone.length < 12) {
      setCorrectPhone(false)
    } else {

      const adminID = {
        denys: 961690224,
        karina: 5711463553,
        admin3: 5845744569,

        nicol: 402275387,
        oleh: 5626126417,
        oleh2: 257497939,
        danilo: 676244499
      }

      const BOT_APIKEY = process.env.REACT_APP_TELEGRAM_APIKEY;

      let mRoute = `Маршрут№ : ${orderInfo.selectRt}%0A`;
      let mFrom = `Звідки : ${orderInfo.from}%0A`;
      let mTo = `Куди : ${orderInfo.to}%0A`;
      let mPhone = `☎️ : ${phone}%0A`
      let mMail = orderInfo.email ? `📫 : ${orderInfo.email}%0A` : '';
      let mNote = orderInfo.note ? `🖋 : ${orderInfo.note}%0A` : '';
      let mDate = `📆 : ${orderInfo.date}%0A`;
      let mPrice = `💵 : ${price} грн.%0A`;

      let mPasInfo = "%0A";

      const pasKeys = Object.keys(orderInfo)
        .filter(key => key.includes("passenger"))
        .map((pas, i) => {
          mPasInfo = mPasInfo + `👤Пасажир ${i + 1}:%0A        Фамілія: ${orderInfo[pas].surname}%0A        Ім'я: ${orderInfo[pas].name}%0A`;
        });

      let messageData = `${mRoute}${mFrom}${mTo}${mPrice}${mDate}%0A${mPhone}${mMail}${mNote}${mPasInfo}`;

      let api = new XMLHttpRequest();
      try {
        const CHAT_ARRAY = [
          {chat_id: adminID.denys},
          {chat_id: adminID.karina},
          {chat_id: adminID.admin3},
          // {chat_id: adminID.oleh2},
          // {chat_id: adminID.oleh},
          // {chat_id: adminID.nicol},
          // {chat_id: adminID.danilo},
        ]
        setTimeout(() => {
          CHAT_ARRAY.map((id) => {
            api.open("GET", `https://api.telegram.org/bot${BOT_APIKEY}/sendMessage?chat_id=${id.chat_id}&text=${messageData}`, false)
            api.send();
            // console.log("send to: ", id.chat_id);
          })
        }, 1000)
      } catch (error) {
        throw error;
        console.log("not send: ", error);
      }

      setFinal(true)
    }
  };

  const counterSit = [];

  for (let i = 1; i <= routeInfo.numberOfSeats; i++) {
    counterSit.push(i);
  }

  const routesFiltered = routeInfo.routes.map((rt, i) => {
    const routeClone = structuredClone(rt);
    const start = routeClone.stations.findIndex(el => el.cityInfo.city === firstItem);
    const end = routeClone.stations.findIndex(el => el.cityInfo.city === secondItem);
    const stationsCut = routeClone.stations.slice(start, end + 1);

    return routeClone;
  });



  return (
    <>
      <div
        className="order-menu-close"
        onClick={() => {
          handleClose(false);
          closeOrderMenu(false);
        }}
      ></div>
      <form
        className={classNames("placing", {
          "placing-final": final
        })}
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}

      >
        {final
          &&
          <>
            <div
              style={{
                height: "max-content",
                width: "100%",
              }}
            >
              <div
                className="placing-success"
                onClick={() => {
                  handleClose(false);
                  closeOrderMenu(false);
                }}
              >
                Вашу заявку прийнято в опрацювання
                <br/>
                ...наш менеджер зяв'яжеться з Вами найближчим часом
              </div>
            </div>
          </>
          ||
          <>
            {/*#region*/}
            {!isBooked
              &&
              //#region
              <>
                {routesFiltered.map((rt, i) => (
                    <CardRoute
                      date={routeInfo.date}
                      route={rt}
                      key={i}
                      setIsBooked={setIsBooked}
                      firstItem={firstItem}
                      secondItem={secondItem}
                      setSelectRt={setSelectRt}
                      price={price}
                    />
                  )
                )}
                <div
                  style={{
                    height: "max-content",
                    width: "100%"
                  }}
                >
                  <button
                    className="button"
                    onClick={() => handleClose(false)}
                  >
                    Назад
                  </button>
                </div>
              </>
              //#endregion
              ||
              //#region
              <>
                {routesFiltered.filter(el => el.routeID === selectRt)
                  .map((rt, i) => (
                      <CardRoute
                        date={routeInfo.date}
                        route={rt}
                        key={rt.routeID}
                        final={true}
                        setIsBooked={setIsBooked}
                        firstItem={firstItem}
                        secondItem={secondItem}
                        price={price}
                      />
                    )
                  )}

                <CardContact
                  onChange={customerInfo}
                  values={cusInfo}
                  correctPhone={correctPhone}
                  setCorrectPhone={setCorrectPhone}
                />

                {counterSit.map((num, i) => (
                  <CardPassenger
                    number={num}
                    onChange={passengersInfo}
                    values={pasInfo}
                    key={i}
                  />
                ))}

                <div className="placing__button">
                  <button
                    className="button"
                    onClick={() => setIsBooked(false)}
                  >
                    Назад
                  </button>

                  <button
                    type="submit"
                    className="button placing__button-forward"
                  >
                    Далі
                  </button>
                </div>
              </>
              //#endregion
            }
            {/*#endregion*/}
          </>

        }

      </form>


    </>









  )
};
