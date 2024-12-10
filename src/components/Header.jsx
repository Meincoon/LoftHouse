import { useState } from 'react';
import logo from '/logo.svg';
import scrollIcon from '@/assets/img/header/mouse.svg';

function Header() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive((prevState) => {
      const newState = !prevState;
      document.body.classList.toggle('no-scroll', newState); // Обновляем класс после изменения состояния
      return newState;
    });
  };

  return (
    <header className="header">
      <div className={`header__top ${isNavActive ? 'header__top-row--mobile' : ''}`}>
        <div className="container">
          <div className="header__top-row">

          {!isNavActive && (
            <a href="#!">
              <img src={logo} alt="LoftHouse" />
            </a>
          )}
          
            <div className="header__nav">
              <nav className="nav">
                <ul className="nav__list">
                  <li><a href="#!">О комплексе</a></li>
                  <li><a href="#!">Район</a></li>
                  <li><a href="#!">Каталог квартир</a></li>
                  <li><a href="#!">Ипотека</a></li>
                  <li><a href="#!">Контакты</a></li>
                </ul>
              </nav>
            </div>

            <div className="header__nav-btn">
              <button 
                className="nav-icon-btn" 
                onClick={toggleNav}
              >
                <div className={`nav-icon ${isNavActive ? 'nav-icon--active' : ''}`}></div>
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="header__title">
          Жилой комплекс <br />
          в историческом центре
          <a href="#benefits">
            <img
              src={scrollIcon}
              alt="Scroll next"
              className="header__title-icon"
            />
          </a>
        </h1>
      </div>

      <div className="header__footer">
        <div className="text-right">
          <a href="#section-map" className="info info--map">Наб. реки Фонтанки 10-15</a>
        </div>
        <a href="tel:+78121234567" className="info info--tel">8 (812) 123-45-67</a>
      </div>
    </header>
  );
}

export default Header;
