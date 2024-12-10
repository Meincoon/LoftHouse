import img1 from '../assets/img/cards/01.jpg';
import img2 from '../assets/img/cards/02.jpg';
import img3 from '../assets/img/cards/03.jpg';
import img4 from '../assets/img/cards/04.jpg';

function Apartments() {

  return (
    <section className="apartments none1">
      <div className="container">

          <div className="apartments__title">
              <h2 className="title-2">Наши квартиры</h2>
          </div>

          <div className="apartments__cards">

              <a href="#!" className="card">
                  <img className="card__img" src={img1} alt="Пентхаус “Loft Олимп”" />
                  <h3 className="card__title">Пентхаус “Loft Олимп”</h3>
              </a>

              <a href="#!" className="card">
                  <img className="card__img" src={img2} alt="Пентхаус “Loft Олимп”" />
                  <h3 className="card__title">Апартаменты “Nice Loft”</h3>
              </a>

              <a href="#!" className="card">
                  <img className="card__img" src={img3} alt="Пентхаус “Loft Олимп”" />
                  <h3 className="card__title">Апартаменты “Loft Studio”</h3>
              </a>

              <a href="#!" className="card">
                  <img className="card__img" src={img4} alt="Пентхаус “Loft Олимп”" />
                  <h3 className="card__title">Loft квартира “Престиж”</h3>
              </a>

            </div>
        </div>
    </section>
  )
}

export default Apartments
