window.addEventListener('DOMContentLoaded', function () {
	const body = document.querySelector('body')

	const prInputs = document.querySelectorAll('.js-pr-input')
	const inputParent = '.pr-control'
	if (prInputs) {
		prInputs.forEach(item => {
			item.addEventListener('change', function () {
				let value = this.value
				this.value = value.trim()

				if (this.value !== '') {
					this.closest(inputParent).classList.add('is-active')
				} else {
					this.closest(inputParent).classList.remove('is-active')
				}
			})
		})
	}

	//select
	body.addEventListener('click', e => {
		if (!e.target.closest('.pr-select')) {
			const activeItem = document.querySelector('.pr-select.is-show')
			if (activeItem) {
				selectHide(activeItem)
			}
		}

		const target = e.target.closest('.pr-select__title')
		if (!target) return

		const parent = target.parentElement
		const activeItem = document.querySelector('.pr-select.is-show')
		if (activeItem && parent != activeItem) {
			selectHide(activeItem)
		}
		parent.classList.toggle('is-show')
	})

	const selects = document.querySelectorAll('.pr-select')
	if (selects) {
		selects.forEach(item => {
			item.addEventListener('click', function (e) {
				const target = e.target.closest('.pr-select__option')
				if (!target) return

				const title = target.textContent
				const parent = target.closest('.pr-select')
				const activeItem = parent.querySelector('.pr-select__option.is-active')

				if (activeItem) {
					selectHide(activeItem)
				}

				target.classList.add('is-active')
				parent.querySelector('.pr-select__title input').value = title
				parent.parentElement.classList.add('is-active')

				item.classList.remove('is-show')
			})
		})
	}

	function selectHide(activeItem) {
		activeItem.classList.remove('is-show')
	}

	//collapse
	body.addEventListener('click', e => {
		const target = e.target.closest('[data-collapse]')
		if (!target) return

		const parent = target.closest('.js-pr-collapse')
		parent.classList.toggle('is-show')
	})

	//Textarea Height
	const textareas = document.querySelectorAll('.js-resize-ta')

	if (textareas) {
		textareas.forEach(el => {
			el.style.height = el.setAttribute(
				'style',
				'height: ' + el.scrollHeight + 'px'
			)

			el.addEventListener('input', e => {
				el.style.height = 'auto'
				el.style.height = el.scrollHeight + 'px'
			})
		})
	}

	//Tabs
	const tabButtons = document.querySelectorAll('.pr-tabs__button')
	if (tabButtons) {
		tabButtons.forEach(item => {
			item.addEventListener('click', () => {
				document
					.querySelector('.pr-tabs__button.is-current')
					.classList.remove('is-current')
				document
					.querySelector('.pr-tabs__content.is-current')
					.classList.remove('is-current')

				const tabName = item.dataset.tabs
				item.classList.add('is-current')
				document.querySelector('#' + tabName).classList.add('is-current')
			})
		})
	}

	// **********************************************
	const checkBtns = document.querySelectorAll('.js-pr-check .pr-check input')
	if (checkBtns) {
		checkBtns.forEach(item => {
			item.addEventListener('change', () => {
				item.closest('.js-pr-check').style.color = item.checked
					? 'var(--color-brand)'
					: ''
			})
		})
	}

	//MODAL
	const modalBtns = document.querySelectorAll('[data-modal]')

	const datepickerInput = document.getElementById('datepicker')

	if (modalBtns) {
		modalBtns.forEach(item => {
			item.addEventListener('click', function () {
				const modalTitle = this.dataset.modal
				const modalWindow = document.querySelector(modalTitle)
				const modalWindowCloses = modalWindow.querySelectorAll('[data-hide]')

				modalWindow.classList.add('is-show')
				body.classList.add('pr-modal-show')

				for (let i = 0; i < modalWindowCloses.length; i++) {
					modalWindowCloses[i].addEventListener('click', function () {
						modalWindow.classList.remove('is-show')
						body.classList.remove('pr-modal-show')
					})
				}
			})
		})

		body.addEventListener('click', e => {
			const target = e.target.closest('[data-canceled]')
			if (!target) return

			datepickerInput.value = ''
			if (datepickerInput.parentElement.classList.contains('is-active')) {
				datepickerInput.parentElement.classList.remove('is-active')
			}
		})
	}

	//init datepicker
	if (datepickerInput) {
		const picker = new Pikaday({
			field: datepickerInput,
			format: 'D/M/YYYY',
			firstDay: 1,
			showDaysInNextAndPreviousMonths: true,
			yearRange: [1950, new Date().getFullYear()],
			bound: false,
			keyboardInput: false,
			container: document.querySelector('.js-pr-datepicker'),
			toString(date, format) {
				const day = setZero(date.getDate())
				const month = setZero(date.getMonth() + 1)
				const year = date.getFullYear()
				return `${day} / ${month} / ${year}`
			},
			i18n: {
				previousMonth: 'Попередній місяць',
				nextMonth: 'Наступний місяць',
				months: [
					'Січень',
					'Лютий',
					'Березень',
					'Квітень',
					'Травень',
					'Червень',
					'Липень',
					'Серпень',
					'Вересень',
					'Жовтень',
					'Листопад',
					'Грудень',
				],
				weekdays: [
					'Неділя',
					'Понеділок',
					'Вівторок',
					'Середа',
					'Четверг',
					"П'ятниця",
					'Субота',
				],
				weekdaysShort: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
			},
		})
	}

	function setZero(item) {
		return item < 10 ? '0' + item : item
	}
})
