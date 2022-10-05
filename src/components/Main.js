import { useState, useEffect } from "react";
import avatarEditIcon from "../images/avatar-edit-icon.svg";
import Card from "./Card";
import api from "../utils/Api";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCard] = useState([]);

  //get data from server
  useEffect(() => {
    api
      .getAllData()
      .then(([userData, cardList]) => {
        //profile
        setUserName(userData.name);
        setUserAvatar(userData.avatar);
        setUserDescription(userData.about);
        //cards
        cardList.reverse();
        setCard(cardList);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img
              src={userAvatar}
              alt="Аватар профиля"
              className="profile__avatar"
              onClick={onEditAvatar}
            />
            <img
              src={avatarEditIcon}
              alt="Редактировать"
              className="profile__avatar-edit-ico"
            />
          </div>
          <div className="profile__info-text">
            <h1 className="profile__name">{`${userName}`}</h1>
            <p className="profile__occupation">{`${userDescription}`}</p>
            <button
              className="profile__edit-button"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="pictures">
        <ul className="pictures__grid">
          {cards.map((card) => (
            <Card key={card._id} onCardClick={onCardClick} card={card} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
