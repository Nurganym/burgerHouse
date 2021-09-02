const menuItemPreview = document.querySelector('.menu-item__preview');
const menuItemContent = document.querySelector('.menu-item__content');

menuItemPreview.addEventListener('click', function(){
  if(menuItemContent.classList.contains('menu-item__content--opened')) {
    menuItemContent.classList.remove('menu-item__content--opened');
  } else {
    menuItemContent.classList.add('menu-item__content--opened');
  }
})

const menu1ItemPreview = document.querySelector('.menu1-item__preview');
const menu1ItemContent = document.querySelector('.menu1-item__content');

menu1ItemPreview.addEventListener('click', function(){
  if(menu1ItemContent.classList.contains('menu1-item__content--opened')) {
    menu1ItemContent.classList.remove('menu1-item__content--opened');
  } else {
    menu1ItemContent.classList.add('menu1-item__content--opened');
  }
})

const menu2ItemPreview = document.querySelector('.menu2-item__preview');
const menu2ItemContent = document.querySelector('.menu2-item__content');

menu2ItemPreview.addEventListener('click', function(){
  if(menu2ItemContent.classList.contains('menu2-item__content--opened')) {
    menu2ItemContent.classList.remove('menu2-item__content--opened');
  } else {
    menu2ItemContent.classList.add('menu2-item__content--opened');
  }
})

const menu3ItemPreview = document.querySelector('.menu3-item__preview');
const menu3ItemContent = document.querySelector('.menu3-item__content');

menu3ItemPreview.addEventListener('click', function(){
  if(menu3ItemContent.classList.contains('menu3-item__content--opened')) {
    menu3ItemContent.classList.remove('menu3-item__content--opened');
  } else {
    menu3ItemContent.classList.add('menu3-item__content--opened');
  }
})

const menu4ItemPreview = document.querySelector('.menu4-item__preview');
const menu4ItemContent = document.querySelector('.menu4-item__content');

menu4ItemPreview.addEventListener('click', function(){
  if(menu4ItemContent.classList.contains('menu4-item__content--opened')) {
    menu4ItemContent.classList.remove('menu4-item__content--opened');
  } else {
    menu4ItemContent.classList.add('menu4-item__content--opened');
  }
})

const menu5ItemPreview = document.querySelector('.menu5-item__preview');
const menu5ItemContent = document.querySelector('.menu5-item__content');

menu5ItemPreview.addEventListener('click', function(){
  if(menu5ItemContent.classList.contains('menu5-item__content--opened')) {
    menu5ItemContent.classList.remove('menu5-item__content--opened');
  } else {
    menu5ItemContent.classList.add('menu5-item__content--opened');
  }
})

const menu6ItemPreview = document.querySelector('.menu6-item__preview');
const menu6ItemContent = document.querySelector('.menu6-item__content');

menu6ItemPreview.addEventListener('click', function(){
  if(menu6ItemContent.classList.contains('menu6-item__content--opened')) {
    menu6ItemContent.classList.remove('menu6-item__content--opened');
  } else {
    menu6ItemContent.classList.add('menu6-item__content--opened');
  }
})