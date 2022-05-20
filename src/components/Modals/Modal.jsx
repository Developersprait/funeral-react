import React from 'react';
import Popup from 'reactjs-popup';

const Modal = () => (
  <Popup
    trigger={<button className="button">Бесплатная консультация</button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="modal__header"> Закажите обратный звонок </div>
        <div className="content">
          <form className="modal__form" action="../../mail.php" method="post">
            <input type="text" name="user_name" placeholder="Ваше имя" required />
            <input type="text" name="user_phone" placeholder="Ваш телефон" required/>
            <input id="submit" type="submit" value="Отправить" />
          </form>
        </div>
      </div>
    )}
  </Popup>
);
export default Modal