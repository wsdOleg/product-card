const city = 'Тюмени';
const temperature = '-5';

function showCityTemperature(city, temperature){
	console.log(`Сейчас в ${city} температура  — ${temperature} градусов по Цельсию`);
};

showCityTemperature(city, temperature);

const SPEED_OF_LIGHT = 299792458;

function checkLightSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log('Сверхсветовая скорость');
  } else if (speed < SPEED_OF_LIGHT) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Скорость света');
  }
}
checkLightSpeed(299792458);

const productName = 'Coffee';
const productPrice = 4.99;

function buyProduct(currentBudget) {
  if (currentBudget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    const difference = productPrice - currentBudget;
    console.log(`Вам не хватает ${difference.toFixed(2)}$, пополните баланс`);
  }
}
buyProduct(10);


const userName = 'Oleg';
let age = 23;
let student = true;

function greetUser(name) {
  console.log(`Привет, ${name}! тебе ${age} года и ты студент? ${student}`);
}


greet(userName);

