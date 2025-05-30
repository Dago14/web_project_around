const resetValidation = () => {
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

  allPopups.forEach((popup) => {
    popup.addEventListener("mousedown", (evt) => {
      if (evt.target === popup) {
        if (popup.classList.contains("popup-add")) {
          popup.classList.add("popup-add_opened");
        }
        if (popup.classList.contains("popup-image")) {
          popup.classList.add("popup-image_opened");
        }
      }
    });
  });
};

export { resetValidation };
