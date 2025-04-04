let content = document.querySelector(".content");
let buttonedit = content.querySelector("#button-edit");
let popup = content.querySelector(".popup");
let buttonclose = content.querySelector("#button-close");
let buttonsave = content.querySelector("#button-save");
let elements = content.querySelector(".elements");
let template = content.querySelector("#template");

const datos = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

datos.forEach((dato) => {
  let clon = template.content.cloneNode(true);
  let paragraph = clon.querySelector(".elements__paragraph");
  let image = clon.querySelector(".elements__image");
  let alt = clon.querySelector(".elements__image");

  paragraph.textContent = dato.name;
  image.src = dato.link;
  alt.alt = dato.name;

  elements.appendChild(clon);
});

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
