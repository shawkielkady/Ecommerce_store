let log_name=document.getElementById("log-name");
let log_pass=document.getElementById("log-pass");
let signin=document.getElementById("signin");
let logName=localStorage.getItem('username');
let password=localStorage.getItem('pass');
signin.addEventListener('click',function(e){
    e.preventDefault();
    if(log_name.value ==='' ||log_pass.value ===''){
        alert("miss data");
    }
    else{
        if( logName && 
            logName.trim()===log_name.value.trim() && 
            password && 
            password===log_pass.value.trim()){
                setTimeout(()=>{
                    window.location='index.html';
                } , 1500);
            }
            else{
                console.log('failed');
            }
    }
});