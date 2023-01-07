import React, {useState} from "react";
import './CardContact.scss';
import classNames from "classnames";
import PhoneInput from 'react-phone-input-2'

export const CardContact = ({
  onChange,
  values,
  correctPhone,
  setCorrectPhone,
}) => {

  return (
    <div className="card-contact">
        <h4 className="card-contact__title">Контактні дані</h4>

        <div className="card-contact__input">
          <PhoneInput
            containerClass="card-contact__input-phone"
            country={'ua'}
            placeholder="тел.:"
            countryCodeEditable={false}
            specialLabel="Телефон*"
            value={values.phone}
            onChange={value => onChange("phone", value)}
            onClick={() => setCorrectPhone(true)}
          />

          <p
           className={classNames("card-contact__input-error", {
             "card-contact__input-error-hidden": correctPhone
           })}
          >
            Вкажіть коректно номер телефону!
          </p>

        </div>

        <div className="card-contact__input">
          <p>Email</p>
          <input
            value={values.email}
            type="email"
            placeholder="email...(необовязково)"
            onChange={(e) => {
              onChange("email", e.target.value);
            }}
          />
        </div>

        <div className="card-contact__input">
          <p>Примітка</p>
          <textarea
            value={values.note}
            name=""
            id=""
            rows="10"
            placeholder="Примітка...(необовязково)"
            onChange={(e) => {
              onChange("note", e.target.value);
            }}
          >

          </textarea>
        </div>
    </div>
  );
};
