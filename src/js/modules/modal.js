document.addEventListener('DOMContentLoaded', () => {
	document.body.addEventListener('click', event => {
		if (event.target.matches('[data-open-modal]')) {
			openModal(event.target.getAttribute('data-open-modal'))
		}
		if (
			event.target.matches('[data-close-modal]') ||
			event.target.classList.contains('modal')
		) {
			closeModal(event.target.closest('.modal'))
		}
	})

	document.body.addEventListener('input', event => {
		if (event.target.matches('.input-primary, .textarea-primary')) {
			validateForm(event.target.closest('.modal'))
		}
	})

	document.body.addEventListener('click', event => {
		if (event.target.matches('.star')) {
			const modal = event.target.closest('.modal')
			const rating = event.target.getAttribute('data-value')
			updateStars(modal, rating)
			validateForm(modal)
		}
		if (event.target.matches('[data-submit-modal]')) {
			submitForm(event.target.closest('.modal'))
		}
	})
})

function openModal(modalId) {
	const modal = document.getElementById(modalId)
	if (modal) {
		modal.style.display = 'block'
		document.body.style.overflow = 'hidden'
	}
}

function closeModal(modal) {
	if (modal) {
		modal.style.display = 'none'
		document.body.style.overflow = 'auto'
		resetForm(modal)
	}
}

function updateStars(modal, rating) {
	const stars = modal.querySelectorAll('.star')
	stars.forEach(star => {
		star.src =
			star.getAttribute('data-value') <= rating
				? './img/icons/full_star_icon.svg'
				: './img/icons/empty_star_icon.svg'
	})
	modal.setAttribute('data-rating', rating)
}

function validateForm(modal) {
	const nameInput = modal.querySelector('.input-primary')
	const reviewInput = modal.querySelector('.textarea-primary')
	const submitBtn = modal.querySelector('[data-submit-modal]')
	const selectedRating = modal.getAttribute('data-rating') || 0

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

function submitForm(modal) {
	const nameInput = modal.querySelector('.input-primary')
	const reviewInput = modal.querySelector('.textarea-primary')
	const selectedRating = modal.getAttribute('data-rating') || 0

	console.log("Ім'я:", nameInput.value)
	console.log('Відгук:', reviewInput.value)
	console.log('Рейтинг:', selectedRating)

	closeModal(modal)
}

function resetForm(modal) {
	modal.querySelector('.input-primary').value = ''
	modal.querySelector('.textarea-primary').value = ''
	modal.setAttribute('data-rating', 0)
	updateStars(modal, 0)
	validateForm(modal)
}
