'use strict'
let burgerMenu = document.querySelector('.burger-menu');
let navItems = document.querySelector('.nav-items');
let sendButton = document.querySelector('.send-button');
burgerMenu.addEventListener('click',event => {
    event.preventDefault();
    navItems.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})

sendButton.addEventListener('click',event =>{
    event.preventDefault();
})