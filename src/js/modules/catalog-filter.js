document.addEventListener('DOMContentLoaded', function () {
	const inputs = document.querySelectorAll('.catalog__filter input')
	const dropdownItems = document.querySelectorAll('.dropdown-items li')
	const submitButton = document.querySelector('.catalog__filter-btn')
	const resetButton = document.getElementById('reset-filter')

	// Функція для перевірки введених даних
	function checkInputs() {
		let isEmpty = true

		// Перевіряємо, чи є введені дані в інпутах
		inputs.forEach(input => {
			if (input.value.trim() !== '') {
				isEmpty = false
			}
		})

		// Активуємо/деактивуємо кнопку "Знайти"
		submitButton.disabled = isEmpty

		// Показуємо/ховаємо кнопку "Ресет"
		if (isEmpty) {
			resetButton.classList.add('none')
		} else {
			resetButton.classList.remove('none')
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
