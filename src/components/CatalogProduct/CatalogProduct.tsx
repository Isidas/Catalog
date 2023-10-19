import React from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import "./CatalogProduct.scss";

const CatalogProduct = () => {
  return (
    <div className="container">
      <nav className="catalogProduct__nav">
        <div className="catalogProduct__link">
          <Link to="/" className="link">
            Главная /
          </Link>
          <Link to="/catalog" className="link">
            {" "}
            Каталог товаров
          </Link>
        </div>
        <div className="catalogDropdown">
          <ul>
            <li className="catalogDropdown__item active">
              Порядок: сперва новые
            </li>
            <li className="catalogDropdown__item">Порядок: цена больше</li>
            <li className="catalogDropdown__item">Порядок: цена меньше</li>
          </ul>
          <div className="arrow"></div>
        </div>
      </nav>
      <Product />
      <a href="#" className="catalogProduct__showMore">
        Показать ещё
      </a>
    </div>
  );
};

export default CatalogProduct;
