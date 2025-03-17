const togglePassword = document.getElementById('togglePassword')
const passwordInput = document.getElementById('password')
const emailInput = document.querySelector('input[type="email"]')
const submitBtn = document.getElementById('submitBtn')

// Функція для перевірки, чи обидва поля заповнені
function checkFields() {
	if (emailInput.value && passwordInput.value) {
		submitBtn.disabled = false // Розблоковуємо кнопку
	} else {
		submitBtn.disabled = true // Блокуємо кнопку
	}
}

// Слухаємо зміни в полях
emailInput.addEventListener('input', checkFields)
passwordInput.addEventListener('input', checkFields)

// Логіка для показу/приховування пароля
togglePassword.addEventListener('click', function () {
	const type =
		passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'
	passwordInput.setAttribute('type', type)

	const eyeIcon =
		type === 'password' ? './img/icons/eye.svg' : './img/icons/eye_off_icon.svg'
	togglePassword.setAttribute('src', eyeIcon)
})

// Викликаємо функцію на початку, щоб ініціалізувати стан кнопки
checkFields()
