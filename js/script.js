const btnMobile = document.querySelector('button.btn-mobile-menu')
const navMobile = document.querySelector('header.menu nav')

function toggleMenu() {
  btnMobile.classList.toggle('active')
  navMobile.classList.toggle('active')
}
btnMobile.addEventListener('click', toggleMenu)

const headerTopMenu = document.querySelector('header.menu')

document.addEventListener('scroll', function () {
  const scrollDistance = window.scrollY

  if (scrollDistance >= 50) {
    headerTopMenu.classList.add('scrolled')
  } else {
    headerTopMenu.classList.remove('scrolled')
  }
})

const swiper = new Swiper('.swiper-hero-index', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  }
})
