// Компонент для сборки итоговой главной страницы
import Header from "../Header/Header";
import For from "../For/For";
import SpecialProduct from "../SpecialProduct/SpecialProduct";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";

const Main = () => {
    return (
        <div className="app">
            <Header/>
            <For/>
            <SpecialProduct/>
            <Product/>
            <Footer/>
        </div>

    )
}

export default Main