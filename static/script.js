document.addEventListener('DOMContentLoaded', function () {
    const emailForm = document.getElementById('emailForm');
    const makeEmailInput = document.getElementById('makeEmail');
    const makePwInput = document.getElementById('makePw');
    const checkPwInput = document.getElementById('checkPw');

    makeEmailInput.addEventListener('click', moveMakeEmailPlh);
    makePwInput.addEventListener('click', moveMakePwPlh);
    checkPwInput.addEventListener('click', moveCheckPwPlh);

});

async function funSignup(event) {
    event.preventDefault();
    const makeEmailInput = document.getElementById('makeEmail');
    const makePwInput = document.getElementById('makePw');
    const checkPwInput = document.getElementById('checkPw');

    const username = makeEmailInput.value;
    const password = makePwInput.value;
    const confirmPassword = checkPwInput.value;
    if (password !== confirmPassword) {
        alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
        return;
    }
    const data = {
        "username": username,
        "password": password
    };

    await POSTRequest('http://pcs.pah.kr:1127/signup', JSON.stringify(data))
    // await fetch('/signup', {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(data)
    // })
    //     .then(response => response.json())
    //     .then(result => {
    //         console.log(result);
    //     })
    //     .catch(error => {
    //         console.error('에러남 좃댐:', error);
    //     });

    makePwInput.type = "password";
    checkPwInput.type = "password";
};

// function signup(userName, password) {
//     console.log(`${userName} ${password}`);
//     // fetch("http://pcs.pah.kr:1127/signup", {
//     //     method: "post",
//     //     headers: {
//     //         "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify({
//     //         "username": userName,
//     //         "password": password,
//     //     }),
//     // })
//     // .then((response) => response.json())
//     // .then((result) => console.log("결과: ", result))
//     // .catch((error) => console.error("에러 발생: ", error));
//     let http = new XMLHttpRequest();
//     let url = 'http://pcs.pah.kr:1127/signup';
//     http.open('POST', url);

//     //Send the proper header information along with the request
//     http.setRequestHeader('Content-type', 'application/json');

//     http.onreadystatechange = function () { //Call a function when the state changes.
//         if (http.readyState == 4 && http.status == 200) {
//             alert(http.responseText);
//         }
//     }
//     http.send(JSON.stringify({
//         "username": userName,
//         "password": password,
//     })
//     )
// }

// function emailInput(email) {
//     localStorage.setItem("email", email)
// }

// function passwordInput() {
//     let password = document.getElementById("password").value
//     console.log(password)
//     signup(localStorage.getItem("email"), password)
// }

// checkbox.addEventListener("click", function () { //비밀번호 보이게하기

//     let pwInput = document.querySelector(".password");
//     let checkBox = document.querySelector("#checkbox");

//     if (checkBox.checked) {
//         pwInput.type = 'text';
//     }
//     else {
//         pwInput.type = 'password';
//     }
// });

// checkbox.addEventListener("click", function () { //비밀번호 보이게하기

//     let pwInput = document.querySelector(".password2");
//     let checkBox = document.querySelector("#checkbox");

//     if (checkBox.checked) {
//         pwInput.type = 'text';
//     }
//     else {
//         pwInput.type = 'password';
//     }
// });

// window.addEventListener('DOMContentLoaded', function moveCheckPwPlh() {
//     let checkPwInput = document.getElementById('checkPw');
//     let checkPwFieldset = document.getElementById('checkPwFieldset');
//     let checkPwLegend = document.getElementById('checkPwLegend');

//     checkPwInput.addEventListener('focus', function () {
//         checkPwInput.classList.add('focusCheckPwInput');
//         checkPwInput.classList.remove('blurCheckPwInput')
//         checkPwInput.placeholder = '';
//         checkPwLegend.classList.add('focusCheckPwLegend');
//         checkPwLegend.innerHTML = '확인';
//         checkPwFieldset.classList.add('focusCheckPwFieldset');
//     })

//     checkPwInput.addEventListener('blur', function () {
//         checkPwInput.classList.remove('focusCheckPwInput');
//         checkPwInput.classList.add('blurCheckPwInput');
//         checkPwInput.placeholder = '확인';
//         checkPwLegend.classList.remove('focusCheckPwLegend');
//         checkPwLegend.innerHTML = '&nbsp';
//         checkPwFieldset.classList.remove('focusCheckPwFieldset');
//     })
// })

