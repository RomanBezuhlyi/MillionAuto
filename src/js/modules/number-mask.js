document.querySelectorAll('[data-phone-input]').forEach(input => {
	IMask(input, {
		mask: '+{380} (00) 000-00-00',
	})
})
document.querySelectorAll('[data-confirm-code]').forEach(input => {
	IMask(input, {
		mask: '00-00-00',
	})
})
