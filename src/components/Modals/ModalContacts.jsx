import React from "react";
import Popup from "reactjs-popup";
import { useState } from "react";

const ModalContacts = () => {
  const [state] = useState({ contacts: "Контакты" });
  return (
    <Popup
      trigger={<button className="menu__button">{state.contacts}</button>}
      modal
      nested
    >
      {(close) => (
        <div className="modal__contacts">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="modal__header">{state.contacts}</div>
          <div className="content">
            <div className="contacts__wrp">
              <a class="contacts__phone" href="tel:+375555901056">
                +375(33)390 10 56
              </a>
            </div>
            <div className="contacts__wrp">
              <a class="contacts__phone" href="tel:+375297902116">
                +375(29)790 21 16
              </a>
            </div>
            <div className="contacts__wrp">
              <a class="contacts__phone" href="Doctorsprait@gmail.com">
                Doctorsprait@gmail.com
              </a>
            </div>
            <div className="contacts__link">
              <a class="viber" href="viber://chat?number=%2B375333901056">
                <div className="menu__viber-img"></div>
              </a>
              <a class="telegram" href="tg://resolve?domain=@doctorsprait>">
                <div className="menu__telegram-img"></div>
              </a>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ModalContacts;
