import './For.scss'; // Подключение шрифтов
import for1 from '../../servises/for1.png'; // Подключение картинок логических блоков
import for2 from '../../servises/for2.png'; // Подключение картинок логических блоков
import for3 from '../../servises/for3.png'; // Подключение картинок логических блоков
import for4 from '../../servises/for4.png'; // Подключение картинок логических блоков
import for5 from '../../servises/for5.png'; // Подключение картинок логических блоков

const For = () => {
    return (
        <section className="for">
            <div className="container">
                <h2 className="for__title">Мебель для ... </h2>
                <div className="for__content">
                    <a id='first' href="#" className="for__item">
                        <span className="item__description">ОТДЫХА</span>
                        <img src={for1} alt="img" className="item__img" />
                    </a>
                    <a id='second' href="#" className="for__item">
                        <span className="item__description">РАБОТЫ</span>
                        <img src={for2} alt="img" className="item__img" />
                    </a>
                    <a id='third' href="#" className="for__item">
                        <span className="item__description">КУХНИ</span>
                        <img src={for3} alt="img" className="item__img" />
                    </a>
                    <a id='fourth' href="#" className="for__item">
                        <span className="item__description">ДЕТСКОЙ</span>
                        <img src={for4} alt="img" className="item__img" />
                    </a>
                    <a id='fifth' href="#" className="for__item">
                        <span className="item__description">ВАННОЙ</span>
                        <img src={for5} alt="img" className="item__img" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default For