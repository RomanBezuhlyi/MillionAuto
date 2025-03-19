// src/js/checkFields.js
export function checkFields(emailInput, passwordInput, submitBtn) {
	if (emailInput.value && passwordInput.value) {
		submitBtn.disabled = false
	} else {
		submitBtn.disabled = true
	}
}
