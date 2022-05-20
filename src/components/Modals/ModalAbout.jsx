import React from "react";
import Popup from "reactjs-popup";
import {useState} from "react"

const ModalAbout = () => {
  const [state] = useState({about: 'О нас'})
  return (
    <Popup
      trigger={<button className="menu__button">{state.about}</button>}
      modal
      nested
    >
      {(close) => (
        <div className="modal__about">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="modal__header">{state.about}</div>
          <div className="content">
            <div class="modal__text-about">
              Наша компания оказывает ритуальные услуги с 2004 года и занимает
              одну из лидерских позиций по качеству оказания услуг в городе. В
              нашем распоряжении находится широкий штат высококвалифицированных
              сотрудников, катафалки и широкий выбор автотранспорта для
              перевозки людей. Выбирая нас, Вы доверяете решение своих вопросов
              в надежные руки.
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ModalAbout;
