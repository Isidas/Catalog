import NavBar from '../NavBar/NavBar';
import './BasketHeader.scss';

const BasketHeader = () => {
    return (
        <header className="basket">
            <div className="container">
                <NavBar/>
                <div className="basket__main">
                    <h1 className="basket__slogan">Корзина</h1>
                </div>
            </div>
        </header>
    )
}

export default BasketHeader;