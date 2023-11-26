
checkbox.addEventListener("click", function() {

    let pwInput = document.querySelector("#password");
    let checkBox = document.querySelector("#checkbox");

    if (checkBox.checked){
        pwInput.type = 'text';
    }
    else{
        pwInput.type = 'password';
    }
});