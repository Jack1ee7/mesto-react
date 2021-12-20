export const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__form-submit-button",
  inactiveButtonClass: "popup__form-submit-button_disabled",
  inputErrorClass: "popup__error",
  errorClass: "popup__error_status_visible",
};

const container = document.querySelector(".page");
export const pictureTemplate = ("#pictureCard"); //Card template
export const picturesContainer = (".pictures__grid");
export const picturePopup = ('.popup_type_picture');
export const formEdit = container.querySelector(".popup__form_type_edit");
export const inputEditName = document.getElementById("name");
export const inputEditOccupation = document.getElementById("occupation");
export const formAdd = container.querySelector('.popup__form_type_add');
export const formAvatar = container.querySelector('.popup__form_type_avatar');
export const profileName = (".profile__name");
export const profileNameElement = container.querySelector(".profile__name");
export const profileOccupation = (".profile__occupation");
export const profileAvatar = (".profile__avatar");
export const editButton = container.querySelector(".profile__edit-button");
export const addButton = container.querySelector(".profile__add-button");
export const avatarButton = container.querySelector(".profile__avatar");

export const popupAvatarSubmitButton = document.getElementById("#popupAvatarSubmit");
export const popupDeleteSubmitButton = document.getElementById("#popupDeleteSubmit");
export const popupAddSubmitButton = document.getElementById("#popupAddSubmit");
export const popupEditSubmitButton = document.getElementById("#popupEditSubmit");


// export const initialCards = [
//   {
//     Title: "Архыз",
//     Link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
//   },
//   {
//     Title: "Челябинская область",
//     Link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
//   },
//   {
//     Title: "Иваново",
//     Link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
//   },
//   {
//     Title: "Камчатка",
//     Link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
//   },
//   {
//     Title: "Холмогорский район",
//     Link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
//   },
//   {
//     Title: "Байкал",
//     Link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//   },
// ];

