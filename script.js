const open = document.querySelector('.open');
const exit = document.querySelector('.exit');
const wrapper = document.querySelector('.wrapper');
const formSubmit = document.querySelector('.form-submit');
const login = document.querySelector('.login');
const password = document.querySelector('.password');

open.addEventListener('click', function() {
    wrapper.classList.add('wrapper-show');
});

exit.addEventListener('click', function() {
    wrapper.classList.remove('wrapper-show');
});

formSubmit.addEventListener('click', function(e) {
    e.preventDefault();

    if (!login.value || !password.value) {
        alert('Необходимо заполнить поля')
    } else {
        formSubmit.disabled = true;
        setTimeout(function() {
            alert('Форма отправлена');
            login.value = '';
            password.value = '';
            formSubmit.disabled = false;
        }, 2000);
    }
})