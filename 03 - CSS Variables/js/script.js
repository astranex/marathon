
const inputs = document.querySelectorAll('.controls input'); // Создаём коллекцию из всех control инпутов

function handleUpdate() { // Обновление 
  const suffix = this.dataset.sizing || ''; // dataset предоставляет доступ к просмотру пользовательских атрибутов (data-*)

  // suffix равен указанному в инпуте атрибуту dataset-sizing или ничему в случае если атрибут отсутствует 

  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // Задаём свойство для стилей коренного элемента документа (html)
} 

// переписывается root, в котором находятся css-переменные
// this.name - имя редактируемого инпута, this.value - его значение + суффикс

inputs.forEach(input => input.addEventListener('change', handleUpdate)); // Добавляем слушатели при наведении и изменении списка инпутов
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));