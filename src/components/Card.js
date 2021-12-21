function Card({ onCardClick, card }) {
    function handleCardClick() {
        onCardClick(card)
    }
  return (
    <li className="pictures__item">
      <img src={card.link} alt={card.name} className="pictures__image" onClick={handleCardClick}/>
      <button className="pictures__delete-button" type="button"></button>
      <div className="pictures__title-container">
        <h3 className="pictures__title">{card.name}</h3>
        <div className="pictures__like-container">
          <button className="pictures__like-button"></button>
          <p className="pictures__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
export default Card;
