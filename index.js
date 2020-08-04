// we need an event listener just attaches to an element (like a light switch) - in this case a DOM element, our button(s)!
// DOM elements = anything you see on the page on the document (divs, buttons, tables, links--any HTML element!divs, buttons, tables, links--any HTML element!)
// you can switch out "click" or be other types of DOM events (keydown, mouseover), any sort of event that a user can do, you can capture user actions using event listeners!

/** 
  Creating interactive buttons: Open Modal
  
  0) Add 'display: none' to '#overlay' - we want to hide it initially!
  1) Use document.getElementById to target "open-modal"
  2) Add an event listener of "click"
  3) Use document.getElementById to target "overlay" and change the style.display to "block"
**/

const overlay = document.querySelector('.overlay')
overlay.style.display = 'none'

const openModal = document.querySelector('#open-modal')

const overlayToBlock = () => {
  overlay.style.display = 'block'
}

openModal.addEventListener( 'click', overlayToBlock )


/** 
  Creating interactive buttons: Close Modal
  
  1) Use document.getElementById to target "close-modal"
  2) Add an event listener of "click"
  3) Use document.getElementById to target "overlay" and change the style.display to "none"
**/

const closeModal = document.querySelector('#close-modal')

const overlayToNone = () => {
  overlay.style.display = 'none'
}

closeModal.addEventListener('click', overlayToNone)