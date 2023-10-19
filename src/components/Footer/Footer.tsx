// Компонент подвала сайта

import "./Footer.scss"; // Подключение шрифтов
import inst from "../../servises/icons/instagram.svg"; // Подключение иконок
import twit from "../../servises/icons/twitter.svg"; // Подключение иконок
import fbook from "../../servises/icons/facebook.svg"; // Подключение иконок
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <a href="#" className="footer__logo">
            Интерьер
          </a>
          <div className="footer__info">
            <nav className="footer__item">
              <h3 className="footer__title">Меню</h3>
              <Link to="/" className="footer__link">
                Главная
              </Link>
              <Link to="/catalog" className="footer__link">
                Каталог
              </Link>
              <Link to="/basket" className="footer__link">
                Корзина
              </Link>
            </nav>
            <div className="footer__item">
              <h3 className="footer__title">Контакты</h3>
              <a href="#" className="footer__link">
                +7 908 800 80 80{" "}
              </a>
              <a href="#" className="footer__link">
                help@interier.com
              </a>
              <div className="footer__icons">
                <a href="#">
                  <img src={inst} alt="img" className="footer__img" />
                </a>
                <a href="#">
                  <img src={twit} alt="img" className="footer__img" />
                </a>
                <a href="#">
                  <img src={fbook} alt="img" className="footer__img" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer__form">
            <span className="footer__appeal">
              Получайте наши новости и обновления{" "}
            </span>
            <form className="form" action="#" name="user__email" method="post">
              <input
                className="footer__input"
                type="text"
                placeholder="Email Address"
              />
              <button className="footer__btn">Подписаться </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
