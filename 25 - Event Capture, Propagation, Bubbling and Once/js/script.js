const divs = document.querySelectorAll('div')
const button = document.querySelector('button')

function logText(e) {
   console.log(this.classList.value) // Из-за вложенности блоков, кликая на вложенный, возвращаются также значения родителей. bubbling
   e.stopPropagation() // Останавливает bubbling (передачу ивента к родителям)
}

// https://learn.javascript.ru/event-bubbling

// document.body.addEventListener('click', logText, {
//    // capture: true
//    // capture: false
// })

divs.forEach(div => div.addEventListener('click', logText, {
   // capture: true // Порядок возвращения значений обратный: one - two - three
   // При работе capture: true stopPropagation будет возвращать первый родитель
   capture: false,
   // once: true // Возвращает ивент единожды и после этого удаляет слушатель
}))

button.addEventListener('click', () => {
   console.log('Click!')
}, {
   once: true
})