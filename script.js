const open = document.querySelector('.open');
const exit = document.querySelector('.exit');
const wrapper = document.querySelector('.wrapper');

open.addEventListener('click', function() {
    wrapper.classList.add('wrapper-show');
});

exit.addEventListener('click', function() {
    wrapper.classList.remove('wrapper-show');
});