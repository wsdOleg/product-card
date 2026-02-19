const city = 'Тюмени';
const temperature = '-5';

function cityTemperature(city, temperature){
	console.log(`Сейчас в ${city} температура  — ${temperature} градусов по Цельсию`);
};

cityTemperature(city, temperature);

const SPEED_OF_LIGHT = 299792458;

function speedOfLight(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log('Сверхсветовая скорость');
  } else if (speed < SPEED_OF_LIGHT) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Скорость света');
  }
}
speedOfLight(299792458);

const variable1 = 'Coffee';
const variable2 = 4.99;

function buy(currentBudget) {
  if (currentBudget >= variable2) {
    console.log(`${variable1} приобретён. Спасибо за покупку!`);
  } else {
    const difference = variable2 - currentBudget;
    console.log(`Вам не хватает ${difference.toFixed(2)}$, пополните баланс`);
  }
}
buy(10);

// 7. Три любые переменные
const userName = 'Oleg';
let age = 23;
let student = true;
// 6. Функция с любым названием
function greet(name) {
  console.log(`Привет, ${name}! тебе ${age} года и ты студент? ${student}`);
}


greet(userName);
