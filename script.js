let navbar =document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = ()=>{
     navbar.classList.toggle('active');
     searchForm.classList.remove('active');
     cartItem.classList.remove('active');
    }
let cartItem =document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = ()=>{
     cartItem.classList.toggle('active');
     navbar.classList.remove('active');
     searchForm.classList.remove('active');
    }
   let searchForm=document.querySelector('.search-form');
   document.querySelector('#search-btn').onclick=()=>{
       searchForm.classList.toggle('active');
       navbar.classList.remove('active');
       cartItem.classList.remove('active');
   }
   window.onscroll =()=>{
       navbar.classList.remove('active');
       searchForm.classList.remove('active');
      // cartItem.classList.remove('active');
   }
   let productItems=document.querySelectorAll('.product');
   for(pi of productItems){
    pi.addEventListener('click',
    function(e){addCart(e.target.parentElement.nextElementSibling.childNodes[1].src,
        e.target.parentElement.parentElement.lastElementChild.lastElementChild.innerText);}) ; }
   
    let menuItems=document.querySelectorAll('#menu .btn');
   for(mi of menuItems){
        mi.addEventListener('click',
        function(e){addCart(e.target.parentElement.firstElementChild.src,e.target.previousElementSibling.innerText);}) ; 
    
   
   }
  
   function addCart(image,price){ 
   let cart=document.createElement('div'),
    attr =document.createAttribute('class');
    attr.value= 'cart-item';
    cart.setAttributeNode(attr);

    let delIcon=document.createElement('span');
    attr =document.createAttribute('class');
    attr.value= 'fas fa-times';
    delIcon.setAttributeNode(attr);
    delIcon.addEventListener('click',
    (e)=>e.target.parentElement.remove()
    );
    

    let cartImage=document.createElement('img');
    attr =document.createAttribute('src');
    attr.value= `${image}`;
    cartImage.setAttributeNode(attr);
    
    
    let content=document.createElement('div');
    attr =document.createAttribute('class');
    attr.value= 'content';
    content.setAttributeNode(attr);
 
    let itemPrice=document.createElement('div');
    attr =document.createAttribute('class');
    attr.value= 'price';
    itemPrice.setAttributeNode(attr);
    itemPrice.innerHTML=`${price}`
    content.appendChild(itemPrice);
    cart.appendChild(delIcon);
    cart.appendChild(cartImage);
    cart.appendChild(content);
   cartItem.appendChild(cart);
   }
