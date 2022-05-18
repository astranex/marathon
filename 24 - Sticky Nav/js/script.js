const nav = document.querySelector('#main')
const topOfNav = nav.offsetTop

function fixNav() {
   console.log(topOfNav, scrollY)
   if (window.scrollY >= topOfNav) {
      document.body.style.paddingTop = nav.offsetHeight + 'px'
      document.body.classList.add('fixed-nav')
   } else {
      document.body.classList.remove('fixed-nav')
      document.body.style.paddingTop = '0px'
   }
}

window.addEventListener('scroll', fixNav)