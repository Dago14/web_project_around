const resetValidation = () => {
  let popupforms = document.querySelectorAll(".popup-add__content");
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

  popupforms.forEach((popupform) => {
    let inputs = popupform.querySelectorAll(".popup-add__input");
    let submitButton = popupform.querySelector(".popup-add__save");

    const toggleButtonState = () => {
      const allValid = Array.from(inputs).every(
        (input) => input.validity.valid
      );
      submitButton.disabled = !allValid;
      if (allValid) {
        submitButton.classList.remove("popup-add__save_disabled");
      } else {
        submitButton.classList.add("popup-add__save_disabled");
      }
    };

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        let popuperror = popupform.querySelector("#" + input.id + "-error");
        console.log(input);

        if (!input.validity.valid) {
          popuperror.textContent = input.validationMessage;
        } else {
          popuperror.textContent = "";
        }

        toggleButtonState();
      });
    });
  });
};

export { resetValidation };
