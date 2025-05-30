export const content = document.querySelector(".content");
export const buttonedit = content.querySelector("#button-edit"); //quitar
export const popup = content.querySelector("#popup-add-profile"); // quitar
export const buttonclose = content.querySelector("#button-close");
export const buttonsave = content.querySelector("#button-save");
export const elements = content.querySelector(".elements");

//Botones del popup agregar
export const buttonadd = content.querySelector("#button-add");
export const popupadd = content.querySelector("#popup-add-place");
export const buttoncloseadd = content.querySelector("#button-add-close");

//Logica para agg las nuevas cartas
export const buttonsaveadd = content.querySelector("#button-addinfo");

export const datos = [
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
