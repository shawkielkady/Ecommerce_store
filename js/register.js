let username=document.getElementById("name");
let email=document.getElementById("email");
let pass=document.getElementById("pass");
let signup_btn=document.getElementById("signup");
signup_btn.addEventListener('click',function(e){
    e.preventDefault(e);
    if(username.value ==='' ||email.value ===''||pass.value ==='' ){
        alert("miss data");
    }
    localStorage.setItem('username',username.value);
    localStorage.setItem('email',email.value);
    localStorage.setItem('pass',pass.value);
    setTimeout(()=>{
        window.location='login.html';
    },1500)

})