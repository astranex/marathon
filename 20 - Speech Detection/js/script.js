
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition // В случае если первый операнд отсутствует, он будет заменяться аналогом

/*

Интерфейс Распознавание голоса Web Speech API является интерфейсом контроллера для сервиса распознавания; 
который так же перехватывает событие SpeechRecognitionEvent (en-US), отправленное сервисом распознавания.

*/

const recognition = new SpeechRecognition()
recognition.interimResults = true // Возвращаем промежуточные результаты спича, благодаря чему сможем увидеть перерендер параграфа
recognition.lang = 'ru-RU' // Можно строго выбрать язык по умолчанию

let p = document.createElement('p')
const words = document.querySelector('.words')
words.appendChild(p) // Добавляет узел в конец списка дочерних элементов указанного родительского узла.

recognition.addEventListener('result', e => {
  // console.log(e.results)
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('') 
    // Делаем строку из массива, который будет равняться произнесённым словам

    const coolScript = transcript.replace(/круто|крутой|крутецки|кайф|кайфово|балдёж|обалдеть|крутяк/gi, '😎')
    p.textContent = coolScript

    // Если мы говорим одно из входящих в регулярку слов, оно преобразовывается в смайл

    if (e.results[0].isFinal) {
      p = document.createElement('p')
      words.appendChild(p)
    }

    // if (transcript.includes('крутой таск')) {
    //   console.log('😎')
    // }

    // if (transcript.includes('Какая сегодня погода')) { Вариант использования
    //   Функция получения погоды
    // } 

  console.log(transcript)
})

recognition.addEventListener('end', recognition.start)
recognition.start()