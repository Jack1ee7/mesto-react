// import avatar from '../images/avatar.jpg'
import avatarEditIcon from "../images/avatar-edit-icon.svg";
import Card from "./Card";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  userAvatar,
  userName,
  userDescription,
  cards,
  onCardClick,
  onClose
}) {
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
            <Card 
            key={card._id}
            onCardClick={onCardClick}
            card={card}
            onClose={onClose}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
