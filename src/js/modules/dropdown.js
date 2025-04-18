document.addEventListener('DOMContentLoaded', () => {
	const dropdowns = document.querySelectorAll('.dropdown')

	dropdowns.forEach(dropdown => {
		const input = dropdown.querySelector('.input input')
		const dropdownList = dropdown.querySelector('.dropdown-list')
		const dropdownItems = dropdown.querySelectorAll('.dropdown-items li')
		const arrowIcon = dropdown.querySelector('.input-chev')
		const noResultsMessage = document.createElement('li') // Створюємо елемент для повідомлення
		noResultsMessage.textContent = 'Не знайдено'
		noResultsMessage.classList.add('no-results') // Додаємо клас для стилізації повідомлення

		const toggleDropdown = event => {
			event.stopPropagation()

			// Якщо інпут не є пошуковим, то крутимо іконку
			if (input.id !== 'search') {
				dropdownList.classList.toggle('open')
				arrowIcon.classList.toggle('rotate')
			} else {
				dropdownList.classList.toggle('open')
			}
		}

		const filterItems = () => {
			const searchQuery = input.value.toLowerCase()
			let hasResults = false

			// Спочатку видаляємо старе повідомлення, якщо є
			const existingMessage = dropdownList.querySelector('.no-results')
			if (existingMessage) {
				existingMessage.remove()
			}

			dropdownItems.forEach(item => {
				const itemText = item.textContent.trim().toLowerCase()
				if (itemText.includes(searchQuery)) {
					item.style.display = ''
					hasResults = true
				} else {
					item.style.display = 'none'
				}
			})

			// Якщо немає результатів, додаємо повідомлення
			if (!hasResults) {
				dropdownList.appendChild(noResultsMessage)
			}
		}

		const selectItem = event => {
			dropdownItems.forEach(item => item.classList.remove('active'))
			event.currentTarget.classList.add('active')

			// Отримуємо тільки текст без іконки
			const selectedText = event.currentTarget.childNodes[0].textContent.trim()
			input.value = selectedText

			dropdownList.classList.remove('open')
			arrowIcon.classList.remove('rotate')
		}

		input.addEventListener('click', toggleDropdown)
		input.addEventListener('input', filterItems) // Додаємо обробник на введення тексту
		dropdownItems.forEach(item => item.addEventListener('click', selectItem))
	})

	document.addEventListener('click', event => {
		dropdowns.forEach(dropdown => {
			const dropdownList = dropdown.querySelector('.dropdown-list')
			const arrowIcon = dropdown.querySelector('.input-chev')

			// Перевіряємо, чи існують елементи перед маніпуляцією з classList
			if (dropdownList && arrowIcon) {
				if (!dropdown.contains(event.target)) {
					dropdownList.classList.remove('open')
					arrowIcon.classList.remove('rotate')
				}
			}
		})
	})

	if (document.getElementById('reset-button')) {
		document.getElementById('reset-button').addEventListener('click', () => {
			document.querySelectorAll('.buy__form input').forEach(input => {
				input.value = ''
				if (input.hasAttribute('data-placeholder')) {
					input.placeholder = input.getAttribute('data-placeholder')
				}
			})
		})
	} else {
		return
	}

	const form = document.getElementById('buy-form')
	form.addEventListener('submit', event => {
		event.preventDefault()

		const getValue = selector => form.querySelector(selector)?.value || ''
		const data = {
			markaAuto: getValue('#marka-auto'),
			korobkaPeredach: getValue('#korobka-peredach'),
			typKuzova: getValue('#typ-kuzova'),
			yearFrom: getValue('#year-from'),
			yearTo: getValue('#year-to'),
			model: getValue('#model'),
			typPalnoho: getValue('#typ-palnoho'),
			pryvod: getValue('#pryvod'),
			priceFrom: getValue('#price-from'),
			priceTo: getValue('#price-to'),
		}

		console.log(data)
	})

	// Додаємо обробник для кнопки "Розширений пошук"
	const moreButton = document.getElementById('more-button')
	moreButton.addEventListener('click', () => {
		const hiddenRows = document.querySelectorAll('.hidden-row')
		hiddenRows.forEach(row => row.classList.toggle('show'))
		moreButton.querySelector('img').classList.toggle('rotate')
	})
})
