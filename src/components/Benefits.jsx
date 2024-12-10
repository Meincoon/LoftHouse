import bench from'../assets/img/benefits/bench.svg';
import building from'../assets/img/benefits/building.svg';
import fountain from'../assets/img/benefits/fountain.svg';
import bicycle from'../assets/img/benefits/bicycle.svg';

function benefits() {

  return (
    <section className="benefits none1">
      <h2 className="visually-hidden">Преимущества ЖК</h2>
      <div className="container container--sm">
        <div className="benefits__row">
          <div className="benefits__item">
              <img src={bench} alt="" className="benefits__item-img" />
              <p className="benefits__item-text">Рядом исторические парки&nbsp;и&nbsp;скверы</p>
          </div>

          <div className="benefits__item">
              <img src={building} alt="" className="benefits__item-img" />
              <p className="benefits__item-text">Полностью обустроенный</p>
          </div>

          <div className="benefits__item">
              <img src={fountain} alt="" className="benefits__item-img" />
              <p className="benefits__item-text">10 фонтанов на территории</p>
          </div>

          <div className="benefits__item">
              <img src={bicycle} alt="" className="benefits__item-img" />
              <p className="benefits__item-text">6 км велодорожек</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default benefits
