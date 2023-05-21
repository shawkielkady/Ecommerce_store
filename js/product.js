let productsdata=JSON.parse(localStorage.getItem('products'))||product;
let productid=localStorage.getItem('productid');
let productdetails=productsdata.find((item)=>item.id==productid);
let item_product=document.querySelector('.item-product');
item_product.innerHTML=`<img src="${productdetails.imgsrc}" alt="" srcset="">
<h2>${productdetails.title}</h2>
<p>${productdetails.disc}.</p>
<span>${productdetails.size}</span></br>
<span>Count ${productdetails.count}</span>
<button onclick='editProduct(${productid})'>Edit Product</button>`
;
function editProduct(id){
    localStorage.setItem("productEdit",id)
    window.location='editproduct.html'
    }

