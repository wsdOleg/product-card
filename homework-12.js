import { Form } from "./Form.js"
import { Modal } from "./Modal.js"

const registrationModal = new Modal("registration-modal");
const subscribeForm = new Form("subscribe-form");
const registrationForm = new Form("registration-form");

let user = null;

const handleSubscribeFormSubmit = event => {
	event.preventDefault();

	if (!subscribeForm.isFormValid()) {
		subscribeForm.form.reportValidity();

		return;
	}

	console.log(subscribeForm.getFormValues());
	subscribeForm.resetForm();
};

const handleRegistrationFormSubmit = event => {
	event.preventDefault();

	if (!registrationForm.isFormValid()) {
		alert("Регистрация отклонена. Заполните все поля правильно.");
		registrationForm.form.reportValidity();

		return;
	}

	const registrationData = registrationForm.getFormValues();

	if (registrationData.password !== registrationData.passwordRepeat) {
		alert("Регистрация отклонена. Пароли должны совпадать.");

		return;
	}

	user = {
		...registrationData,
		createdOn: new Date()
	};

	console.log(user);
	registrationModal.closeModal();
	registrationForm.resetForm();
};

subscribeForm.form.addEventListener("submit", handleSubscribeFormSubmit);
registrationForm.form.addEventListener("submit", handleRegistrationFormSubmit);

document
	.querySelector(".page-footer__registration-button")
	.addEventListener("click", () => {
		registrationModal.openModal();
	});

