import PopupWithForm from "./PopupWithForm";

function PopupAddCard({ isOpen }) {
    return (
        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen}>
            <form className="popup__form popup__form_type_avatar" name="editAvatar" noValidate>
                <div className="popup__field">
                    <input className="popup__input" type="url" name="avatar" id="avatar" placeholder="Ссылка на аватар" required />
                    <span className="popup__error" id="avatar-error"></span>
                </div>
                <button className="popup__form-submit-button" type="submit" id="#popupAvatarSubmit">Сохранить</button>
            </form>
        </PopupWithForm>
    )
}

export default PopupAddCard;