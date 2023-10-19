// Технический блок подключения
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// Подключение стилей
import "./Header.scss";
// Подключение иконок
import buy from "../../servises/icons/buy.svg";
import searchIcon from "../../servises/icons/search.svg";

const Header = () => {
  const [show, setShow] = useState(false); // Использовал хук для переключения input

  return (
    <header className="header">
      <div className="container">
        <nav className="header__navbar">
          <a href="#" className="header__logo">
            Интерьер
          </a>
          <input
            className={`header__search ${show ? "show" : ""}`}
            type="text"
            placeholder="Поиск"
          />
          <nav className="nav">
            <Link to="/catalog" className="nav__link nav_catalog">
              Каталог
            </Link>
            <Link to="/basket" className="nav__link nav__basket">
              Корзина
            </Link>
          </nav>
          <div className="nav__adaptiv">
            <img
              src={searchIcon}
              alt="img"
              className="search__adaptiv"
              onClick={() => {
                if (show === false) {
                  return setShow(true);
                } else if (show) {
                  return setShow(false);
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
            <Link to="/basket" className="basket__adaptiv-img adaptiv">
              <img src={buy} alt="img" className="basket_img" />
            </Link>
          </div>
        </nav>
        <div className="header__main">
          <h1 className="header__slogan">
            Всё, чего <br /> заслуживает ваш дом
          </h1>
          <h3 className="header__subslogan">Наша мебель — ваше отражение</h3>
          <Link to="/catalog" className="header__link-catalog">
            Перейти в каталог
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
