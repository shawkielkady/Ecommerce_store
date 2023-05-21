let links = document.getElementById('links');
let user_info = document.getElementById('user-info');
let user_name = document.getElementsByClassName('user-name');
let userName = localStorage.getItem('username');
if(userName){
    links.remove();
    links.style.display='none';
    user_info.style.display='block';
    user_info.innerHTML=userName;
}