var swiper1 = new Swiper('.servicesSwiper', {
	navigation: {
		nextEl: '.services-button-next',
		prevEl: '.services-button-prev',
	},
	spaceBetween: 16,
	slidesPerView: 1,

	breakpoints: {
		768: {
			slidesPerView: 2,
		},
	},
})

var swiper2 = new Swiper('.reviewsSwiper', {
	navigation: {
		nextEl: '.reviews-button-next',
		prevEl: '.reviews-button-prev',
	},
	spaceBetween: 16,
	slidesPerView: 1,
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3.2,
		},
		1440: {
			slidesPerView: 3,
		},
	},
})
