document.addEventListener('DOMContentLoaded', function () {
	const faqItems = document.querySelectorAll('.faq__item')

	faqItems.forEach(item => {
		item.addEventListener('click', function () {
			faqItems.forEach(el => {
				if (el !== item) {
					el.classList.remove('active-tab')
				}
			})

			item.classList.toggle('active-tab')
		})
	})
})
