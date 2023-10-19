// Технический блок подключения
import React from 'react';
import { useState } from 'react';
// Подключение стилей
import './Header.scss';
// Подключение иконок
import buy from '../../servises/icons/buy.svg';
import searchIcon from '../../servises/icons/search.svg';


const Header = () => {
    const [show, setShow] = useState(false); // Использовал хук для переключения input

    return (
        <header className="header">
            <div className="container">
                <nav className="header__navbar">
                    <a href="#" className="header__logo">Интерьер</a>
                    <input className={`header__search ${show ? 'show' : ''}`} type="text" placeholder='Поиск'/>
                    <nav className="nav"> {/* Элемент навигации */}
                        <a href="#" className="catalog">Каталог</a>
                        <a href="#" className="nav__basket">Корзина</a>
                    </nav>
                    <div className="nav__adaptiv"> {/* Элемент навигации для адаптива*/}
                        <img src={searchIcon}
                            alt="img" 
                            className="search__adaptiv"
                            onClick={() => {
                                if(show === false) {
                                    return setShow(true)
                                } else if (show) {
                                    return setShow(false)
                                }
                            }}
                             />
                        <a href="#" className="catalog__adaptiv">
                            <div className="dut"></div>
                            <div className="dut"></div>
                            <div className="dut"></div>
                            <div className="dut"></div>
                            <div className="dut"></div>
                            <div className="dut"></div>
                            <div className="dut"></div>
                            <div className="dut"></div>
                            <div className="dut"></div>
                        </a>
                        <a href="#" className="basket__adaptiv adaptiv">
                            <img src={buy} alt="" className="basket" />
                        </a>
                    </div>
                </nav>
                <div className="header__main">
                    <h1 className="header__slogan">Всё, чего <br /> заслуживает ваш дом</h1>
                    <h3 className="header__subslogan">Наша мебель — ваше отражение</h3>
                    <a href="#" className="header__link-catalog">Перейти в каталог</a>
                </div>
            </div>
        </header>
    )
}

export default Header