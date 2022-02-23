//Get DOM Elements
const menuToggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

//Event Listner
//Listen to click on toggle function
menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})
// 2. Show the Modal
open.addEventListener('click', () => {
    modal.classList.add('show-modal')
});

// 3. Close the Modal
close.addEventListener('click', () => {
    modal.classList.remove('show-modal')
});

// 4. Close the Modal on Click Outside Modal
window.addEventListener('click', e => {
    e.target === modal ? modal.classList.remove('show-modal') : false
});
 
