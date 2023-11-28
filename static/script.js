window.onload = function MoveEmailPlh(){
    let emailInput = document.getElementById('email');
    let legend = document.getElementById('emailLegend');
    let fs = document.getElementById('emailFieldset');
    
    emailInput.addEventListener('focus', function(){
        emailInput.classList.add('focusEmailInput');
        emailInput.classList.remove('blurEmailInput')
        emailInput.placeholder = ''
        legend.classList.add('focusLegend');
        legend.innerHTML = '이메일 또는 휴대전화'
        fs.classList.add('focusFieldset');
    })
    
    emailInput.addEventListener('blur', function(){
        emailInput.classList.remove('focusEmailInput');
        emailInput.classList.add('blurEmailInput');
        emailInput.placeholder = '이메일 또는 휴대전화'
        legend.classList.remove('focusLegend');
        legend.innerHTML = '&nbsp'
        fs.classList.remove('focusFieldset');
    })
}

window.addEventListener('DOMContentLoaded', function movePwPlh(){
    let pwInput = document.getElementById('password');
    let pwLegend = document.getElementById('pwLegend');
    let pwFs = document.getElementById('pwFieldset');
    
    pwInput.addEventListener('focus', function(){
        pwInput.classList.add('focusPwInput');
        pwInput.classList.remove('blurPwInput')
        pwInput.placeholder = ''
        pwLegend.classList.add('focusPwLegend');
        pwLegend.innerHTML = '비밀번호 입력'
        pwFs.classList.add('focusPwFieldset');
    })
    
    pwInput.addEventListener('blur', function(){
        pwInput.classList.remove('focusPwInput');
        pwInput.classList.add('blurPwInput');
        pwInput.placeholder = '비밀번호 입력'
        pwLegend.classList.remove('focusPwLegend');
        pwLegend.innerHTML = '&nbsp'
        pwFs.classList.remove('focusPwFieldset');
    })
})




// checkbox.addEventListener("click", function(){

//     let pwInput = document.querySelector("#password");
//     let checkBox = document.querySelector("#checkbox");

//     if(checkBox.checked){
//         pwInput.type = 'text';
//     }
//     else{
//         pwInput.type = 'password';
//     }
// });

// const data = JSON.stringify({
//         username: "jumin20099",
//         password: "SUFtU2V4S2luZw=="
//     })
    
//     const xhr = new XMLHttpRequest();
    
//     xhr.open("post", 'http://pcs.pah.kr:1127/signup');
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.send(data);
