export class Form {
	constructor(formId) {
		this.form = document.getElementById(formId);
	}

	getFormValues() {
		const formData = new FormData(this.form);

		return Object.fromEntries(formData.entries());
	}

	isFormValid() {
		return this.form.checkValidity();
	}

	resetForm() {
		this.form.reset();
	}
}
