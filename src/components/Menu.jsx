import React from 'react'
import {useState} from 'react'

const Menu = () => {
    const [state] = useState({
        link1: '1', 
        link2: '2',
      });
  return (
    <div className="menu">
        <div className="container">
            <div className="menu__box">
                <div className="menu__socials">
                    <div className="menu__telegram">
                        <a href="tg://resolve?domain=kalziferr"className='menu__telegram-link'>
                            <div className="menu__telegram-img">{state.link1}</div>
                        </a>
                    </div>
                    <div className="menu__viber">
                        <a href="viber://chat?number=%2B375333901056" className="menu__viber-link">
                            <div className="menu__viber-img">{state.link2}</div>
                        </a>
                    </div>
                </div>
                <div className="menu__wrp">
                    <div className="menu__btn">
                    ☰
                    </div>
                    <ul className="menu__list">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu