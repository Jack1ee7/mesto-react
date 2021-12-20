import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import PopupWithForm from "./components/PopupWithForm";
import React from "react";
import api from "./utils/Api";
import ImagePopup from "./components/ImagePopup";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });
  const [userName, setUserName] = React.useState({});
  const [userDescription, setUserDescription] = React.useState({});
  const [userAvatar, setUserAvatar] = React.useState({});
  const [cards, setCard] = React.useState([]);

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
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  React.useEffect(() => {
    function handleCloseEsc(event) {
      if (event.key === "Escape") {
        closeAllPopups();
      }
    }
    document.addEventListener("keydown", handleCloseEsc);
    return () => {
      document.removeEventListener("keydown", handleCloseEsc);
    };
  }, []);

  //get data from server
  React.useEffect(() => {
    api
      .getAllData()
      .then(([userData, cardList]) => {
        //profile
        const data = userData;
        setUserName(data.name);
        setUserAvatar(data.avatar);
        setUserDescription(data.about);
        //cards
        cardList.reverse();
        setCard(cardList);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }, []);

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        userAvatar={userAvatar}
        userName={userName}
        userDescription={userDescription}
        cards={cards}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm 
        name={'edit'}
        title={'Редактировать профиль'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
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
      </PopupWithForm>
      <PopupWithForm 
        name={'avatar'}
        title={'Обновить аватар'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <form className="popup__form popup__form_type_avatar" name="editAvatar" noValidate>
          <div className="popup__field">
            <input className="popup__input" type="url" name="avatar" id="avatar" placeholder="Ссылка на аватар" required />
            <span className="popup__error" id="avatar-error"></span>
          </div>
          <button className="popup__form-submit-button" type="submit" id="#popupAvatarSubmit">Сохранить</button>
        </form>
      </PopupWithForm>
      <PopupWithForm 
        name={'add'}
        title={'Новое место'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
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
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
