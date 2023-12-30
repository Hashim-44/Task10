var logoutBtn = document.getElementById('logOut');
var userName = localStorage.getItem("userName");
document.getElementById('userName').innerHTML= "Welcome " + userName ;

logoutBtn.addEventListener('click', function(){
    window.location.href = 'index.html'
});