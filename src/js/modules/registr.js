// src/js/index.js
import { togglePasswordVisibility } from './togglePassword.js'

document.addEventListener('DOMContentLoaded', function () {
	const passwordInputs = document.querySelectorAll('.password-input')
	const toggleIcons = document.querySelectorAll('#togglePassword')

	// Перемикаємо видимість пароля для кожного поля
	togglePasswordVisibility(passwordInputs, toggleIcons)
})
