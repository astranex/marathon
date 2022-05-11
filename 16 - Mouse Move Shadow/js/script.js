
const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')
const walk = 20 // Здесь можно задать шаг

function shadow(e) {
   // console.log(e)
   // const width = hero.offsetWidth
   // const heigth = hero.offsetHeight
   const { offsetWidth: width, offsetHeight: heigth } = hero // Упрощенный способ написания кода выше с помощью деструктуризации
   let { offsetX: x, offsetY: y } = e

   if (this !== e.target) {
      x = x + e.target.offsetLeft
      y = y + e.target.offsetTop
   }
   const xWalk = Math.round((x / width * walk) - (walk / 2))
   const yWalk = Math.round((y / width * walk) - (walk / 2))
   // console.log(xWalk, yWalk)
   text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(0, 223, 209, 0.7), ${xWalk / -1}px ${yWalk / -1}px 0 rgba(224, 3, 72, 0.7)`

   // Можно по-разному играться и накинуть побольше теней // Я попробовал повторить фирменный TikTok glitch

}

hero.addEventListener('mousemove', shadow)