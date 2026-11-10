import { handleRegistrationFormSubmit, handleSubscribeFormSubmit } from "./homework-11/form.js"
import { closeRegistrationModal, openRegistrationModal } from "./homework-11/modal.js"

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
