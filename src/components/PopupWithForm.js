function PopupWithForm({name, title, isOpen, children}) {
    return (
        <section className={`popup popup_type_${name} ${isOpen ? "popup_status_opened" : ""}`} id="#popupEdit">
            <div className="overlay"></div>
            <div className="popup__container">
                <button className="popup__close-button" type="reset" id="#"></button>
                <h2 className="popup__form-title">{title}</h2>
                {children}
            </div>
        </section>
    )
}
export default PopupWithForm;