window.addEventListener('DOMContentLoaded', function moveEmailPlh() {
    let emailInput = document.getElementById('email');
    let legend = document.getElementById('emailLegend');
    let fs = document.getElementById('emailFieldset');

    emailInput.addEventListener('focus', function () {
        emailInput.classList.add('focusEmailInput');
        emailInput.classList.remove('blurEmailInput')
        emailInput.placeholder = '';
        legend.classList.add('focusLegend');
        legend.innerHTML = '이메일 또는 휴대전화';
        fs.classList.add('focusFieldset');
    })

    emailInput.addEventListener('blur', function () {
        emailInput.classList.remove('focusEmailInput');
        emailInput.classList.add('blurEmailInput');
        emailInput.placeholder = '이메일 또는 휴대전화';
        legend.classList.remove('focusLegend');
        legend.innerHTML = '&nbsp';
        fs.classList.remove('focusFieldset');
    })
})