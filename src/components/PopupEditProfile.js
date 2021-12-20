import PopupWithForm from "./PopupWithForm";

function PopupEditProfile({isOpen, onClose}) {
    return (
        <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isOpen} onClose={onClose}>
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
    )
}

export default PopupEditProfile;