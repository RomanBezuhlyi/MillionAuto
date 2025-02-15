const openModalBtn = document.getElementById('openModal')
const closeModalBtn = document.getElementById('closeModal')
const modal = document.getElementById('modal')
const modalContent = document.querySelector('.modal-content')
const stars = document.querySelectorAll('.star')
const nameInput = document.getElementById('modal-name')
const reviewInput = document.getElementById('modal-review')
const submitBtn = document.getElementById('submitModal')

let selectedRating = 0

// Відкриття модалки + вимкнення скролу
openModalBtn.addEventListener('click', () => {
	modal.style.display = 'block'
	document.body.style.overflow = 'hidden' // Забороняє скролінг
})

// Закриття модалки + ввімкнення скролу
closeModalBtn.addEventListener('click', closeModal)
modal.addEventListener('click', event => {
	if (!modalContent.contains(event.target)) {
		closeModal()
	}
})

function closeModal() {
	modal.style.display = 'none'
	document.body.style.overflow = 'auto' // Дозволяє скролінг
	resetForm()
}

// Функція для встановлення рейтингу
stars.forEach(star => {
	star.addEventListener('click', () => {
		selectedRating = star.getAttribute('data-value')
		updateStars(selectedRating)
		validateForm()
	})
})

// Оновлення вигляду зірок
function updateStars(rating) {
	stars.forEach(star => {
		if (star.getAttribute('data-value') <= rating) {
			star.src = './img/icons/full_star_icon.svg' // Заповнена зірка
		} else {
			star.src = './img/icons/empty_star_icon.svg' // Порожня зірка
		}
	})
}

// Перевірка валідності форми
function validateForm() {
	if (
		nameInput.value.trim() &&
		reviewInput.value.trim() &&
		selectedRating > 0
	) {
		submitBtn.classList.add('active')
		submitBtn.removeAttribute('disabled')
	} else {
		submitBtn.classList.remove('active')
		submitBtn.setAttribute('disabled', 'true')
	}
}

// Валідація на введення тексту
nameInput.addEventListener('input', validateForm)
reviewInput.addEventListener('input', validateForm)

// Вивід даних у консоль при відправці
submitBtn.addEventListener('click', () => {
	console.log("Ім'я:", nameInput.value)
	console.log('Відгук:', reviewInput.value)
	console.log('Рейтинг:', selectedRating)
	closeModal()
})

// Очистка форми після закриття
function resetForm() {
	nameInput.value = ''
	reviewInput.value = ''
	selectedRating = 0
	updateStars(0)
	validateForm()
}
