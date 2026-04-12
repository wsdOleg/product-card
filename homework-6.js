//3 мои данные
const user = {
	name: "Олег",
	surname: "Орлов",
	email: "admin@mail.ru",
	job: "НКО",
	jobTitle: "PHP developer",
	age: 23,
	country: "Россия",
	city: "Тюмень",
	relationshipStatus: "не женат"
};

//4 данные автомобиля 
const car = {
  brand: "Honda",
  model: "Civic 8 4d",
  year: 2007,
	color: "темно-синий",
  transmission: "АКПП"
};

car.owner = user;

//5 проверка есть ли в объекте максимальная скорость
function addMaxSpeed(carObject) {
	if ("maxSpeed" in carObject) {
		return;
	}

	carObject.maxSpeed = 220;
}

addMaxSpeed(car);

console.log(car);
//6 функция получает первым аргументом объект, а вторым — свойство
function showObjectValue(obj, property) {
  console.log(obj[property]);
}

showObjectValue(car, "brand");
showObjectValue(car, "model");
showObjectValue(user, "name");


//7 массив продуктов
const products = ["яблоки", "груши", "молоко", "икра", "банан"];

//8 массив объектов
const books = [
	{
		title: "JavaScript. Подробное руководство",
		author: "Дэвид Флэнаган",
		year: 2021,
		coverColor: "белый",
		genre: "программирование"
	},
	{
		title: "Laravel",
		author: "Андрей Валентинович",
		year: 2021,
		coverColor: "синий",
		genre: "программирование"
	},
	{
		title: "Паттерны объектно-ориентированного проектирования",
		author: "Эрих Гамма и др.",
		year: 2022,
		coverColor: "зеленый",
		genre: "программирование"
	}
];

books.push({
	title: "Чистый код",
	author: "Роберт Мартин",
	year: 2019,
	coverColor: "черный",
	genre: "программирование"
});

//9 книги определенной вселенной (Marvel)
const universeBooks = [
  {
    title: "Гражданская война",
    author: "Марк Миллар",
    year: 2006,
    coverColor: "красный",
    genre: "комикс",
    universe: "Marvel"
  },
  {
    title: "Перчатка Бесконечности",
    author: "Джим Старлин",
    year: 1991,
    coverColor: "фиолетовый",
    genre: "комикс",
    universe: "Marvel"
  },
  {
    title: "Человек-паук: Синий",
    author: "Джеф Лоуб",
    year: 2002,
    coverColor: "синий",
    genre: "комикс",
    universe: "Marvel"
  }
];

const allBooks = [...books, ...universeBooks];

// 10 map: добавляю свойство isRare по году выпуска
function getBooksWithRareFlag(books) {
  return books.map((book) => ({
    ...book,
    isRare: book.year > 2000
  }));
}

const booksWithRare = getBooksWithRareFlag(allBooks);
console.log(booksWithRare);


