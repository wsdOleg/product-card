//Наследование от Drink, тип зёрен и вид молока
import Drink from './Drink.js'

export class Coffee extends Drink {
	constructor(name, size, price, grainType, milkType) {
		super(name, size, price);
		this.grainType = grainType;
		this.milkType = milkType;
	}

	getInfo() {
		const coffeeInfo = super.getInfo();
		return `${coffeeInfo}, Тип зерен: ${this.grainType}, Тип молока: ${this.milkType}`;
	}

	getServingTemperature() {
		return 90;
	}

	grindBeans() {
		console.log(`Перемалываем кофейные зёрна: ${this.grainType}`);
	}

	addMilk() {
		console.log(`Добавляем молоко: ${this.milkType}`);
	}

	serveDrink() {
		this.grindBeans();
		this.addMilk();

		super.serveDrink();
	}
}


