let products = document.querySelector(".products");
let noproducts = document.querySelector(".noproducts");
/*if(cartproduct){
    productcart=JSON.parse(cartproduct);
    drawcartproducts(productcart);
    console.log(productcart);
}*/
function drawcartproducts(allproducts=[]){
    if(JSON.parse(localStorage.getItem('favitems')).length===0){
        noproducts.innerHTML='There is No Items !!' 
    }
    let cartproduct=JSON.parse(localStorage.getItem('favitems')) || allproducts;
    let products = document.querySelector(".products");
    let productsui=cartproduct.map((item)=>{
        return `
                            <div class="product">
                            <img src="${item.imgsrc}" alt="" class="">
                            <div class="product-info">
                                <a href='product.html' class="">Hoodie</a>
                                <p>${item.disc}.</p>
                                <span>size : Large</span></br>
                                <span> Count : ${item.count}</span>
                            </div>
                            <div class="product-actions" style='right: -31%;'>
                                <button onclick='removefromcart(${item.id})' class="">Remove From Cart</button>
                            </div>
                        </div>
        `;
    });
    products.innerHTML = productsui;
}
drawcartproducts();
function removefromcart(id){
    if(localStorage.getItem('favitems')){
        let items= JSON.parse(localStorage.getItem('favitems'));
        let filtereditems = items.filter((items)=>items.id !== id);
        localStorage.setItem('favitems',JSON.stringify(filtereditems));
        drawcartproducts(filtereditems);
    }
}