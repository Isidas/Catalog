// Компонент для сборки итоговой главной страницы
import Header from "../components/Header/Header";
import For from "../components/For/For";
import SpecialProduct from "../components/SpecialProduct/SpecialProduct";
import Product from "../components/Product/Product";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div className="app">
      <Header />
      <For />
      <SpecialProduct />
      <Product />
      <Footer />
    </div>
  );
};

export default Main;
