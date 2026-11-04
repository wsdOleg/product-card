export class BeautyProduct {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	getProductInfo() {
		return `${this.name} — ${this.price} ₽`;
	}
}

export class FaceCream extends BeautyProduct {
	constructor(name, price, skinType) {
		super(name, price);
		this.skinType = skinType;
	}

	getSkinType() {
		return this.skinType;
	}
}

const beautyProduct = new BeautyProduct("Гель для умывания", 699);
const faceCream = new FaceCream("Крем для лица", 950, "сухая");

console.log(beautyProduct.getProductInfo());
console.log(faceCream.getProductInfo()); 
console.log(faceCream.getSkinType()); 
