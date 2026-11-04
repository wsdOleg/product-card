export class Modal {
	constructor(modalId) {
		this.modal = document.getElementById(modalId);
		this.overlay = document.querySelector(".overlay");
		this.handleCloseClick();
	}

	openModal() {
		this.overlay.classList.add("overlay-showed");
		this.modal.classList.add("modal-showed");
	}

	closeModal() {
		this.overlay.classList.remove("overlay-showed");
		this.modal.classList.remove("modal-showed");
	}

	isModalOpen() {
		return this.modal.classList.contains("modal-showed");
	}

	handleCloseClick() {
		const closeButton = this.modal.querySelector(".modal__close-button");

		closeButton.addEventListener("click", () => {
			this.closeModal();
		});
	}
}
