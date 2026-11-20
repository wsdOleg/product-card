//Абстрактный класс с общими стилями, приватной температурой и методы приготовления 
export default class Drink {
	#temperature;

	constructor(name, size, price) {
		this.name = name;
		this.size = size;
		this.price = price;
		this.#temperature = 20;
	}

	getInfo() {
		return `Название: ${this.name}, Размер: ${this.size}, Цена: ${this.price} ₽, Изначальная температура: ${this.#temperature} °C`;
	}
	
	getTemperature() {
		return this.#temperature;
	}

	setTemperature(newTemperature) {
		this.#temperature = newTemperature;
	}

	#prepareDrink() {
		console.log(`Готовим напиток: ${this.name}`);

		this.setTemperature(this.getServingTemperature());

		console.log(`Температура напитка: ${this.getTemperature()} °C`);
	}

	serveDrink() {
		this.#prepareDrink();

		console.log(`Напиток: ${this.name} готов к подаче!`);
	}

	getServingTemperature(){
		return 20;
	}
}
