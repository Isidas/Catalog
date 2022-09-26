import './Product.scss'; // Стили
import data from '../../data/dataBase' // Имитация БД



const Product = () => {
    return (
        <section className="product">
            <div className="container">
                <h2 className="product__title">Каталог товаров</h2>
                <div className="product__wrapper">
                    {
                        data.card.map(card => {
                            return (
                                <a href="#" className="product__item" key={card.id}>
                                    <img src={card.img} alt="img" className="product__img" />
                                    <h3 className="product__name">{card.title}</h3>
                                    <span className="product__subname">{card.descr}</span>
                                    <span className="product__price">{card.price} руб.</span>
                                </a>
                            )
                        })
                    }
                </div>
                <a href="#" className="product__link">Перейти в каталог</a>
            </div>
        </section>
    )
}

export default Product
