import { handleRegistrationFormSubmit, handleSubscribeFormSubmit } from "./form.js"
import { closeRegistrationModal, openRegistrationModal } from "./modal.js"

document
	.querySelector(".page-footer__form")
	.addEventListener("submit", handleSubscribeFormSubmit);

document
	.querySelector(".page-footer__registration-button")
	.addEventListener("click", openRegistrationModal);

document
	.querySelector(".modal__close-button")
	.addEventListener("click", closeRegistrationModal);

document
	.querySelector(".registration-form")
	.addEventListener("submit", handleRegistrationFormSubmit);
