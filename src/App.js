import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import PopupWithForm from "./components/PopupWithForm";
import React from "react";
import PopupEditProfile from "./components/PopupEditProfile";
import PopupAddCard from "./components/PopupAddCard";
import PopupEditAvatar from "./components/PopupEditAvatar";
import api from "./utils/Api";
import Card from "./components/Card";
import ImagePopup from "./components/ImagePopup";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name:'', link:''});
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
    setSelectedCard({name:'', link:''});
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
        const data = userData;
        setUserName(data.name);
        setUserAvatar(data.avatar);
        setUserDescription(data.about);

        // userInfo.setUserInfo(userData);
        // userInfo.setUserAvatar(userData);
        cardList.reverse();
        setCard(cardList);
        console.log(cardList);
        // cardsSection.renderCard(cardList);
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
      <PopupEditProfile
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupAddCard isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <PopupEditAvatar
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <ImagePopup 
      card={selectedCard}
      onClose={closeAllPopups} 
      />
    </div>
  );
}

export default App;
