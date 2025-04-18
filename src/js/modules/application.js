document.addEventListener('DOMContentLoaded', () => {
	const forms = document.querySelectorAll('.application')

	forms.forEach(form => {
		const applicationBtn = form.querySelector('.application__btn')
		const inputs = form.querySelectorAll('input')
		const dropdownItems = form.querySelectorAll('.dropdown-items li')

		const toggleApplicationBtn = () => {
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

			applicationBtn.disabled = !isAnyFieldFilled
		}

		inputs.forEach(input => {
			input.addEventListener('input', toggleApplicationBtn)
		})

		dropdownItems.forEach(item => {
			item.addEventListener('click', () => {
				item.parentNode
					.querySelectorAll('li')
					.forEach(li => li.classList.remove('active'))
				item.classList.add('active')
				const input = item.closest('.dropdown').querySelector('input')
				input.value = item.textContent.trim()
				toggleApplicationBtn()
			})
		})

		form.addEventListener('reset', () => {
			applicationBtn.disabled = true
		})

		toggleApplicationBtn() // Перевірка стану кнопки при завантаженні сторінки
	})
})
