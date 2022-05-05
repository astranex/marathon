
const canvas = document.querySelector('#draw') // Объявляем переменную canvas
const ctx = canvas.getContext('2d') // Задаём 2D контекст // Переменная для работы со всем канвасом

canvas.width = window.innerWidth // Ширина и высота canvas всегда равна ширине и высоте окна
canvas.height = window.innerWidth

ctx.strokeStyle = '#BADA55' // Цвет линии для рисования 
ctx.lineJoin = 'round' // Задаём вид кисти
ctx.lineCap = 'round'
ctx.lineWidth = 15

// ctx.globalCompositeOperation = 'multiply' // Можно задать в качестве фильтра "умножение", как в фотошопе (различные фильтры)

// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation

let isDrawing = false // Переменная isDrawing = true, когда мы будем зажимать клавишу мыши
let lastX = 0 // Последние точки на которых мы остановились
let lastY = 0
let hue = 0
let direction = true

function draw(e) {
   if (!isDrawing) return; // Если isDrawing false, функция перестаёт работать
   // console.log(e)
   ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
   // ctx.lineWidth = hue

   ctx.beginPath()
   // Начинается от
   ctx.moveTo(lastX, lastY)
   //  Движется до
   ctx.lineTo(e.offsetX, e.offsetY)
   ctx.stroke(); // ЗДЕСЬ ОБЯЗАТЕЛЬНА ТОЧКА С ЗАПЯТОЙ ПОТОМУ ЧТО ДАЛЕЕ ИДЁТ ДЕСТРУКТУРИЗАЦИЯ
   // lastX = e.offsetX
   // lastY = e.offsetY
   [lastX, lastY] = [e.offsetX, e.offsetY] // ES6 trick, Деструктуризация
   hue++ // на протяжении рисования переменная hue меняется, а с ней меняется цвет
   
   if (hue >= 360) {
     hue = 0; // Если пройден цветовой цикл, он обнуляется
   }
   if (ctx.lineWidth >= 200 || ctx.lineWidth <= 14) {
     direction = !direction; // Поменять направление изменения размера
   }
 
   if (direction) {
     ctx.lineWidth++
   } else {
     ctx.lineWidth--
   }
 
}



canvas.addEventListener('mousedown', (e) => {
   isDrawing = true; // ЗДЕСЬ ОБЯЗАТЕЛЬНА ТОЧКА С ЗАПЯТОЙ ПОТОМУ ЧТО ДАЛЕЕ ИДЁТ ДЕСТРУКТУРИЗАЦИЯ
   [lastX, lastY] = [e.offsetX, e.offsetY]
}) // Пока кнопка нажата, isDrawing = true, следовательно функция draw работает

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false) // Когда кнопка отпущена, isDrawing = false
canvas.addEventListener('mouseout', () => isDrawing = false)
