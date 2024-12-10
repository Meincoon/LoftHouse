import { useEffect } from 'react';
import { mask } from '@/utils/phoneMask';

function Feedback() {
  useEffect(() => {
    mask('[data-tel-input]');
  }, []);

  return (
    <section className="feedback none1">
      <div className="container">
        <div className="feedback__title">
          <h2 className="title-2">Есть вопросы?</h2>
        </div>
        <form className="feedback__form form">
          <p className="form__privacy form__privacy--bottom">
            *Мы никому не передаем ваши данные. <br />И не сохраняем ваш номер в базу.
          </p>
          <input type="text" className="form__input" placeholder="Ваше имя" />
          <input data-tel-input type="text" className="form__input" placeholder="Ваш телефон" />
          <button type="submit" className="form__btn">Посмотреть район</button>
        </form>
      </div>
    </section>
  );
}

export default Feedback;
