const recolorCardBtn = document.getElementById(
	'recolor-background-first-card-button',
)
const firstCatalogCard = document.querySelector('.product-card')
const redHashColor = '#9c6464'

recolorCardBtn.addEventListener('click', () => {
	firstCatalogCard.style.backgroundColor = redHashColor
})
const yellowHashColor = '#a8b939'

const recolorCards = document.querySelectorAll('.product-card')
const recolorCardsBtn = document.getElementById(
	'recolor-background-all-cards-button',
)
recolorCards.forEach(card => {
	card.style.backgroundColor = yellowHashColor
})

const openGoogleBtn = document.getElementById('open-google-button')
openGoogleBtn.addEventListener('click', openGoogle)
function openGoogle() {
	answer = confirm('Вы действительно хотите перейти на сайт Google?')
	if (answer === true) {
		window.open('https://google.com')
	} else {
		console.log('Пользователь отменил переход на Google')
	}
}

const titleText = document.querySelector('.title-text')
titleText.addEventListener('mouseenter', () => {
	console.log(titleText.textContent)
})

const changeColorBtn = document.getElementById('change-button-color')
changeColorBtn.classList.add('black')
changeColorBtn.addEventListener('click', () => {
	changeColorBtn.classList.toggle('black')
	changeColorBtn.classList.toggle('green')
})
