const cartButton = document.querySelector('#btn-cont');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const closeBtn = document.querySelector('#closeBtn');

cartButton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);


function toggleModal() {
    modal.classList.toggle('activeModal');
}

new WOW().init();