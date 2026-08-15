export const openRegistrationModal = () => {
	document.querySelector(".overlay").classList.add("overlay-showed");
	document.querySelector(".modal").classList.add("modal-showed");
};

export const closeRegistrationModal = () => {
	document.querySelector(".overlay").classList.remove("overlay-showed");
	document.querySelector(".modal").classList.remove("modal-showed");
};
