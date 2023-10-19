import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './NavBar.scss';

import buy from '../../servises/icons/buy.svg';
import searchIcon from '../../servises/icons/search.svg';

const NavBar = () => {
    const [show, setShow] = useState(false); 
    return (
        <nav className="navbar">
            <Link to="/" className="navbar__logo">Интерьер</Link>
            <input className={`navbar__search ${show ? 'show' : ''}`} type="text" placeholder='Поиск'/>
            <div className="nav"> {/* Элемент навигации */}
                <Link to="/catalog" className="nav__catalog">Каталог</Link>
                <Link to="/basket" className="nav__basket">Корзина</Link>
            </div>
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
                <Link to="/catalog" className="catalog__adaptiv">
                    <div className="dut"></div>
                    <div className="dut"></div>
                    <div className="dut"></div>
                    <div className="dut"></div>
                    <div className="dut"></div>
                    <div className="dut"></div>
                    <div className="dut"></div>
                    <div className="dut"></div>
                    <div className="dut"></div>
                </Link>
                <Link to="/basket" className="basket__adaptiv adaptiv">
                    <img src={buy} alt="img" className="basket" />
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;
