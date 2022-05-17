const triggers = document.querySelectorAll('a') // Берём все ссылки
const highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.append(highlight)

function highlightLink() {
   // console.log('high')
   // console.log(this)
   const linkCoords = this.getBoundingClientRect() // Берём коориднаты ссылки, на которую навелись
   console.log(linkCoords)

   const coords = {
      width: linkCoords.width,
      height: linkCoords.height,
      top: linkCoords.top + window.scrollY, // Добавляем к высоте и ширине проскроленные пиксели
      left: linkCoords.left + window.scrollX // Если документ будет проскроллен, данная запись пофиксит баг с отображением хайлайта не в том месте
   }

   highlight.style.width = `${coords.width}px` // Ширина и высота хайлайта равны ширине и высоте ссылки
   highlight.style.height = `${coords.height}px`
   highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)` // Меняем положение хайлайта по координатам ссылки
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink)) // Слушатель