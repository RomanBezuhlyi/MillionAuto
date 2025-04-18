document.addEventListener('DOMContentLoaded', function () {
	const inputs = document.querySelectorAll('.catalog__filter input')
	const dropdownItems = document.querySelectorAll('.dropdown-items li')
	const catalogFilterBtn = document.querySelector('.catalog__filter-btn')
	const resetButton = document.getElementById('reset-filter')

	if (!catalogFilterBtn) {
		return
	} else {
		function checkInputs() {
			let isEmpty = true

			inputs.forEach(input => {
				if (input.value.trim() !== '') {
					isEmpty = false
				}
			})

			catalogFilterBtn.disabled = isEmpty

			// Показуємо/ховаємо кнопку "Ресет"
			if (resetButton) {
				resetButton.classList.toggle('none', isEmpty)
			}
		}
	}

	// Перевіряємо поля при завантаженні сторінки
	checkInputs()

	// Відстежуємо введення в текстові інпути
	inputs.forEach(input => {
		input.addEventListener('input', checkInputs)
	})

	// Відстежуємо вибір елементів у dropdown
	dropdownItems.forEach(item => {
		item.addEventListener('click', function () {
			const dropdownInput = this.closest('.dropdown').querySelector('input')
			if (dropdownInput) {
				dropdownInput.value = this.textContent.trim()
				checkInputs() // Перевіряємо кнопку після вибору
			}
		})
	})

	// Очищення всіх інпутів при натисканні на кнопку "Ресет"
	resetButton.addEventListener('click', function () {
		inputs.forEach(input => {
			input.value = '' // очищаємо значення інпутів
		})
		checkInputs() // перевіряємо кнопку та видимість кнопки "Ресет"
	})
})

document.addEventListener('DOMContentLoaded', function () {
	const filterWrap = document.querySelector('.catalog__filter')
	const filterToggleBtn = document.querySelector('.catalog__sort-btn--filter')
	const filterCloseBtn = document.querySelector('.catalog__filter-wrap button')
	const body = document.body

	if (!filterWrap || !filterToggleBtn || !filterCloseBtn) {
		return
	}

	function toggleFilter() {
		if (!filterWrap.classList.contains('show')) {
			body.dataset.scrollY = window.scrollY
			filterWrap.style.top = `${window.scrollY}px`
			body.style.top = `-${window.scrollY}px`
			body.classList.add('filter-open')
		} else {
			body.classList.remove('filter-open')
			window.scrollTo(0, parseInt(body.dataset.scrollY || '0'))
			body.style.top = ''
		}

		filterWrap.classList.toggle('show')
	}

	filterToggleBtn.addEventListener('click', toggleFilter)
	filterCloseBtn.addEventListener('click', toggleFilter)
})
