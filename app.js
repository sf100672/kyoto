const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.list-nav');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
})

const allLinks = document.querySelectorAll('.item-nav');

allLinks.forEach(item => {
    item.addEventListener('click', () => {
       menu.classList.toggle('active')
    })
})
