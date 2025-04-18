document.addEventListener('DOMContentLoaded', function () {
	const openModalBtn = document.getElementById('open-modal-buy')
	const modalBuy = document.getElementById('modal-buy')
	const closeModalBuy = document.getElementById('closeModalBuy')
	const nameInput = document.getElementById('modal-name')
	const phoneInput = document.getElementById('phone-input')
	const noteInput = document.getElementById('modal-note')
	const submitModalBuy = document.getElementById('submitModalBuy')

	if (!openModalBtn) {
		return
	} else {
		openModalBtn.addEventListener('click', () => {
			modalBuy.style.display = 'block'
			document.body.style.overflow = 'hidden'
		})
	}

	closeModalBuy.addEventListener('click', () => {
		modalBuy.style.display = 'none'
		document.body.style.overflow = 'auto'
		// Очищення полів
		nameInput.value = ''
		phoneInput.value = ''
		noteInput.value = ''
		submitModalBuy.disabled = true // Закриття модалки має заблокувати кнопку
	})

	// Функція для перевірки заповненості полів
	function checkInputs() {
		if (nameInput.value && phoneInput.value && noteInput.value) {
			submitModalBuy.disabled = false // Розблокувати кнопку
		} else {
			submitModalBuy.disabled = true // Заблокувати кнопку
		}
	}

	// Додавання обробника подій для полів вводу
	nameInput.addEventListener('input', checkInputs)
	phoneInput.addEventListener('input', checkInputs)
	noteInput.addEventListener('input', checkInputs)

	document.addEventListener('click', e => {
		if (e.target === modalBuy) {
			modalBuy.style.display = 'none'
			document.body.style.overflow = 'auto'
			// Очищення полів
			nameInput.value = ''
			phoneInput.value = ''
			noteInput.value = ''
			submitModalBuy.disabled = true // Закриття модалки має заблокувати кнопку
		}
	})
})
