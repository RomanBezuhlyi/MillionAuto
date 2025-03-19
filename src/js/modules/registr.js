document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('.registr__form')
	const inputs = form.querySelectorAll('input[required]')
	const checkbox = document.querySelector('#customCheckbox')
	const regBtn = document.querySelector('#regBtn')
	const passwordToggles = document.querySelectorAll('.password-icon')

	function checkFormValidity() {
		let isValid = true
		inputs.forEach(input => {
			if (!input.value.trim()) {
				isValid = false
			}
		})
		if (!checkbox.checked) {
			isValid = false
		}
		regBtn.disabled = !isValid
	}

	inputs.forEach(input => {
		input.addEventListener('input', checkFormValidity)
	})
	checkbox.addEventListener('change', checkFormValidity)

	passwordToggles.forEach(toggle => {
		toggle.addEventListener('click', function () {
			const passwordInput = this.previousElementSibling
			if (passwordInput && passwordInput.type === 'password') {
				passwordInput.type = 'text'
				this.setAttribute('src', './img/icons/eye_off_icon.svg')
			} else {
				passwordInput.type = 'password'
				this.setAttribute('src', './img/icons/eye.svg')
			}
		})
	})
})
