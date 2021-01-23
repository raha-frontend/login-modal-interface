const open = document.querySelector('.open');
const exit = document.querySelector('.exit');
const wrapper = document.querySelector('.wrapper');
const formSubmit = document.querySelector('.form-submit');
const login = document.querySelector('.login');
const password = document.querySelector('.password');
const shadowElement = document.querySelector('.shadow');

function showModal() {
    wrapper.classList.add('wrapper-show');
    shadowElement.style.display = 'block';
}

function hideModal() {
    shadowElement.style.display = 'none';
    wrapper.classList.remove('wrapper-show');
}

open.addEventListener('click', function() {
    showModal();
});

exit.addEventListener('click', function() {
    hideModal();
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
            hideModal();
        }, 2000);
    }
})

shadowElement.addEventListener('click', function() {
    hideModal();
});

window.addEventListener('keyup', function(event) {
    if (event.keyCode === 27) {
        hideModal();
    }
})
