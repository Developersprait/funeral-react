import React from 'react'
import Popup from "reactjs-popup";
import {useState} from 'react'

const ModalServices = () => {
    const [state] = useState({serv: 'Услуги'})
  return (
    <Popup
      trigger={<button className="menu__button">{state.serv}</button>}
      modal
      nested
    >
      {(close) => (
        <div className="modal__services">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="modal__header">{state.serv}</div>
          <div className="content">
          <ul>
                <li>Консультации по вопросам захоронения</li>
                <li>Оформление документов</li>
                <li>Копка могил</li>
                <li>Доставка умершего в МОРГ</li>
                <li>Доставка умершего из МОРГа домой</li>
                <li>Организация и проведение похорон</li>
                <li>Услуги катафалка по Бресту, области и РБ</li>
                <li>Похоронная команда</li>
                <li>Организация дополнительного транспорта</li>
                <li>Украшение места захоронения</li>
                <li>Помощь в организации панихиды</li>
                <li>Бальзамация и гигиенические услуги усопшему</li>
            </ul>
          </div>
        </div>
      )}
    </Popup>
  )
}

export default ModalServices