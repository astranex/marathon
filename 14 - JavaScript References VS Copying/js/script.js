    
    // start with strings, numbers and booleans

    let age = 100 
    let age2 = age 
    console.log(age, age2)

    age = 200
    console.log(age, age2) // Примитивы не являются ссылочными, они копируются и затем становятся полностью самостоятельными

    let name = 'Vitaly'
    let name2 = name
    console.log(name, name2)

    // При этом важную роль играет порядок

    name = 'Vladimir'
    console.log(name, name2)
    
    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = players
    console.log(players)
    console.log(team)

    // В свою очередь массивы являются подвидом объектом, а объекты являются ссылочным типом

    // You might think we can just do something like this:
    team[3] = 'Lux'

    // Таким образом при любом изменении содержимого одного массива, скопированный массив также будет меняться, так как они ссылаются в памяти к единому массиву

    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!

    const team2 = players.slice(2, 3) // Для избирательного или полного копирования можно использовать slice, так как он возвращает новый массив
    const team3 = players.slice(0, -1) 
    const team4 = players.slice() 

    console.log(team2)
    console.log(team3)
    console.log(team4)

    // one way

    // or create a new array and concat the old one in

    // Кроме того, можно использовать concat для пустого массива (также как assign для пустого объекта)
    const team5 = [].concat(players)

    // or use the new ES6 Spread

    const team6 = [...players] // Новый, лаконичный и правильный вариант, где spread позволяет нам взять каждый элемент массива в качестве значений и загрузить его в наш массив

    const team7 = Array.from(players) // Или создавать новый массив таким образом 

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    const captain = person
    captain.number = 99

    // how do we take a copy instead?

    const cap2 = Object.assign({}, person, { number: 99, age: 12 })

    console.log(person) 
    console.log(captain) // Одинаковы вместе с person
    console.log(cap2)

    console.log(person) // Нетронут assign'ом

    // We will hopefully soon see the object ...spread

    // const cap3 = {...person} // Такая конструкция невозможна

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

    const wes = {
      name: 'Wes',
      age: 100,
      social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
      }
    }

    console.log(wes)
    const dev = Object.assign({}, wes)

    // Скопированный вложенный объект social всё ещё является ссылочным // dev.social === name.social

    const dev2 = JSON.parse(JSON.stringify(wes)) // Нерекомендуемый, но работающий фикс

    // Мы превращаем объект в примитив, а примитив обратно преобразовываем в объект с новыми ссылками