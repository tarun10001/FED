var modal = document.getElementById("myModal");
var btn = document.getElementsByClassName("btnT");
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
    usernameEl.value = "";
    employeeIdEl.value = "";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


const usernameEl = document.querySelector('#username');
const employeeIdEl = document.querySelector('#employeeID');
const modalContent2 = document.querySelector('.modal_content2');
const modalContent3 = document.querySelector('.modal_content3');
const form = document.querySelector('#signup');
const small1 = document.querySelector('#small1');
const small2 = document.querySelector('#small2');


const showError = (input, message, small) => {
    input.classList.remove('success');
    input.parentElement.classList.add('error');
    small.textContent = message;
};

const hideError = (input) => {
    input.classList.add('success');
    input.parentElement.classList.remove('error');
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (usernameEl.value === "") {
        showError(usernameEl, 'Username cannot be blank.', small1);
    }
    else {
        hideError(usernameEl)
    }
    if (employeeIdEl.value === "") {
        showError(employeeIdEl, 'Employee ID cannot be blank.', small2);
    }
    else {
        hideError(employeeIdEl)
    }
    if (usernameEl.value && employeeIdEl.value) {
        modalContent2.innerHTML = "User Name :" + " " + usernameEl.value;
        modalContent3.innerHTML = "Employee ID :" + " " + employeeIdEl.value;
        modal.style.display = "block";
    }
});


const faq1 = document.getElementsByClassName('faq1');
for (i = 0; i < faq1.length; i++) {
    faq1[i].addEventListener("click", function () {
        this.classList.toggle('active');
    });
}


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 3,
    // spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }, speed: 700,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1300:
        {
            slidesPerView: 3,
            spaceBetween: 40
        }
    },
})