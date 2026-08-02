import { products } from "./products.js"

const productCardContainer = document.querySelector(".product-card-container");
const productCardTemplate = document.getElementById("product-card-template");

const getFormattedPrice = (price, currency) => {
	return new Intl.NumberFormat("ru-RU", {
		style: "currency",
		currency,
		maximumFractionDigits: 0
	}).format(price);
};

const getProductCardsCount = () => {
	const answer = prompt("Сколько карточек отобразить? От 1 до 5");

	if (answer === null) {
		return products.length;
	}

	const cardsCount = Number(answer);

	if (
		!Number.isInteger(cardsCount) ||
		cardsCount < 1 ||
		cardsCount > products.length
	) {
		alert("Введите целое число от 1 до 5");

		return getProductCardsCount();
	}

	return cardsCount;
};

const renderProductCards = productsList => {
	productCardContainer.innerHTML = "";

	productsList.forEach(product => {
		const productCardClone = productCardTemplate.content.cloneNode(true);
		const productImage = productCardClone.querySelector(".product-card__image");
		const ingredientsList = productCardClone.querySelector(
			".product-card__ingredients"
		);

		productImage.src = product.imageUrl;
		productImage.alt = product.name;
		productCardClone.querySelector(".product-card__type").textContent =
			`Тип кожи: ${product.skinType}`;
		productCardClone.querySelector(".product-card__title").textContent =
			product.name;
		productCardClone.querySelector(".product-card__description").textContent =
			product.description;
		productCardClone.querySelector(".product-card__price-value").textContent =
			getFormattedPrice(product.price, product.currency);

		product.ingredients.forEach(ingredient => {
			const ingredientItem = document.createElement("li");

			ingredientItem.textContent = ingredient;
			ingredientsList.append(ingredientItem);
		});

		productCardContainer.append(productCardClone);
	});
};

const productCardsCount = getProductCardsCount();
const displayedProducts = products.slice(0, productCardsCount);

renderProductCards(displayedProducts);

const getProductDescriptions = productsList => {
	return productsList.reduce((productDescriptions, product) => {
		productDescriptions.push({
			[product.name]: product.description
		});

		return productDescriptions;
	}, []);
};

console.log(getProductDescriptions(products));
