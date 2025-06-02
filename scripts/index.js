import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

import {
  content,
  buttonedit,
  popup,
  buttonclose,
  buttonsave,
  elements,
  buttonadd,
  popupadd,
  buttoncloseadd,
  buttonsaveadd,
  datos,
} from "./utils.js";

const popups = () => {
  let popupcloses = document.querySelectorAll(".popup-add");
  let popupclose_image = document.querySelector(".popup-image");

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      popupcloses.forEach((popupclose) => {
        popupclose.classList.add("popup-add_opened");
      });
      popupclose_image.classList.add("popup-image_opened");
    }
  });

  const allPopups = document.querySelectorAll(".popup-add, .popup-image");

  allPopups.forEach((pop) => {
    pop.addEventListener("mousedown", (evt) => {
      if (evt.target === pop) {
        if (pop.classList.contains("popup-add")) {
          pop.classList.add("popup-add_opened");
        }
        if (pop.classList.contains("popup-image")) {
          pop.classList.add("popup-image_opened");
        }
      }
    });
  });
};

popups();
const validarProfile = new FormValidator("#edit-profile");
validarProfile.enableValidation();

const validarPlace = new FormValidator("#edit-place");
validarPlace.enableValidation();

datos.forEach((dato) => {
  let elementscard = new Card(dato, "#template");
  elements.prepend(elementscard.generateCard());
});

function addcard(dato) {
  let clon = template.content.cloneNode(true);
  let paragraph = clon.querySelector(".elements__paragraph");
  let image = clon.querySelector(".elements__image");
  let alt = clon.querySelector(".elements__image");
  let buttonlike = clon.querySelector("#likebutton");
  let buttontrash = clon.querySelector("#button-trash");

  paragraph.textContent = dato.name;
  image.src = dato.link;
  alt.alt = dato.name;
  elements.prepend(clon); // agrega a todos

  buttonlike.addEventListener("click", () => {
    if (buttonlike.classList.contains("elements__heart_hover")) {
      buttonlike.classList.remove("elements__heart_hover");
    } else {
      buttonlike.classList.add("elements__heart_hover");
    }
    buttonlike.classList.toggle("elements__heart_like");
  });

  buttontrash.addEventListener("click", (evt) => {
    evt.target.closest(".elements__element").remove();
  });

  let popup_image = document.querySelector(".popup-image");
  let text = document.querySelector(".popup-image__name");
  let url = document.querySelector(".popup-image__image");
  let alter = document.querySelector(".popup-image__image");

  image.addEventListener("click", () => {
    popup_image.classList.toggle("popup-image_opened");
    text.textContent = dato.name;
    url.src = dato.link;
    alter.alt = dato.name;
  });

  let button_close_image = document.querySelector("#button-image-close");

  button_close_image.addEventListener("click", () => {
    popup_image.classList.add("popup-image_opened");
  });
}
// Value

//text
let TextName = content.querySelector(".profile__name");
let TextInfo = content.querySelector(".profile__hobbies");

//eventos
buttonedit.addEventListener("click", () => {
  let ValueName = content.querySelector("#profile-name");
  let ValueInfo = content.querySelector("#profile-info");

  ValueInfo.value = TextInfo.textContent;
  ValueName.value = TextName.textContent;
  popup.classList.remove("popup-add_opened"); //cambiar
});

buttonsaveadd.addEventListener("click", (evt) => {
  // quita el actualizar
  evt.preventDefault();
  const titlevalue = document.querySelector("#profile-title");
  const urlvalue = document.querySelector("#profile-url");

  if (titlevalue.value !== "" && urlvalue.value !== "") {
    let name = titlevalue.value;
    let link = urlvalue.value;
    /*
dato = {name: titlevalue.value , link: urlvalue.value}
*/
    addcard({ name, link }); //Construccion
    titlevalue.value = "";
    urlvalue.value = "";
    popupadd.classList.add("popup-add_opened");
    buttonsaveadd.classList.add("popup-add__save_disabled");
  }
});

buttonclose.addEventListener("click", () => {
  popup.classList.add("popup-add_opened");
  ValueInfo.value = "";
  ValueName.value = "";
  resetValidation();
});

buttonsave.addEventListener("click", (evt) => {
  evt.preventDefault();
  let ValueName = content.querySelector("#profile-name");
  let ValueInfo = content.querySelector("#profile-info");
  let nameValue = ValueName.value.trim();
  let infoValue = ValueInfo.value.trim();

  if (nameValue != "" && infoValue != "") {
    TextName.textContent = nameValue;
    TextInfo.textContent = infoValue;
    popup.classList.add("popup-add_opened");
  }
});

buttonadd.addEventListener("click", () => {
  popupadd.classList.remove("popup-add_opened");
});

buttoncloseadd.addEventListener("click", () => {
  popupadd.classList.add("popup-add_opened");
  const titlevalue = document.querySelector("#profile-title");
  const urlvalue = document.querySelector("#profile-url");
  titlevalue.value = "";
  urlvalue.value = "";
});
