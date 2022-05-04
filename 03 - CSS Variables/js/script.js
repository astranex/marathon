
const inputs = document.querySelectorAll('.controls input'); // Создаём коллекцию из всех control инпутов

function handleUpdate() { // Обновление 
  const suffix = this.dataset.sizing || ''; // dataset предоставляет доступ к записи пользовательских атрибутов (data-*)
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // Задаём свойство для стилей коренного элемента документа (html)
}

// this.name - необходимый инпут, this.value - его значение, которое мы редактируем через суффикс

inputs.forEach(input => input.addEventListener('change', handleUpdate)); // Добавляем слушатели при наведении и изменении списка инпутов
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));