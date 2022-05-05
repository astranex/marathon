
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }, { name: 'Jay', age: 4 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular

console.log('hello') // Обычное использование лога

// Interpolated

console.log('Hello I am a %s string!', 'interpolation') // %s озвращает следующее промежуточное значение

// Styled

console.log('%c I am some great text ', 'font-size: 20px') // %c позволяет использовать стили в консоли
console.log('%c I am some great text ', 'font-size: 20px; color: #e7e7e7')
console.log('%c I am some great text ', 'background: red; font-weight: bold; font-size: 20px')
console.log('%c I am some great text ', 'background: red; font-weight: bold; font-size: 20px; text-shadow: 2px 1px 0 blue; font-family: Arial;')

// warning!

console.warn('OH NOOO!') // Предупреждение (стиль предупреждения)

// Error :|

console.error('I am error!') // Ошибка (стиль ошибки)

// Info

console.info('%cInteresting fact about', 'color: yellow') // Информация

// Testing

console.assert(1 === 1, 'That is wrong!') 

const p = document.querySelector('p')

console.assert(p.classList.contains('ouch'), 'That is wrong!')

// Если выражение в первом аргументе правильное, то ничего не происходит, если неправильное, высвечивается ошибка со вторым аргументом

// clearing

// console.clear() // Очищает консоль

// Viewing DOM Elements

console.log(p)
console.dir(p) // Отображает список свойств объекта

// Grouping together

console.group('Dogs') // Группирует логи, создаёт вложенный список
  
  dogs.forEach(dog => {
    console.groupCollapsed(dog.name) // groupCollapse создаёт "закрытую" группу по умолчанию
      console.log(`This is ${dog.name}`)
      console.log(`${dog.name} is ${dog.age} years old`)
      console.log(`${dog.name} is ${dog.age * 7} dog years old`)
    console.groupEnd()
  })

console.groupEnd() // Конец группировки

// counting

console.count('Wes') // Инкрементирует и подсчитывает число определенной сущности
console.count('Wes')
console.count('Sam')
console.count('Wes')
console.count('Sam')

// timing

console.time('fetching data') // Подсчитывает время за которое происходит определенная передача, вычисление
fetch('https://api.github.com/users/wesbos')
   .then(data => data.json())
   .then(data => {
      console.timeEnd('fetching data')
      console.log(data)
   })

// table

console.table(dogs) // Таблица