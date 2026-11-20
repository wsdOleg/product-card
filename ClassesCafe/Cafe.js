//будет принимать 2 параметра, например название кафе и его месторасположение
export class Cafe {
	constructor(name, location) {
		this.name = name;
		this.location = location;
	}

	showCafeInfo() {
		console.log(`Название кафе: ${this.name}, Локация: ${this.location}`);
	}

	orderDrink(drink) {
		drink.serveDrink();
	}
}