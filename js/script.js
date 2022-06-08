document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.header__hamburger')
  const menu = document.querySelector('.header__menu')

  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu__active')
  })
})
