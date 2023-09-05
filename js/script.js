const btnMobile = document.querySelector('button.btn-mobile-menu')
const navMobile = document.querySelector('header.menu nav')

function toggleMenu() {
  btnMobile.classList.toggle('active')
  navMobile.classList.toggle('active')
}
btnMobile.addEventListener('click', toggleMenu)

const headerTopMenu = document.querySelector('header.menu')
console.log(headerTopMenu)
document.addEventListener('scroll', function () {
  const scrollDistance = window.scrollY

  if (scrollDistance >= 50) {
    headerTopMenu.classList.add('scrolled')
  } else {
    headerTopMenu.classList.remove('scrolled')
  }
})
document.addEventListener('DOMContentLoaded', function () {
  console.log('Script.js está sendo executado.')

  // Verifique se os elementos do header estão acessíveis
  var headerElement = document.getElementById('seu-elemento-do-header')
  console.log(headerElement) // Verifique se isso retorna o elemento corretamente

  // Seu código JavaScript que manipula elementos do header aqui
})
const swiperHeroIndex = new Swiper('.swiper-hero-index', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  }
})

const swiperGroup = new Swiper('.swiper-group .swiper', {
  loop: true,

  navigation: {
    nextEl: '.swiper-group  .swiper-button-next',
    prevEl: '.swiper-group  .swiper-button-prev'
  }
})
