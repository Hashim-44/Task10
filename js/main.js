var loginEmailInput = document.getElementById('signinEmail');
var loginPasswordInput = document.getElementById('signinPassword');
var signupAnchor = document.getElementById('signUpA');
var loginBtn = document.getElementById('loginBtn');


var users = [];

if (localStorage.getItem("users")!= null) {
    users = JSON.parse(localStorage.getItem("users"))
}

function login() {
    var loginEmail = loginEmailInput.value
    var loginPassword = loginPasswordInput.value
if (loginEmail=='' || loginPassword =='') {
    document.getElementById('incorrect').innerHTML='Please fill all inputs'
    return
};


if (
    loginUser(loginEmailInput.value, loginPasswordInput.value ) ) {
    window.location.href ='home.html'
}
else{
    document.getElementById('incorrect').innerHTML='Incorrect email or password'
}



}

function loginUser(email, password) {
    for (var i =0; i<users.length; i++){
        if (users[i].email === email && users[i].password === password) {
            localStorage.setItem("userName", users[i].name);
            return true;
        }
    }
    return false
}

loginBtn.addEventListener('click',function(){
    login()
})

signupAnchor.addEventListener('click',function(){
    window.location.href ='signup.html'
})