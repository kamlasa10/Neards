var btn = document.querySelector('.write-us__btn');
var popup = document.querySelector('.modal-write-us');
var close = document.querySelector('.modal-write-us__close');
var name = popup.querySelector('.modal-write-input');

btn.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  name.focus();

});
close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
});

$(document).ready(function(){
  $('.slider').bxSlider();
});