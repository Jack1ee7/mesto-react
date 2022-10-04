import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import React from "react";
import ImagePopup from "./ImagePopup";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddCardPopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({
      name: card.name,
      link: card.link,
    });
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name={"edit"}
        title={"Редактировать профиль"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <form
          className="popup__form popup__form_type_edit"
          name="editProfile"
          noValidate
        >
          <div className="popup__field">
            <input
              className="popup__input"
              type="text"
              name="name"
              id="name"
              placeholder="Имя"
              required
              minLength="2"
              maxLength="40"
            />
            <span className="popup__error" id="name-error"></span>
          </div>
          <div className="popup__field">
            <input
              className="popup__input"
              type="text"
              name="about"
              id="occupation"
              placeholder="Подпись"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="popup__error" id="occupation-error"></span>
          </div>
          <button
            className="popup__form-submit-button"
            type="submit"
            id="#popupEditSubmit"
          >
            Сохранить
          </button>
        </form>
      </PopupWithForm>
      <PopupWithForm
        name={"avatar"}
        title={"Обновить аватар"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <form
          className="popup__form popup__form_type_avatar"
          name="editAvatar"
          noValidate
        >
          <div className="popup__field">
            <input
              className="popup__input"
              type="url"
              name="avatar"
              id="avatar"
              placeholder="Ссылка на аватар"
              required
            />
            <span className="popup__error" id="avatar-error"></span>
          </div>
          <button
            className="popup__form-submit-button"
            type="submit"
            id="#popupAvatarSubmit"
          >
            Сохранить
          </button>
        </form>
      </PopupWithForm>
      <PopupWithForm
        name={"add"}
        title={"Новое место"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <form
          className="popup__form popup__form_type_add"
          name="addProfile"
          noValidate
        >
          <div className="popup__field">
            <input
              className="popup__input"
              type="text"
              name="name"
              id="title"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="popup__error" id="title-error"></span>
          </div>
          <div className="popup__field">
            <input
              className="popup__input"
              type="url"
              name="link"
              id="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__error" id="link-error"></span>
          </div>
          <button
            className="popup__form-submit-button"
            type="submit"
            id="#popupAddSubmit"
          >
            Создать
          </button>
        </form>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
