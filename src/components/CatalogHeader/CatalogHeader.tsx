import React from 'react';
import NavBar from '../NavBar/NavBar';
// Подключение стилей
import './CatalogHeader.scss';



const CatalogHeader = () => {

    return (
        <header className="catalog">
            <div className="container">
                <NavBar/>
                <div className="catalog__main">
                    <h1 className="catalog__slogan">Каталог</h1>
                </div>
            </div>
        </header>
    )
}

export default CatalogHeader