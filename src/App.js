import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body className="page">
  <header className="header">
    <img src="./images/logo.svg" alt="Логотип Место" className="header__logo"/>
  </header>
  <main className="content">
    <section className="profile">
      <div className="profile__info">
        <div className="profile__avatar-container">
          <img src="./images/avatar.jpg" alt="Аватар профиля" className="profile__avatar"/>
          <img src="./images/avatar-edit-icon.svg" alt="Редактировать" className="profile__avatar-edit-ico"/>
        </div>
        <div className="profile__info-text">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <p className="profile__occupation">Исследователь океана</p>
          <button className="profile__edit-button" type="button"></button>
        </div>

      </div>
      <button className="profile__add-button" type="button"></button>
    </section>
    <section className="pictures">
      <ul className="pictures__grid">

      </ul>
    </section>
  </main>

  <footer className="footer">
    <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
  </footer>
  <section className="popup popup_type_edit" id="#popupEdit">
    <div className="overlay"></div>
    <div className="popup__container">
      <button className="popup__close-button" type="reset" id="#"></button>
      <h2 className="popup__form-title">Редактировать профиль</h2>
      <form className="popup__form popup__form_type_edit" name="editProfile" novalidate>
        <div className="popup__field">
          <input className="popup__input" type="text" name="name" id="name" placeholder="Имя" required minlength="2" maxlength="40"/>
          <span className="popup__error" id="name-error"></span>
        </div>
        <div className="popup__field">
          <input className="popup__input" type="text" name="about" id="occupation" placeholder="Подпись" required minlength="2" maxlength="200"/>
          <span className="popup__error" id="occupation-error"></span>
        </div>
        <button className="popup__form-submit-button" type="submit" id="#popupEditSubmit">Сохранить</button>
      </form>
    </div>
  </section>
  <section className="popup popup_type_add" id="#popupAdd">
    <div className="overlay"></div>
    <div className="popup__container">
      <button className="popup__close-button" type="reset"></button>
      <h2 className="popup__form-title">Новое место</h2>
      <form className="popup__form popup__form_type_add" name="addProfile" novalidate>
        <div className="popup__field">
          <input className="popup__input" type="text" name="name" id="title" placeholder="Название" required minlength="2" maxlength="30"/>
          <span className="popup__error" id="title-error"></span>
        </div>
        <div className="popup__field">
          <input className="popup__input" type="url" name="link" id="link" placeholder="Ссылка на картинку" required/>
          <span className="popup__error" id="link-error"></span>
        </div>
          <button className="popup__form-submit-button" type="submit" id="#popupAddSubmit">Создать</button>
      </form>
    </div>
  </section>
  <section className="popup popup_type_picture" id="popupPicture">
    <div className="overlay"></div>
    <div className="popup__picture-container">
      <button className="popup__close-button" type="reset"></button>
      <figure className="popup__pictire-figure">
        <img src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg" alt=""
          className="popup__picture"/>
        <figcaption className="popup__picture-caption">Подпись</figcaption>

      </figure>
    </div>
  </section>
  <section className="popup popup_type_avatar" id="#popupAvatar">
    <div className="overlay"></div>
    <div className="popup__container">
      <button className="popup__close-button" type="reset" id="#x"></button>
      <h2 className="popup__form-title">Обновить аватар</h2>
      <form className="popup__form popup__form_type_avatar" name="editAvatar" novalidate>
        <div className="popup__field">
          <input className="popup__input" type="url" name="avatar" id="avatar" placeholder="Ссылка на аватар" required/>
          <span className="popup__error" id="avatar-error"></span>
        </div>
        <button className="popup__form-submit-button" type="submit" id="#popupAvatarSubmit">Сохранить</button>
      </form>
    </div>
  </section>
  <section className="popup popup_type_delete" id="#popupDelete">
    <div className="overlay"></div>
    <div className="popup__container">
      <button className="popup__close-button" type="reset" id="#y"></button>
      <h2 className="popup__form-title">Вы уверены?</h2>
      <form className="popup__form popup__form_type_delete" name="deleteCard" novalidate>
        <button className="popup__form-submit-button" type="submit" id="#popupDeleteSubmit">Да</button>
      </form>
    </div>
  </section>
  <template id="pictureCard">
    <li className="pictures__item">
      <img src="?" alt="" className="pictures__image"/>
      <button className="pictures__delete-button" type="button"></button>
      <div className="pictures__title-container">
        <h3 className="pictures__title"></h3>
        <div className="pictures__like-container">
          <button className="pictures__like-button"></button>
          <p className="pictures__like-counter">0</p>
        </div>
      </div>
    </li>
  </template>
</body>
  );
}

export default App;
