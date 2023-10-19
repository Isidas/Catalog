import BasketHeader from "../components/BasketHeader/BasketHeader";
import BasketContent from "../components/BasketContent/BasketContent";
import BasketSpecialProduct from "../components/BasketSpecialProduct/BasketSpecialProduct";
import Footer from "../components/Footer/Footer";
import Product from "../components/Product/Product";

const Basket = () => {
  return (
    <>
      <BasketHeader />
      <BasketContent />
      <Product />
      <BasketSpecialProduct />
      <Footer />
    </>
  );
};

export default Basket;
