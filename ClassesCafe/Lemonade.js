//Наследование от Drink, вкус лимонада
import Drink from './Drink.js'

export class Lemonade extends Drink {
	constructor(name, size, price, ingredients) {
		super(name, size, price);
		this.ingredients = ingredients;
	}

	getInfo() {
		const lemonadeInfo = super.getInfo();
		return `${lemonadeInfo}, Ингредиенты: ${this.ingredients}`;
	}

	mixIngredients() {
		console.log(`Смешиваем ингредиенты: ${this.ingredients}`);
	}

	addIce() {
		console.log(`Добавляем лёд в ${this.name}`);
	}

	getServingTemperature() {
		return 9;
	}

	serveDrink() {
		this.mixIngredients();
		this.addIce();

		super.serveDrink();
	}

}