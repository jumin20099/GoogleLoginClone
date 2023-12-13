checkbox.addEventListener("click", function () { //비밀번호 보이게하기

    let pwInput = document.querySelector(".password");
    let checkBox = document.querySelector("#checkbox");

    if (checkBox.checked) {
        pwInput.type = 'text';
    }
    else {
        pwInput.type = 'password';
    }
});

window.addEventListener('DOMContentLoaded', function movePwPlh() {
    let pwInput = document.getElementById('password');
    let pwLegend = document.getElementById('pwLegend');
    let pwFs = document.getElementById('pwFieldset');

    pwInput.addEventListener('focus', function () {
        pwInput.classList.add('focusPwInput');
        pwInput.classList.remove('blurPwInput');
        pwInput.placeholder = '';
        pwLegend.classList.add('focusPwLegend');
        pwLegend.innerHTML = '비밀번호 입력';
        pwFs.classList.add('focusPwFieldset');
    })

    pwInput.addEventListener('blur', function () {
        pwInput.classList.remove('focusPwInput');
        pwInput.classList.add('blurPwInput');
        pwInput.placeholder = '비밀번호 입력';
        pwLegend.classList.remove('focusPwLegend');
        pwLegend.innerHTML = '&nbsp';
        pwFs.classList.remove('focusPwFieldset');
    })
})