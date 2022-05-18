import React from 'react';
import ReactDOM from 'react-dom/client';


const header = () => {
  return (
    <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="header__contacts">
                    <a className="header__phone" href="tel:+375333901056">+375(33)390 10 56</a>
                    <a className="header__email" href="mailto:doctorsprait@gmail.com">Doctorsprait@gmail.com</a>
                    <a data-fancybox data-src="#modal" href="javascript:;" className="header__btn">Бесплатная
                        консультация</a>
                </div>
            </div>
        </div>
        <div className="header__content">
            <div className="container">
                <div className="header__content-inner">
                    <div className="header__logo">
                        <a href="viber://chat?number=%2B375333901056">
                            <img src="img/viber.png" alt="Брест похороны, ритуальный магазин Брест, Ритуальные услуги"/>
                        </a>
                        <a href="tg://resolve?domain=doctorsprait">
                            <img src="img/telegram.png"
                                alt="Брест похороны, ритуальный магазин Брест, Ритуальные услуги"/></a>
                        <a href="whatsapp://send/?phone=375333901056">
                            <img src="img/watsap.png" alt="Брест похороны, ритуальный магазин Брест, Ритуальные услуги"/>
                        </a>
                    </div>
                    <nav className="menu">
                        <div className="header__btn-menu">
                            <span className="icon-bars"></span>
                        </div>
                        <ul>
                            <li><a href="#">Главная</a></li>
                            <li><a data-fancybox data-src="#modal__header-menu" href="javascript:;" className="menu a"
                                    >О компании</a></li>
                            <li><a data-fancybox data-src="#modal__header-uslugi" href="javascript:;" className="menu a"
                                    >Услуги</a></li>
                            <li><a data-fancybox data-src="#modal__header-contacts" href="javascript:;" className="menu a"
                                    >Контакты</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  );
}

export default header