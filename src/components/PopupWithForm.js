function PopupWithForm({name, title, isOpen, onClose, children}) {
    return (
        <section className={`popup popup_type_${name} ${isOpen ? "popup_status_opened" : ""}`} id="#popupEdit">
            <div className="overlay" onClick={onClose}></div>
            <div className="popup__container">
                <button className="popup__close-button" type="reset" id="#" onClick={onClose}></button>
                <h2 className="popup__form-title">{title}</h2>
                {children}
            </div>
        </section>
    )
}
export default PopupWithForm;