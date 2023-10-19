import { Link } from "react-router-dom";
import Product from "../Product/Product";
import "./MainProduct.scss"; // Стили

const MainProduct = () => {
  return (
    <section className="product">
      <div className="container">
        <h2 className="product__title">Каталог товаров</h2>
        <Product />
        <Link to="/catalog" className="product__link">
          Перейти в каталог
        </Link>
      </div>
    </section>
  );
};

export default MainProduct;
