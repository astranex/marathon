
function removeTransition(e) { // e - event, перебираемая методом forEach клавиша, для которой добавлен слушатель с этой функцией

    // console.log(e.propertyName)
    // https://www.w3schools.com/jsref/event_transition_propertyName.asp
    // Свойство propertyName возвращает имя свойства CSS, для которого предназначен эффект перехода.

    if (e.propertyName !== 'border-bottom-color') return; /* Если имя свойства, для которого предназначен transition 
    не равняется необходимому, мы выходим из функции. В ином случае: */

    e.target.classList.remove('playing'); // Удаляем с key класс playing

  }

  function playSound(e) { // e - event, перебираемая методом forEach клавиша, для которой добавлен слушатель с этой функцией

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // Передаём в атрибут data-key позицию нажатой клавиши (e.keyCode)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    // https://developer.mozilla.org/ru/docs/Learn/HTML/Howto/Use_data_attributes

    // console.log(e.keyCode)

    if (!audio) return; // Если audio не существует (на месте audio может быть и key) мы выходим из функции

    key.classList.add('playing'); // Добавляем объекту класс playing

    // Встроенные свойства объекта audio

    audio.currentTime = 0; // Задаём текущую позицию аудио-трека
    audio.play(); // Запускаем трек

  }

  const keys = Array.from(document.querySelectorAll('.key')) // Создаём массив из псевдомассива nodeList

  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  // Для каждого перебираемого элемента массива добавляем слушатель по окончанию css-свойства transition

  window.addEventListener('keydown', playSound); // Вешаем на глобальный объект window слушатель клавиш