document.querySelectorAll('.tabs__item').forEach(tab => {
	tab.addEventListener('click', function () {
		document
			.querySelectorAll('.tabs__item')
			.forEach(t => t.classList.remove('active'))
		document
			.querySelectorAll('.tab-content')
			.forEach(c => c.classList.remove('active'))
		this.classList.add('active')
		document.getElementById(`tab-${this.dataset.tab}`).classList.add('active')
	})
})
