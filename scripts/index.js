let content = document.querySelector(".content");
let buttonedit = content.querySelector("#button-edit");
let popup = content.querySelector(".popup");
let buttonclose = content.querySelector("#button-close");
let buttonsave = content.querySelector("#button-save");

// Value

let ValueName = content.querySelector("#name");
let ValueInfo = content.querySelector("#info");
//text
let TextName = content.querySelector(".profile__name");
let TextInfo = content.querySelector(".profile__hobbies");

buttonedit.addEventListener("click", () => {
  ValueName.value = TextName.textContent;
  ValueInfo.value = TextInfo.textContent;
  popup.classList.remove("popup_opened");
});

buttonclose.addEventListener("click", () => {
  popup.classList.add("popup_opened");
});

buttonsave.addEventListener("click", () => {
  let nameValue = ValueName.value.trim();
  let infoValue = ValueInfo.value.trim();

  if (nameValue != "" && infoValue != "") {
    TextName.textContent = nameValue;
    TextInfo.textContent = infoValue;
    popup.classList.add("popup_opened");
  } else {
    popup.classList.remove("popup__disabled");
  }
});

ValueName.addEventListener("input", checkInputs);
ValueInfo.addEventListener("input", checkInputs);

function checkInputs() {
  let nameValue = ValueName.value.trim();
  let infoValue = ValueInfo.value.trim();

  if (nameValue === "" || infoValue === "") {
    buttonsave.classList.add("popup__disabled");
    buttonsave.disabled = true; // Deshabilitar botón
  } else {
    buttonsave.classList.remove("popup__disabled");
    buttonsave.disabled = false; // Habilitar botón
  }
}
