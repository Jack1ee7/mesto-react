import PopupWithForm from "./PopupWithForm";

function PopupAddCard({ isOpen }) {
    return (
        <PopupWithForm name="add" title="Новое место" isOpen={isOpen}>
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
    )
}

export default PopupAddCard;