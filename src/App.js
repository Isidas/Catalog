// Компонент для сборки итогового приложения
import React from 'react';
import Main from './component/Main/Main';

function App() {
  return (
    <div className="app">
      <Main/>
      {/* Тут будет компонент Каталога */}
      {/* Тут будет компонент Корзины */}
    </div>
  );
}

export default App;
