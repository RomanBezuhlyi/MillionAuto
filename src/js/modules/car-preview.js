document.addEventListener('DOMContentLoaded', function () {
	const carItems = document.querySelectorAll('.car__item')
	const carPreviewImg = document.querySelector('.car__preview-img')
	let activeIndex = 0

	function updateActiveItem() {
		if (carItems.length === 0 || activeIndex >= carItems.length) {
			return
		}

		carItems.forEach(item => item.classList.remove('active'))
		carItems[activeIndex].classList.add('active')

		carPreviewImg.src = carItems[activeIndex].querySelector('img').src

		const zoomButton = document.querySelector('.car__zoom')
		if (zoomButton) {
			zoomButton.setAttribute(
				'href',
				carItems[activeIndex].querySelector('img').src
			)
		}
	}

	carItems.forEach((item, index) => {
		item.addEventListener('click', function () {
			activeIndex = index
			updateActiveItem()
		})
	})

	const nextButton = document.querySelector('.car__button-next')
	if (nextButton) {
		nextButton.addEventListener('click', function () {
			activeIndex = (activeIndex + 1) % carItems.length
			updateActiveItem()
		})
	}

	const prevButton = document.querySelector('.car__button-prev')
	if (prevButton) {
		prevButton.addEventListener('click', function () {
			activeIndex = (activeIndex - 1 + carItems.length) % carItems.length
			updateActiveItem()
		})
	}

	updateActiveItem()

	const likeButton = document.getElementById('likeButton')
	if (likeButton) {
		likeButton.addEventListener('click', function () {
			this.classList.toggle('like')
		})
	}
})
