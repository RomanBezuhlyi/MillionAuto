AOS.init({
	duration: 2000, // Тривалість анімації (в мс)
	once: true, // Анімація тільки один раз
})
document.addEventListener('DOMContentLoaded', function () {
	const links = document.querySelectorAll('.transition-link')

	links.forEach(link => {
		link.addEventListener('click', function (event) {
			event.preventDefault()
			const href = this.getAttribute('href')

			document.body.classList.add('fade-out')

			setTimeout(() => {
				window.location.href = href
			}, 300)
		})
	})
})
