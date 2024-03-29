function ImagePopup({ isOpen, card, onClose }) {
  return (
    <div
      className={`popup popup_type_picture ${
        isOpen ? "popup_status_opened" : ""
      }`}
      id="popupPicture"
    >
      <div className="overlay" onClick={onClose}></div>
      <div className="popup__picture-container">
        <button
          className="popup__close-button"
          type="reset"
          onClick={onClose}
        ></button>
        <figure className="popup__pictire-figure">
          <img src={card.link} alt={card.name} className="popup__picture" />
          <figcaption className="popup__picture-caption">
            {card.name}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
export default ImagePopup;
