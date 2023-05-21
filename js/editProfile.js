//elemnts
let username=localStorage.getItem('username');
let usermail=localStorage.getItem('email');
//variables
let userDiv= document.getElementById('changname');
let mailDiv= document.getElementById('changemail');
let change_form= document.querySelector('.editProfileForm');
userDiv.value=username;
mailDiv.value=usermail;
change_form.addEventListener('submit',editProfilefun)
function editProfilefun(e){
    e.preventDefault();
    localStorage.setItem('username',userDiv.value);
    localStorage.setItem('email',mailDiv.value);
    window.location='profile.html'

}
