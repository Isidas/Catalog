import { Link } from "react-router-dom";
import SpecialProduct from "../SpecialProduct/SpecialProduct";
import "./BasketSpecialProduct.scss";

const BasketSpecialProduct = () => {
  return (
    <div className="basketSpecialProduct">
      <div className="container">
        <SpecialProduct />
        <Link to="/catalog" className="basketSpecialProduct__link">
          Перейти в каталог
        </Link>
      </div>
    </div>
  );
};
export default BasketSpecialProduct;
