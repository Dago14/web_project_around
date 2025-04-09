let content = document.querySelector(".content");
let buttonedit = content.querySelector("#button-edit");
let popup = content.querySelector(".popup");
let buttonclose = content.querySelector("#button-close");
let buttonsave = content.querySelector("#button-save");
let elements = content.querySelector(".elements");
let template = content.querySelector("#template");

//Botones del popup agregar
let buttonadd = content.querySelector("#button-add");
let popupadd = content.querySelector(".popup-add");
let buttoncloseadd = content.querySelector("#button-add-close");

//Logica para agg las nuevas cartas
let buttonsaveadd = content.querySelector("#button-addinfo");

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
  addcard(dato);
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
    alter.textContent = dato.name;
  });

  let button_close_image = document.querySelector("#button-image-close");

  button_close_image.addEventListener("click", () => {
    popup_image.classList.add("popup-image_opened");
  });
}

// Value

let ValueName = content.querySelector("#name");
let ValueInfo = content.querySelector("#info");
//text
let TextName = content.querySelector(".profile__name");
let TextInfo = content.querySelector(".profile__hobbies");

//eventos
buttonedit.addEventListener("click", () => {
  ValueName.value = TextName.textContent;
  ValueInfo.value = TextInfo.textContent;
  popup.classList.remove("popup_opened");
});

buttonsaveadd.addEventListener("click", (evt) => {
  evt.preventDefault(); // quita el actualizar
  const titlevalue = document.querySelector("#title");
  const urlvalue = document.querySelector("#url");

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
  }
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

buttonadd.addEventListener("click", () => {
  popupadd.classList.remove("popup-add_opened");
});

buttoncloseadd.addEventListener("click", () => {
  popupadd.classList.add("popup-add_opened");
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
