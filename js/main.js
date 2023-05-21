let list=document.querySelector('.cart-product ');
let cart_list=document.querySelector('.cart-product .pros');
let badge =document.querySelector('.badge');
let cart=document.querySelector('.shopping-cart');
let products = document.querySelector(".products");
let productt=product;
let drawproducts;
drawproducts=function(productts=[]){
    let products = document.querySelector(".products");
    let productsui=productts.map((item)=>{
        return `
                            <div class="product" style='border:${item.isMe==='Y'?'1px solid green':''}'>
                            <img src="${item.imgsrc}" alt="img" class="">
                            <div class="product-info">
                            <a href='product.html' onclick='savedata(${item.id})'>${item.title}</a>
                            <p>${item.disc}.</p>
                            <span>size : ${item.size}</span>
                            ${item.isMe==='Y' ? "<button onclick='editProduct("+item.id+")' >Edit Product</button>":''}
                            </div>
                            <div class="product-actions">
                                <button onclick='addedtocart(${item.id})' class="">Add to Cart</button>
                                <i style='color:${item.liked==true?'red':''}' onclick='addedtofav(${item.id})' class="far fa-heart"></i>
                            </div>
                        </div>
        `;
    });
    products.innerHTML = productsui.join('');
}
// ||:if didnot find in local storage take (ptoductt)
drawproducts(JSON.parse(localStorage.getItem('products'))|| productt);
let itemsincart=localStorage.getItem('productsincart') ? JSON.parse(localStorage.getItem('productsincart')):[];
if(itemsincart){
    itemsincart.map((item)=>{
        cart_list.innerHTML+=`<p>${item.title}${item.count}</p>`;
    });
    badge.style.display='block';
    let cartLength=document.querySelectorAll('.cart-product p');
    badge.innerHTML=cartLength.length;
}
function addedtocart(id){
    let productt =JSON.parse(localStorage.getItem('products'))|| productt;
   let choosenItem =productt.find((n)=>{
        return n.id===id
    });
    let item=itemsincart.some((item)=> item.id ===choosenItem.id);
    if(item){
        itemsincart=itemsincart.map((p)=>{
        if(p.id===choosenItem.id)p.count++;
        return p;
        });
    }
    else{
        itemsincart.push(choosenItem)
    }
    cart_list.innerHTML='';
    itemsincart.forEach((n)=>{cart_list.innerHTML+=`<p>${n.title}${n.count}</p>`;})
    //itemsincart=[...itemsincart,choosenItem];
    //let uniqueProducts=getUniArray(itemsincart,"id")
    localStorage.setItem('productsincart',JSON.stringify(itemsincart));
    badge.style.display='block';
    let cartLength=document.querySelectorAll('.cart-product p');
    badge.innerHTML=cartLength.length;
}
function checkuser(){
    if(localStorage.getItem('username')){
        window.location='cart.html'
    }
    else{
        window.location='login.html'
    }
}
function getUniArray(arr,filteredid){
let unique=arr.map((item)=>item[filteredid]).
map((item,i,finale)=>finale.indexOf(item)===i && i)
.filter(item=>arr[item])//return items without false;
.map(item=>arr[item]);
return unique;
}
function opencart(){
    if(cart_list.innerHTML != ""){
        if( list.style.display==='block'){
            list.style.display='none';
        }
        else{
            list.style.display='block';
        }
    }
    else {

    }
}
function savedata(id){
localStorage.setItem('productid',id)
}
let input=document.getElementById('search-input');
input.addEventListener('keyup',(e)=>{
    let products=JSON.parse(localStorage.getItem('products')) || product;
    search(e.target.value,products);
    if(e.target.value.trim()==''){
        drawproducts(products);
    }
});
function search(title,myArray){
  /*  for(let i=0;i<myArray.length;i++){
        if(myArray[i].title===title){
            console.log(myArray[i]);
        }
    }*/
    let findItem=myArray.filter((n)=>n.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
    drawproducts(findItem);
}
//search('Hoodie',JSON.parse(localStorage.getItem('products')));
/* if(e.keyCode==13){
    search(e.target.value,JSON.parse(localStorage.getItem('products')));
}*/
//Add to favourite
let favitems=localStorage.getItem('favitems') ? JSON.parse(localStorage.getItem('favitems')):[];
function addedtofav(id){
    if(localStorage.getItem('username')){
    let choosenItem =productt.find((n)=>{
         return n.id===id
     });
     choosenItem.lked=true;
     favitems=[...favitems,choosenItem];
     let uniqueProducts=getUniArray(favitems,"id")
     localStorage.setItem('favitems',JSON.stringify(uniqueProducts));
    productt.map((item)=>{
     if (item.id===choosenItem.id){
        item.liked=true;
     }});
     localStorage.setItem('products',JSON.stringify(productt))
     drawproducts(productt)
    }
    else{
        window.location='login.html'
    }
 }
 //Filter Items
 let itemsfilter=document.getElementById('size-filter');
 itemsfilter.addEventListener('change',filterItems);
 function filterItems(e){
    let products=JSON.parse(localStorage.getItem('products')) || product;
    let val=e.target.value;
    if(val ==='all'){
        drawproducts(products);
    }
    else{
        products=products.filter((item)=>item.size === val)
        drawproducts(products);
    }
 }
function editProduct(id){
localStorage.setItem("productEdit",id)
window.location='editproduct.html'
}