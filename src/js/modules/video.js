const playButton = document.querySelector('.play')
const previewImage = document.querySelector('.preview')
const videoPlayer = document.getElementById('video-player')

// При натисканні на кнопку
if (playButton) {
	playButton.addEventListener('click', () => {
		previewImage.style.display = 'none' // Сховати прев'ю
		playButton.style.display = 'none' // Сховати кнопку
		videoPlayer.style.display = 'block' // Показати відео
		videoPlayer.play() // Запустити відео
	})
} else {
	return
}

// Коли відео завершується
videoPlayer.addEventListener('ended', () => {
	previewImage.style.display = 'block' // Показати прев'ю
	playButton.style.display = 'block' // Показати кнопку
	videoPlayer.style.display = 'none' // Сховати відео
})
