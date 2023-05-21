let namee=document.getElementById('name');
let Disc=document.getElementById('Disc');
let classForm=document.querySelector('.classForm');
let selcetemsize=document.getElementById('size');
let imgup=document.getElementById('img-input');
let productImg;
let productSizeValue;
//Events
selcetemsize.addEventListener('change',getProductSize)
imgup.addEventListener('change',uploadImg)
classForm.addEventListener('submit',CreateProduct)
//functions
function getProductSize(e){
productSizeValue=e.target.value;
}
function CreateProduct(e){
    e.preventDefault();
let allproducts=JSON.parse(localStorage.getItem('products')) ||product;
let nameIn=namee.value;
let discIn=Disc.value;
if(nameIn && discIn){
    let obj={
        id:allproducts ? allproducts.length+1 : 1,
        title:nameIn,
        disc:discIn,
        imgsrc:productImg,
        size:productSizeValue,
        count:1,
        isMe:'Y'
    }
    let newProducts=allproducts?[...allproducts,obj]:[obj];
    localStorage.setItem('products',JSON.stringify(newProducts));
    nameIn.value='';
    discIn.value='';
    selcetemsize.value='';
    setTimeout(()=>{
        window.location='index.html'
    },500)
}
else{
}
}
function uploadImg(){
    let file=this.files[0];
  /*  let types=['image/jpeg','image/png','image/jpg'];
    if(types.indexOf(file.types)==-1){
        alert('Not supported file')
        return;
    }   
    if(file.size > 2 * 1024 * 1024){
        alert('Not supported size')
        return;

    }  */
   // productImg=URL.createObjectURL(file);
   getFileBase64(file);
}
function getFileBase64(file){
    let reader= new FileReader();
    reader.readAsDataURL(file);
    reader.onload=function(){
    productImg=reader.result;
    }
}
