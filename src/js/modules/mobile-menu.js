document.addEventListener('DOMContentLoaded', function () {
	const burger = document.querySelector('.header__burger')
	const nav = document.querySelector('.header__nav')
	const body = document.body
	const burgerIcon = burger.querySelector('img')

	burger.addEventListener('click', function () {
		nav.classList.toggle('active')
		burger.classList.toggle('active')
		body.classList.toggle('no-scroll')

		if (burger.classList.contains('active')) {
			burgerIcon.src = './img/icons/cross_icon.svg'
		} else {
			burgerIcon.src = './img/icons/burger_menu_icon.svg'
		}
	})

	document.addEventListener('click', function (event) {
		if (!nav.contains(event.target) && !burger.contains(event.target)) {
			nav.classList.remove('active')
			burger.classList.remove('active')
			body.classList.remove('no-scroll')
			burgerIcon.src = './img/icons/burger_menu_icon.svg'
		}
	})
})
