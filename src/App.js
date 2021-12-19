import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupWithForm from './components/PopupWithForm';
import React from 'react';
import PopupEditProfile from './components/PopupEditProfile';
import PopupAddCard from './components/PopupAddCard';
import PopupEditAvatar from './components/PopupEditAvatar'
import Api from './components/Api';
import Card from './components/Card';
import ImagePopup from './components/ImagePopup';
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddCardPopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function closePopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddCardPopupOpen(false)
    setIsEditAvatarPopupOpen(false)
  }
  React.useEffect(() => {
    function handleCloseEsc(evt) {
      if (evt.key === "escape") {
        closePopups();
      }
    }
    document.addEventListener('keydown', handleCloseEsc);
    // return () => {
    //   document.removeEventListener('keydown', handleCloseEsc);
    // }
  }, [])
  return (
    <body className="page">
      <Header />
      <Main handleEditAvatarClick={handleEditAvatarClick} handleEditProfileClick={handleEditProfileClick} handleAddPlaceClick={handleAddPlaceClick}/>
      <Footer />
      <PopupEditProfile isOpen={isEditProfilePopupOpen} />
      <PopupAddCard isOpen={isAddCardPopupOpen} />
      <PopupEditAvatar isOpen={isEditAvatarPopupOpen} />
      {/* <section className="popup popup_type_edit" id="#popupEdit">
        <div className="overlay"></div>
        <div className="popup__container">
          <button className="popup__close-button" type="reset" id="#"></button>
          <h2 className="popup__form-title">Редактировать профиль</h2>
          <form className="popup__form popup__form_type_edit" name="editProfile" noValidate>
            <div className="popup__field">
              <input className="popup__input" type="text" name="name" id="name" placeholder="Имя" required minLength="2" maxLength="40" />
              <span className="popup__error" id="name-error"></span>
            </div>
            <div className="popup__field">
              <input className="popup__input" type="text" name="about" id="occupation" placeholder="Подпись" required minLength="2" maxLength="200" />
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
          <form className="popup__form popup__form_type_add" name="addProfile" noValidate>
            <div className="popup__field">
              <input className="popup__input" type="text" name="name" id="title" placeholder="Название" required minLength="2" maxLength="30" />
              <span className="popup__error" id="title-error"></span>
            </div>
            <div className="popup__field">
              <input className="popup__input" type="url" name="link" id="link" placeholder="Ссылка на картинку" required />
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
              className="popup__picture" />
            <figcaption className="popup__picture-caption">Подпись</figcaption>

          </figure>
        </div>
      </section>
      <section className="popup popup_type_avatar" id="#popupAvatar">
        <div className="overlay"></div>
        <div className="popup__container">
          <button className="popup__close-button" type="reset" id="#x"></button>
          <h2 className="popup__form-title">Обновить аватар</h2>
          <form className="popup__form popup__form_type_avatar" name="editAvatar" noValidate>
            <div className="popup__field">
              <input className="popup__input" type="url" name="avatar" id="avatar" placeholder="Ссылка на аватар" required />
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
          <form className="popup__form popup__form_type_delete" name="deleteCard" noValidate>
            <button className="popup__form-submit-button" type="submit" id="#popupDeleteSubmit">Да</button>
          </form>
        </div>
      </section> */}
      <template id="pictureCard">
        <li className="pictures__item">
          <img src="?" alt="" className="pictures__image" />
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
