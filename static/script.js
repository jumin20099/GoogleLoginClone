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

const data = JSON.stringify({
    username: "jumin20099",
    password: "SUFtU2V4S2luZw=="
})

const xhr = new XMLHttpRequest();

xhr.open("post", 'http://pcs.pah.kr:1127/signup');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(data);