//Уровень 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = numbers.filter(number => number >= 5);

console.log(newArray);

// 3. Массив строк из книг
const books = [
	"JavaScript. Подробное руководство",
	"Laravel",
	"Паттерны объектно-ориентированного проектирования"
];
const foundBook = books.find(book => book === "Laravel");

console.log(foundBook); 

// 4. перевернуть массив
books.reverse();

console.log(books);

//уровень 2 
// 6. экспортирую
import { comments } from "./comments.js"
console.log(comments);

// 7. фильтрую по почте .com
const filteredComments = comments.filter(comment => comment.email.includes(".com"));

console.log(filteredComments);

// 8. Перебрать массив
const changedComments = comments.map(comment => {
	if (comment.id <= 5) {
		return {
			...comment,
			postId: 2
		};
	}

	return {
		...comment,
		postId: 1
	};
});

console.log(changedComments);

// 9. Оставить только id и name
const getCommentsIdAndName = () => {
	return comments.map(comment => {
		return {
			id: comment.id,
			name: comment.name
		};
	});
};

console.log(getCommentsIdAndName());

// 10. Добавить isInvalid по длине body
const getCommentsWithInvalidStatus = () => {
	return comments.map(comment => {
		return {
			...comment,
			isInvalid: comment.body.length > 180
		};
	});
};

console.log(getCommentsWithInvalidStatus());

//уровень 3
// 11. Получить массив почт через reduce и map
const getEmailsWithReduce = () => {
	return comments.reduce((emails, comment) => {
		emails.push(comment.email);

		return emails;
	}, []);
};

console.log(getEmailsWithReduce());

const getEmailsWithMap = () => {
	return comments.map(comment => comment.email);
};

console.log(getEmailsWithMap());

// 12. Преобразовать массив почт в строку
const getEmailsStringWithToString = () => {
	return getEmailsWithMap().toString();
};

console.log(getEmailsStringWithToString());

const getEmailsStringWithJoin = () => {
	return getEmailsWithMap().join(", ");
};

console.log(getEmailsStringWithJoin());


