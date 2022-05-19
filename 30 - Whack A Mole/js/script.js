
const stones = document.querySelectorAll('.stone')
const scoreBoard = document.querySelector('.score')
const aliens = document.querySelectorAll('.alien')
let lastStone
let timeUp = false
let score = 0

function randTime(min, max) { // Рандомизируем время игры
   return Math.round(Math.random() * (max - min) + min)
}

function randomStone(stones) { // Рандомизируем камни
   const idx = Math.floor(Math.random() * stones.length)
   const stone = stones[idx]
   if (stone === lastStone) {
      console.log('Исключаем повторения')
      return randomStone(stones) // Исключаем повторения
   }
   
   // console.log(stone)
   lastStone = stone
   return stone
}

function alien() {
   const time = randTime(350, 1500)
   const stone = randomStone(stones)
   // console.log(time, stone)
   stone.classList.add('up')
   setTimeout(() => {
      stone.classList.remove('up')
      if (!timeUp) alien()
   }, time)
}

function startGame() {
   scoreBoard.textContent = 0
   timeUp = false
   alien()
   setTimeout(() => timeUp = true, 10000)
}

function shoot(e) {
   if(!e.isTrusted) return
   score++
   this.parentNode.classList.remove('up')
   scoreBoard.textContent = score
 }

 aliens.forEach(alien => alien.addEventListener('click', shoot))