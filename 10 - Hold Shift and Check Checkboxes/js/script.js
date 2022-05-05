
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]') // Создаём коллекцию чекбоксов

let lastChecked

function handleCheck(e) {

   let inBetween = false
   if (e.shiftKey && this.checked) {
      checkboxes.forEach(checkbox => {
         console.log(checkbox)
         if (checkbox === this || checkbox === lastChecked) { 
            inBetween = !inBetween // Выделяем всё, что между первым и последним чекбоксом
            console.log('IN BETWEEN')
         } 

         if (inBetween) {
            checkbox.checked = true // Отмечаем все чекбоксы, которые внутри выделения
         }
      })
   }

   lastChecked = this
   // console.log(lastChecked)
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck)) // Добавляем слушатели на каждый чекбокс

console.log(checkboxes)