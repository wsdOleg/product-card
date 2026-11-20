//Наследование от Drink, сорт чая
import Drink from './Drink.js'

export class Tea extends Drink {
	constructor(name, size, price, cultivar) {
		super(name, size, price);
		this.cultivar = cultivar;
	}

	getInfo() {
		const teaInfo = super.getInfo();

		return `${teaInfo}, Сорт чая: ${this.cultivar}`;
	}

	getServingTemperature() {
		return 90;
	}

	brewTea(){
		console.log(`Завариваем чай сорта: ${this.cultivar}`);
	}

	serveDrink() {
		this.brewTea();

		super.serveDrink();
	}
}