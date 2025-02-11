document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('.application')
	const submitButton = form.querySelector('.application__btn')
	const inputs = form.querySelectorAll('input')
	const dropdownItems = document.querySelectorAll('.dropdown-items li')

	const toggleSubmitButton = () => {
		let isAnyFieldFilled = Array.from(inputs).some(
			input => input.value.trim() !== ''
		)

		if (!isAnyFieldFilled) {
			dropdownItems.forEach(item => {
				if (item.classList.contains('active')) {
					isAnyFieldFilled = true
				}
			})
		}

		submitButton.disabled = !isAnyFieldFilled
	}

	inputs.forEach(input => {
		input.addEventListener('input', toggleSubmitButton)
	})

	dropdownItems.forEach(item => {
		item.addEventListener('click', () => {
			item.parentNode
				.querySelectorAll('li')
				.forEach(li => li.classList.remove('active'))
			item.classList.add('active')
			const input = item.closest('.dropdown').querySelector('input')
			input.value = item.textContent.trim()
			toggleSubmitButton()
		})
	})

	form.addEventListener('reset', () => {
		submitButton.disabled = true
	})

	toggleSubmitButton() // Перевірка стану кнопки при завантаженні сторінки
})
