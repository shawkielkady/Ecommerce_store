//elemnts
let username=localStorage.getItem('username');
let usermail=localStorage.getItem('email');
let products=JSON.parse(localStorage.getItem('products')) || product;
let myproduct=products.filter((i)=>i.isMe==='Y');

//variables
let userDiv= document.getElementById('userName');
let mailDiv= document.getElementById('email');
let mylength=document.querySelector('.length span');
userDiv.innerHTML=username;
mailDiv.innerHTML=usermail;
mylength.innerHTML=myproduct.length;