let products=JSON.parse(localStorage.getItem('products')) || product;
console.log(products);
let productid=JSON.parse(localStorage.getItem('productEdit'));
let getProduct=products.find((item)=>item.id===productid);
let namee=document.getElementById('name');
let Disc=document.getElementById('Disc');
let classForm=document.querySelector('.classForm');
let selcetemsize=document.getElementById('size');
let imgup=document.getElementById('img-input');
let productImg;
let productSizeValue;
namee.value=getProduct.title;
Disc.value=getProduct.disc;
selcetemsize.value=getProduct.size;
//imgup.value=getProduct.imgsrc;
//Events
selcetemsize.addEventListener('change',editProductSize)
imgup.addEventListener('change',updateImg)
classForm.addEventListener('submit',updateProduct)
//functions
function editProductSize(e){
productSizeValue=e.target.value;
}
function updateProduct(e){
    e.preventDefault();
    getProduct.title=namee.value;
    getProduct.size=selcetemsize.value;
    getProduct.disc=Disc.value;
    getProduct.imgdrc=productImg;
    localStorage.setItem('products',JSON.stringify(products));
   
}


function updateImg(){
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