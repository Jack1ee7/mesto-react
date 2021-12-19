import avatar from '../images/avatar.jpg'
import avatarEditIcon from '../images/avatar-edit-icon.svg'

function Main({handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick}) {

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__avatar-container">
                        <img src={avatar} alt="Аватар профиля" className="profile__avatar" onClick={handleEditAvatarClick} />
                        <img src={avatarEditIcon} alt="Редактировать" className="profile__avatar-edit-ico" />
                    </div>
                    <div className="profile__info-text">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <p className="profile__occupation">Исследователь океана</p>
                        <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
                    </div>

                </div>
                <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
            </section>
            <section className="pictures">
                <ul className="pictures__grid">

                </ul>
            </section>
        </main>
    )
}

export default Main;