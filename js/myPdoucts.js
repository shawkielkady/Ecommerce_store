let productsDom = document.querySelector(".products");
let noproductsDom = document.querySelector(".noproducts");
let drawproducts;
drawproducts=function(product=[]){
   // let productsuiu = document.querySelector(".products");
   let products = JSON.parse(localStorage.getItem('products')) || product;
    let myProducts = products.filter(item => item.isMe==='Y');
    if(myProducts.length !=0){
    let productsui=myProducts.map((item)=>{
        return `
                            <div class="product" style='border:${item.isMe==='Y'?'1px solid green':''}'>
                            <img src="${item.imgsrc}" alt="img" class="">
                            <div class="product-info">
                            <a href='product.html' onclick='savedata(${item.id})'>${item.title}</a>
                            <p>${item.disc}.</p>
                            <span>size : ${item.size}</span>
                            ${item.isMe==='Y' ? "<button onclick='editProduct("+item.id+")' >Edit Product</button>":''}
                            </br>
                            ${item.isMe==='Y' ? "<button onclick='deleteProduct("+item.id+")' >Delete Product</button>":''}

                            </div>
                            <div class="product-actions">
                                <button onclick='addedtocart(${item.id})' class="">Add to Cart</button>
                                <i style='color:${item.liked==true?'red':''}' onclick='addedtofav(${item.id})' class="far fa-heart"></i>
                            </div>
                        </div>
        `;
    });
    productsDom.innerHTML = productsui.join('');
}
else{
    noproductsDom.innerHTML='No Products'
}
}
drawproducts(JSON.parse(localStorage.getItem('products')) || product);
function editProduct(id){
    localStorage.setItem("productEdit",id)
    window.location='editproduct.html'
    }
function deleteProduct(id){
    let products = JSON.parse(localStorage.getItem('products')) ;
    let myProducts = products.filter(item => item.isMe==='Y');
    let filteredProducts=myProducts.filter(i => i.id !== id);
    let clickedItem=myProducts.find(n=>n.id==id);
    products=products.filter(n=>n.id !== clickedItem.id);
    localStorage.setItem("products",JSON.stringify(products));
    drawproducts(filteredProducts);

    
}