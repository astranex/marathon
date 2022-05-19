let countdown
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')

function timer(seconds) {

   // Очищаем все зайдествованные (если такие есть) таймеры

   clearInterval(countdown)

   // setInterval(function() {
   //    seconds--
   // }, 1000)

   const now = Date.now()
   const then = now + seconds * 1000

   // Выводим на экран
   
      displayTimeLeft(seconds)
      displayEndTime(then)

   // console.log({now, then})

   countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000)
      
      if (secondsLeft < 0) {
         clearInterval(countdown)
         return
      }

      displayTimeLeft(secondsLeft);
   }, 1000)
}

function displayTimeLeft(seconds) {
   const minutes = Math.floor(seconds / 60)
   const remainderSeconds = seconds % 60

   const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`

   document.title = display // Задаём title документа (вкладки)
   timerDisplay.textContent = display

   // console.log({minutes, remainderSeconds})
}

function displayEndTime(timestamp) {
   const end = new Date(timestamp)
   const hour = end.getHours()
   const minutes = end.getMinutes()
   endTime.textContent = `Вернусь в ${hour}:${minutes < 10 ? '0' : ''}${minutes}`
}

function startTimer() {
   const seconds = this.dataset.time
   timer(seconds)
}

buttons.forEach(button => button.addEventListener('click', startTimer))
   document.customForm.addEventListener('submit', function(e) {
      e.preventDefault()
      const mins = this.minutes.value
      timer(mins * 60)
      this.reset()
})