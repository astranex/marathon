
function debounce(func, wait = 20, immediate = true) { // debounce функция (функция, задержка)
   var timeout;
   return function() {
     var context = this, args = arguments;
     var later = function() {
       timeout = null;
       if (!immediate) func.apply(context, args);
     };
     var callNow = immediate && !timeout;
     clearTimeout(timeout);
     timeout = setTimeout(later, wait);
     if (callNow) func.apply(context, args);
   };
 }

 const sliderImages = document.querySelectorAll('.slide-in') // Берём все изображения

 function checkSlide(e) {
   sliderImages.forEach(sliderImage => {

      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2

      // scrollY - возвращает число пикселей, на которое пролистали документ в данный момент по вертикали
      // innerHeight - высота (в пикселях) области просмотра окна браузера

      const imageBottom = sliderImage.offsetTop + sliderImage.height
      const isHalfShown = slideInAt > sliderImage.offsetTop
      const isNotScrolledPast = window.scrollY < imageBottom

      if (isHalfShown && isNotScrolledPast) {
         sliderImage.classList.add('active')
      } else {
         sliderImage.classList.remove('active')
      }

      // console.log(slideInAt)
   })
   // console.log(window.scrollY)
 }

 window.addEventListener('scroll', debounce(checkSlide)) // Добавляем слушатель на скролл к глобальному объекту windows

 // Накладываем debounce дабы игнорировать лишние реакции слушателя и не перегружать программу
