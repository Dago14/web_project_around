export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._image = data.link;
    this._alt = data.name;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._paragraph = this._element.querySelector(".elements__paragraph");
    this._imagename = this._element.querySelector(".elements__image");

    this._buttonlike = this._element.querySelector("#likebutton");
    this._buttontrash = this._element.querySelector("#button-trash");

    this._paragraph.textContent = this._name;
    this._imagename.src = this._image;
    this._imagename.alt = this._name;

    this._setEventListeners();

    return this._element;
  }

  _Trash(evt) {
    evt.target.closest(".elements__element").remove();
  }

  _LikeToggle() {
    if (this._buttonlike.classList.contains("elements__heart_hover")) {
      this._buttonlike.classList.remove("elements__heart_hover");
    } else {
      this._buttonlike.classList.add("elements__heart_hover");
    }
    this._buttonlike.classList.toggle("elements__heart_like");
  }

  _setEventListeners() {
    this._buttonlike.addEventListener("click", () => {
      this._LikeToggle();
    });

    this._buttontrash.addEventListener("click", (evt) => {
      this._Trash(evt);
    });
  }
}
