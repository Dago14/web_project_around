export class FormValidator {
  constructor(formSelector) {
    this._popupForms = document.querySelectorAll(formSelector);
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    this._popupForms.forEach((form) => {
      const inputs = form.querySelectorAll(".popup-add__input");
      const submitButton = form.querySelector(".popup-add__save");

      inputs.forEach((input) => {
        input.addEventListener("input", () => {
          this._handleInput(input, form);
          this._toggleButtonState(inputs, submitButton);
        });
      });
    });
  }

  _handleInput(input, form) {
    const errorElement = form.querySelector(`#${input.id}-error`);

    if (!input.validity.valid) {
      errorElement.textContent = input.validationMessage;
    } else {
      errorElement.textContent = "";
    }
  }

  // Método privado: habilitar/deshabilitar botón
  _toggleButtonState(inputs, submitButton) {
    // todos los inputs, boton que debe desactivarse
    const allValid = Array.from(inputs).every((input) => input.validity.valid);
    //convierte en un array y verifica en cada input la validacion
    submitButton.disabled = !allValid; // si es diferente a allvalid
    if (allValid) {
      submitButton.classList.remove("popup-add__save_disabled");
    } else {
      submitButton.classList.add("popup-add__save_disabled");
    }
  }
}
