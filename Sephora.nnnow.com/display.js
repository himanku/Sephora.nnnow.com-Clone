display(ProductData);

  function display(ProductData){
    ProductData.forEach(function(elem){
    let el1 = document.createElement("div");
    el1.classList.add("cart-icon");
    let el2 = document.createElement("div");
    el2.classList.add("wish-icon");
    let el3 = document.createElement("div");
    el3.classList.add("wish-cart");
    let el4 = document.createElement("div");
    el4.classList.add("bestseller");
    let el5 = document.createElement("div");
    el5.classList.add("product-info");
    let el6 = document.createElement("div");
    el6.classList.add("product-image");
    let el7 = document.createElement("div");
    el7.classList.add("product-card");
    let image1=document.createElement("img");
    image1.setAttribute("src",elem.image_url);
    let image2 =document.createElement("img");
    image2.setAttribute("src",elem.best_img);
    let Best= document.createElement("h4");
    Best.innerText=elem.best;
    console.log(Best)
    let bag_img= document.createElement("img");
    bag_img.setAttribute("src", elem.bag_icon);
    bag_img.addEventListener("click", function(){
        addToCart(elem);
    })
    let shop_btn=document.createElement("p");
    shop_btn.innerText=elem.shop;
    let heart_img=document.createElement("img");
    heart_img.setAttribute("src", elem.heart_icon);
    heart_img.addEventListener("click", function(){
        addToWishlist(elem);
    })
    let fav_btn=document.createElement("p");
    fav_btn.innerText=elem.fav;
    let brandName =document.createElement("h4");
    brandName.classList.add("product-brand")
    brandName.innerText=elem.brand;
    let description=document.createElement("p");
    description.classList.add("product-short-description")
    description.innerText=elem.desc;
    let productPrice=document.createElement("p");
    productPrice.classList.add("price")
    productPrice.innerText="Rs. "+elem.price;
    let Offer=document.createElement("p");
    Offer.classList.add("offer")
    Offer.innerText=elem.offer;
    el1.append(bag_img,shop_btn);
    el2.append(heart_img,fav_btn);
    el3.append(el1,el2);
    el4.append(image2,Best,el3,brandName,description,productPrice,Offer);
    el5.append(el4);
    el6.append(image1);
    el7.append(el6,el5);
    document.querySelector(".carousel_body").append(el7);
  })
}

let cartLS=JSON.parse(localStorage.getItem("cart-page")) || [];
  
  function addToWishlist(product){
    for(let i=0;i<cartLS.length;i++){
      if(cartLS[i].unique===product.unique){
        alert("Product already in cart");
        return;
      }
    }
    cartLS.push(product);
    alert("Product added successfully");
    localStorage.setItem("cart-page",JSON.stringify(cartLS));
  }

  function addToCart(product){
    for(let i=0;i<cartLS.length;i++){
      if(cartLS[i].unique===product.unique){
        alert("Product already in cart");
        return;
      }
    }
    cartLS.push(product);
    alert("Product added successfully");
    localStorage.setItem("cart-page",JSON.stringify(cartLS));
  }