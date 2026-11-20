// переменные кафе с напитками и затем делаем заказ
import { Cafe } from './ClassesCafe/Cafe.js'
import { Coffee } from './ClassesCafe/Coffee.js'
import { Lemonade } from './ClassesCafe/Lemonade.js'
import { Tea } from './ClassesCafe/Tea.js'

const cafe = new Cafe ("Garden Coffee", "Тюмень");

const coffee = new Coffee(
	"Капучино",
	280,
	130,
	"Арабика",
	"Молоко"
);

const lemonade = new Lemonade(
	"Мохито",
	320,
	230,
	"мята, спрайт, лайм"
);

const tea = new Tea(
	"Зеленый чай",
	250,
	120,
	"Зверобой"
);

cafe.showCafeInfo();

console.log(coffee.getInfo());
console.log(lemonade.getInfo());
console.log(tea.getInfo());

cafe.orderDrink(coffee);
cafe.orderDrink(lemonade);
cafe.orderDrink(tea);