// window.addEventListener('DOMContentLoaded', function moveMakePwPlh() {
//     let makePwInput = document.getElementById('makePw');
//     let makePwFieldset = document.getElementById('makePwFieldset');
//     let makePwLegend = document.getElementById('makePwLegend');

//     makePwInput.addEventListener('focus', function () {
//         makePwInput.classList.add('focusMakePwInput');
//         makePwInput.classList.remove('blurMakePwInput')
//         makePwInput.placeholder = '';
//         makePwLegend.classList.add('focusMakePwLegend');
//         makePwLegend.innerHTML = '비밀번호';
//         makePwFieldset.classList.add('focusMakePwFieldset');
//     })

//     makePwInput.addEventListener('blur', function () {
//         makePwInput.classList.remove('focusMakePwInput');
//         makePwInput.classList.add('blurMakePwInput');
//         makePwInput.placeholder = '비밀번호';
//         makePwLegend.classList.remove('focusMakePwLegend');
//         makePwLegend.innerHTML = '&nbsp';
//         makePwFieldset.classList.remove('focusMakePwFieldset');
//     })
// })

// window.addEventListener('DOMContentLoaded', function moveMakeEmailPlh() {
//     let makeEmailInput = document.getElementById('makeEmail');
//     let makeEmailFieldset = document.getElementById('makeEmailFieldset');
//     let makeEmailLegend = document.getElementById('makeEmailLegend');

//     makeEmailInput.addEventListener('focus', function () {
//         makeEmailInput.classList.add('focusMakeEmailInput');
//         makeEmailInput.classList.remove('blurMakeEmailInput')
//         makeEmailInput.placeholder = '';
//         makeEmailLegend.classList.add('focusMakeEmailLegend');
//         makeEmailLegend.innerHTML = '사용자 이름';
//         makeEmailFieldset.classList.add('focusMakeEmailFieldset');
//     })

//     makeEmailInput.addEventListener('blur', function () {
//         makeEmailInput.classList.remove('focusMakeEmailInput');
//         makeEmailInput.classList.add('blurMakeEmailInput');
//         makeEmailInput.placeholder = '사용자 이름';
//         makeEmailLegend.classList.remove('focusMakeEmailLegend');
//         makeEmailLegend.innerHTML = '&nbsp';
//         makeEmailFieldset.classList.remove('focusMakeEmailFieldset');
//     })
// })


// window.addEventListener('DOMContentLoaded', function moveEmailPlh() {
//     let emailInput = document.getElementById('email');
//     let legend = document.getElementById('emailLegend');
//     let fs = document.getElementById('emailFieldset');

//     emailInput.addEventListener('focus', function () {
//         emailInput.classList.add('focusEmailInput');
//         emailInput.classList.remove('blurEmailInput')
//         emailInput.placeholder = '';
//         legend.classList.add('focusLegend');
//         legend.innerHTML = '이메일 또는 휴대전화';
//         fs.classList.add('focusFieldset');
//     })

//     emailInput.addEventListener('blur', function () {
//         emailInput.classList.remove('focusEmailInput');
//         emailInput.classList.add('blurEmailInput');
//         emailInput.placeholder = '이메일 또는 휴대전화';
//         legend.classList.remove('focusLegend');
//         legend.innerHTML = '&nbsp';
//         fs.classList.remove('focusFieldset');
//     })
// })

// window.addEventListener('DOMContentLoaded', function movePwPlh() {
//     let pwInput = document.getElementById('password');
//     let pwLegend = document.getElementById('pwLegend');
//     let pwFs = document.getElementById('pwFieldset');

//     pwInput.addEventListener('focus', function () {
//         pwInput.classList.add('focusPwInput');
//         pwInput.classList.remove('blurPwInput');
//         pwInput.placeholder = '';
//         pwLegend.classList.add('focusPwLegend');
//         pwLegend.innerHTML = '비밀번호 입력';
//         pwFs.classList.add('focusPwFieldset');
//     })

//     pwInput.addEventListener('blur', function () {
//         pwInput.classList.remove('focusPwInput');
//         pwInput.classList.add('blurPwInput');
//         pwInput.placeholder = '비밀번호 입력';
//         pwLegend.classList.remove('focusPwLegend');
//         pwLegend.innerHTML = '&nbsp';
//         pwFs.classList.remove('focusPwFieldset');
//     })
// })