var swiper1 = new Swiper('.servicesSwiper', {
	navigation: {
		nextEl: '.services-button-next',
		prevEl: '.services-button-prev',
	},
	spaceBetween: 16,
	slidesPerView: 1,
	grabCursor: true,
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
	},
})

var swiper2 = new Swiper('.reviewsSwiper1', {
	navigation: {
		nextEl: '.reviews-button-next',
		prevEl: '.reviews-button-prev',
	},
	spaceBetween: 16,
	slidesPerView: 1,
	grabCursor: true,
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

var swiper3 = new Swiper('.reviewsSwiper2', {
	navigation: {
		nextEl: '.reviews-button-next',
		prevEl: '.reviews-button-prev',
	},
	spaceBetween: 16,
	slidesPerView: 1,
	grabCursor: true,
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

var swiper4 = new Swiper('.reviewsSwiper3', {
	navigation: {
		nextEl: '.reviews-button-next',
		prevEl: '.reviews-button-prev',
	},
	spaceBetween: 16,
	slidesPerView: 1,
	grabCursor: true,
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

var swiper5 = new Swiper('.autoSwiper', {
	navigation: {
		nextEl: '.auto-button-next',
		prevEl: '.auto-button-prev',
	},
	spaceBetween: 16,
	slidesPerView: 1.2,
	grabCursor: true,
	loop: true,
	breakpoints: {
		600: {
			slidesPerView: 2.5,
		},
		1200: {
			slidesPerView: 4.2,
		},
		1440: {
			slidesPerView: 4,
		},
	},
})

var swiper6 = new Swiper('.vacanciesSwiper', {
	navigation: {
		nextEl: '.vac-button-next',
		prevEl: '.vac-button-prev',
	},
	spaceBetween: 16,
	slidesPerView: 1,
	grabCursor: true,
	breakpoints: {
		600: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3.5,
		},
		1440: {
			slidesPerView: 3,
		},
	},
})

var swiper7 = new Swiper('.successSwiper', {
	navigation: {
		nextEl: '.suc-button-next',
		prevEl: '.suc-button-prev',
	},
	spaceBetween: 16,
	slidesPerView: 1,
	grabCursor: true,
	breakpoints: {
		550: {
			slidesPerView: 1.5,
		},
		768: {
			slidesPerView: 2,
		},
		1100: {
			slidesPerView: 3,
		},
	},
})

var swiper8 = new Swiper('.swiperCarPreview', {
	spaceBetween: 8,
	slidesPerView: 4,
	grabCursor: true,
	breakpoints: {
		450: {
			slidesPerView: 5,
		},
		550: {
			slidesPerView: 6,
		},
		700: {
			slidesPerView: 7,
		},
		768: {
			slidesPerView: 8,
		},
		991: {
			slidesPerView: 6,
		},
	},
})

var swiper9 = new Swiper('.swiperTabs', {
	spaceBetween: 0,
	slidesPerView: 'auto',
	grabCursor: true,
})
