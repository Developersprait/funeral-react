import React from 'react'
import {useState} from 'react'

const Menu = () => {
    const [state] = useState({ 
        about: 'О нас',
        services: 'Услуги',
        contacts: 'Контакты'
      });
  return (
    <div className="menu">
        <div className="container">
            <div className="menu__box">
                <div className="menu__socials">
                    <div className="menu__telegram">
                        <a href="tg://resolve?domain=kalziferr"className='menu__telegram-link' target="_blank">
                            <div className="menu__telegram-img"></div>
                        </a>
                    </div>
                    <div className="menu__viber">
                        <a href="viber://chat?number=%2B375333901056" className="menu__viber-link" target="_blank">
                            <div className="menu__viber-img"></div>
                        </a>
                    </div>
                </div>
                <div className="menu__wrp">
                    <div className="menu__btn">
                    ☰
                    </div>
                    <ul className="menu__list">
                        <li><button className="menu__button">{state.about}</button></li>
                        <li><button className="menu__button">{state.services}</button></li>
                        <li><button className="menu__button">{state.contacts}</button></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu