import './SpecialProduct.scss'; // Стили
import data from '../../data/dataBase'; // Имитация БД



const SpecialProduct = () => {
    return (
        <section className="specialProduct">
            <div className="container">
                <h2 className="specialProduct__title">Специальные предложения </h2>
                <div className="specialProduct__wrapper">
                    {
                        data.special.map(card => {
                            return (
                                <a href="#" className="specialProduct__item" key={card.id}>
                                    <img src={card.img} alt="img" className="specialProduct__img" />
                                    <h3 className="specialProduct__name">{card.title}</h3>
                                    <span className="specialProduct__subname">{card.descr}</span>
                                    <div className="specialProductText">
                                        <span className="specialProduct__price">{card.price} руб.</span>
                                        <span className="specialProduct__specialPrise">{card.specialPrise} руб</span>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default SpecialProduct
