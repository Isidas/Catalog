import React from "react";

import "./BasketContent.scss";

const BasketContent = () => {
  return (
    <section className="basketContent">
      <div className="container">
        <div className="basketContent__wrapper">
          <div className="basketContent__product">
            <div className="basketContent__text">
              <span className="text">Товар</span>
              <span className="text">К-во</span>
            </div>
            {/* <div className="basketContent__item item">
                            <div className="item__card">
                                <img src={base.card[0].img} alt="img" className="item__img" />
                                <div className="item__text">
                                    <h3 className="item__title">{base.card[0].title}</h3>
                                    <span className="item__description">{base.card[0].descr}</span>
                                    <span className="item__prise">{base.card[0].price}</span>
                                    <button className="item__remove">Удалить</button>
                                </div>
                            </div>
                            <div className="item__counter">
                                <span className="item__number">{count}</span>
                                <div className="items__btns">
                                    <button onClick={increment} className="item__btn item__incr">&gt;</button>
                                    <button onClick={decrement} className="item__btn item__decr">&lt;</button>
                                </div>
                            </div>
                        </div> */}
          </div>
          <div className="basketContent__makeOrder makeOrder">
            <h2 className="makeOrder__title">Оформление заказа</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasketContent;
