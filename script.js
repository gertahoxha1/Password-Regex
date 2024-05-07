
function checkPassword() {
    let result = document.getElementById("result");
    let passInput = document.getElementById("password").value;
    if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.,]).{8,}$/.test(passInput)) {
        result.innerHTML = "Password is strong";
        result.style.color = 'green';
    }
    else {
        result.innerHTML = "Password is weak";
        result.style.color = 'red';
    }
   
}
