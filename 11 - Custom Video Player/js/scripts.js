
// Получаем элементы

const player = document.querySelector('.player') // Как всегда, объявляем селекторы для работы с DOM
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

// Функции

function togglePlay() {

   // if (video.paused) { // Если видео на паузе
   //    video.play() // При нажатии на слушатель с функцией togglePlay, оно включится
   // } else { // В ином случае выключено
   //    video.pause()
   // }

   const method = video.paused ? 'play' : 'pause' // Сокращённая запись через тернарный
   video[method]() // Вызываем функцию

}

function updateButton() {
   // console.log('Update the button')

   const icon = this.paused ? '►' : '❚ ❚' // Если видео на паузе, icon один, если нет, другой
   toggle.textContent = icon // toggleButton контент равен icon

}

function skip() {
   // console.log(this.dataset.skip)
   video.currentTime += parseFloat(this.dataset.skip) // Добавляем к текущему времени запарсенный dataset.skip нажатой кнопки
   // используем встроенные методы видео
}

function handleRangeUpdate() {
   video[this.name] = this.value // встроенное свойство видео, в данном случае volume и playbackRate равны измененном значению range
   // console.log(this.value)
}

function handleProgress() {
   const percent = (video.currentTime / video.duration) * 100 // Получаем видео handle для того, чтобы отредактировать flex-basis
   progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
   const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
   video.currentTime = scrubTime
   console.log(e)
}

// Слушатели

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', togglePlay)

skipButtons.forEach(button => button.addEventListener('click', skip))

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

let mousedown = false

progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)) // Наглядное использование логического операта в качестве условного

// Только если первый операнд равен true, второй будет возвращён

progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)

