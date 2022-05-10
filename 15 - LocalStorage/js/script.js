
const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const items = JSON.parse(localStorage.getItem('items')) || [] // Массив item из local storage или массив будущих или текущих item 

function addItem(e) {
   e.preventDefault() // Отключаем для submit реакцию по умолчанию
   const text = (this.querySelector('[name=item]')).value // querySelector возвращает элемент, а value его текстовое значение

   const item = {
      text,
      done: false
   }

   items.push(item)
   populateList(items, itemsList)

   localStorage.setItem('items', JSON.stringify(items))
   this.reset() // reset это метод для формы, который восстанавливает ей стандартные значения // В нашем случае очищает её
   // console.log(item)
}

function populateList(plates = [], platesList) {
   platesList.innerHTML = plates.map((plate, i) => {
      return `
         <li>
            <input type='checkbox' data-index=${i} id='item-${i}' ${plate.done ? 'checked' : ''}></input>
            <label for='item-${i}'>${i + 1}. ${plate.text}</label>
         </li>
      `
   }).join('') // Преобразуем в строку
}

function toggleDone(e) {
   if (!e.target.matches('input')) return // Выходим из функции
   const el = e.target
   const index = el.dataset.index
   items[index].done = !items[index].done

   localStorage.setItem('items', JSON.stringify(items))
   populateList(items, itemsList)
   // console.log(e.target)
}

addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)
populateList(items, itemsList)



