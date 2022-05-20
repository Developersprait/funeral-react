import React from 'react';
import Modal from './Modals/Modal';
import {useState} from 'react';


const Header = () => {
    const [state] = useState({
        phone: '+375333901056', 
        email: 'doctorsprait@gmail.com',
        button: 'Бесплатная консультация'});
  return (
    
    <header className="header">
        <div className="container">
            <div className="header__top">
                <div className="header__contacts">
                    <div className="header__phone">
                        <div className="header__phone-img"></div>   
                        <a href="tel:+375333901056" className="header__phone-link">{state.phone}</a>
                    </div>
                    <div className="header__email">
                        <div className="header__email-img"></div>
                        <a href="mailto:doctorsprait@gmail.com" className="header__email-link">{state.email}</a>
                    </div>
                </div>
                <Modal/>
            </div>
        </div>
    </header>
  );
}

export default Header