'use strict'
let burgerMenu = document.querySelector('.burger-menu');
let navItems = document.querySelector('.nav-items');

burgerMenu.addEventListener('click',event => {
    event.preventDefault();
    navItems.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})
