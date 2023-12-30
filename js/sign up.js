var signupInputName = document.getElementById("signupName");
var signupInputEmail = document.getElementById("signupEmail");
var signupInputPassword = document.getElementById('signupPassword');
var signupBtn = document.getElementById('signupBtn');
var  loginAnchor = document.getElementById('signinAnchor');
var myAlert = document.getElementById("exist")

var users = [];

if (localStorage.getItem("users")!= null) {
    users = JSON.parse(localStorage.getItem("users"))
}

function signup() {
    var user = {
        name: signupInputName.value,
        email: signupInputEmail.value,
        password: signupInputPassword.value,
    };
    if (signupInputName.value =="" || signupInputEmail.value == "" || signupInputPassword.value == ""
    ) {
    document.getElementById('exist').innerHTML="All inputs is required"
    return
};

    
    if (
        newEmail(signupInputEmail.value) && mailValid(signupInputEmail.value)) {
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users))
        clearForm();
        myAlert.classList.remove('text-danger')
        myAlert.classList.add('text-success')
        document.getElementById('exist').innerHTML="success"


    }
    else
    {
        myAlert.classList.add('text-danger')
        myAlert.classList.remove('text-success')
        document.getElementById("exist").innerHTML="Email already exist or invalid"
    }

   
}
signupBtn.addEventListener('click', function(){
    signup();
});

function newEmail(email) {
    for(var i=0; i<users.length; i++){
if (users[i].email === email  ) {
    return false;

    
}


    }
    

    return true
   
    }

    function mailValid(email) {
    
        var regexMail =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return regexMail.test(email)
        
    }
    
function clearForm() {
    signupInputEmail.value=""
    signupInputName.value=""
    signupInputPassword.value=""
}
loginAnchor.addEventListener("click", function () {
    window.location.href = "index.html"
    
})