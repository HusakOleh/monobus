import React from "react";
import './CardPassenger.scss';


export const CardPassenger = ({
  number,
  onChange,
  values
}) => {

  return (
    <div className="card-passenger">

      <h4 className="card-passenger__title">{`Пасажир ${number}`}</h4>

      <div className="card-passenger__input">
        <p>Прізвище*</p>
        <input
          value={values[`passenger${number}`]?.surname || ''}
          type="text"
          placeholder="Прізвище..."
          required={true}
          onChange={(e) => {
            onChange(`passenger${number}`, {surname: e.target.value});
          }}
        />
      </div>

      <div className="card-passenger__input">
        <p>Ім'я*</p>
        <input
          value={values[`passenger${number}`]?.name || ''}
          type="text"
          placeholder="Ім'я..."
          required={true}
          onChange={(e) => {
            onChange(`passenger${number}`, {name: e.target.value});
          }}
        />
      </div>
    </div>
  );
};
