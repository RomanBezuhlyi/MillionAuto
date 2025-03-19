// src/js/togglePassword.js
export function togglePasswordVisibility(passwordInputs, toggleIcons) {
	passwordInputs.forEach((passwordInput, index) => {
		const toggleIcon = toggleIcons[index] // Іконка для кожного інпуту паролю
		if (passwordInput && toggleIcon) {
			toggleIcon.addEventListener('click', function () {
				if (passwordInput.type === 'password') {
					passwordInput.type = 'text'
					toggleIcon.setAttribute('src', './img/icons/eye_off_icon.svg')
				} else {
					passwordInput.type = 'password'
					toggleIcon.setAttribute('src', './img/icons/eye.svg')
				}
			})
		}
	})
}
