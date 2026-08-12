import { closeRegistrationModal } from "./modal.js";

let user = null;

export const handleSubscribeFormSubmit = event => {
	event.preventDefault();

	const form = event.target;

	if (!form.checkValidity()) {
		form.reportValidity();

		return;
	}

	const formData = new FormData(form);
	const subscribeData = Object.fromEntries(formData.entries());

	console.log(subscribeData);
	form.reset();
};

export const handleRegistrationFormSubmit = event => {
	event.preventDefault();

	const form = event.target;
	const formData = new FormData(form);
	const registrationData = Object.fromEntries(formData.entries());
	const password = registrationData.password;
	const passwordRepeat = registrationData.passwordRepeat;

	if (!form.checkValidity()) {
		alert("Регистрация отклонена. Заполните все поля правильно.");
		form.reportValidity();

		return;
	}

	if (password !== passwordRepeat) {
		alert("Регистрация отклонена. Пароли должны совпадать.");

		return;
	}

	user = {
		...registrationData,
		createdOn: new Date()
	};

	console.log(user);
	closeRegistrationModal();
	form.reset();
};
