import { Link } from "react-router-dom";
import "./Product.scss"; // Стили

const Product = () => {
  return (
    <section className="product">
      <div className="container">
        <h2 className="product__title">Каталог товаров</h2>
        <div className="product__wrapper"></div>
        <Link to="/catalog" className="product__link">
          Перейти в каталог
        </Link>
      </div>
    </section>
  );
};

export default Product;
