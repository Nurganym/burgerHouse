const modal = document.getElementById('myModal');
const btn = document.getElementById('modal-btn');
const span = document.getElementsByClassName("close")[0];

btn.addEventListener('click', function() {
  modal.style.display = 'block'
  modal.classList.remove("animation-close");
})
span.addEventListener('click', function() {
  modal.classList.add('animation-close');
  modal.style.display = 'none'
})

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
})


// setTimeOut(modal.style.display='none'),10000);

const modalMobile = document.getElementById('modal-mobile');
const btnMobile = document.getElementById('mobile-btn');
const spanMobile = document.getElementsByClassName("close-mobile")[0];

btnMobile.addEventListener('click', function() {
  modalMobile.style.display = 'block'
})
spanMobile.addEventListener('click', function() {
  modalMobile.style.display = 'none'
})

