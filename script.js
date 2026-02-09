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
recolorCardsBtn.addEventListener('click', () => {
	recolorCards.forEach(card => (card.style.backgroundColor = yellowHashColor))
})

const googleOpenBtn = document.getElementById('open-google-button')
googleOpenBtn.addEventListener('click', openGoogle)
function openGoogle() {
	const answer = confirm('Вы действительно хотите перейти на сайт Google?')

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

const changeBtnColor = document.getElementById('change-button-color')
changeBtnColor.classList.add('black')
changeBtnColor.addEventListener('click', () => {
	if (changeBtnColor.classList.contains('black')) {
		changeBtnColor.classList.replace('black', 'green')
	} else {
		changeBtnColor.classList.replace('green', 'black')
	}
})
