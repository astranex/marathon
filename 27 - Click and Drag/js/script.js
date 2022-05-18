
const slider = document.querySelector('.items')
let isDown = false
let startX
let scrollLeft

slider.addEventListener('mousedown', (e) => {
   isDown = true
   slider.classList.add('active')
   startX = e.pageX - slider.offsetLeft
   scrollLeft = slider.scrollLeft
   console.log(startX)
})

slider.addEventListener('mouseleave', () => {
   isDown = false
   slider.classList.remove('active')
})

slider.addEventListener('mouseup', () => {
   isDown = false
   slider.classList.remove('active')
})

slider.addEventListener('mousemove', (e) => {
   if (!isDown) return
   e.preventDefault()

   const x = e.pageX - slider.offsetLeft
   const walk = x - startX

   console.log(walk)
   slider.scrollLeft = scrollLeft - walk

   // console.log(isDown)
   // console.log(startX)

})