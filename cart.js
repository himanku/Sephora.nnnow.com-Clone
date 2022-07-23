let finalLS = JSON.parse(localStorage.getItem("cart-page")) || [];
let totalPrice = document.querySelector(".price-update");
let totalItems = document.querySelector(".total-items");
let cartTotal = document.querySelector(".cart-total");
let subTotal = document.querySelector(".sub-total>span:last-child");
let total;
display(finalLS);

function display(ProductData){
    document.querySelector(".main-left").innerHTML="";
    total=0;
    ProductData.forEach(function(elem,index){
        
        let el1=document.createElement("div");
        el1.classList.add("btns");
        let el2=document.createElement("div");
        el2.classList.add("prod-details");
        let el3=document.createElement("div");
        el3.classList.add("img");
        let el4=document.createElement("div");
        el4.classList.add("details");
        let el5=document.createElement("div");
        el5.classList.add("added-product");

        let el6=document.createElement("span");
        el6.classList.add("price-update");
        el6.innerText="Rs. "+elem.price;
        let el7=document.createElement("div");
        el7.classList.add("individual-price");
        let el8=document.createElement("div");
        el8.classList.add("quantity");


        let showTotal=document.createElement("h3");
        let inputTag=document.createElement("input");
        inputTag.defaultValue="1";
        cartQuantity=inputTag.value;
        inputTag.addEventListener("change", function(){
            change(elem);
        })
        let labelTag=document.createElement("label");
        labelTag.innerText="Qty: ";
        let brandName =document.createElement("p");
        brandName.innerText=elem.brand;
        let description=document.createElement("h6");
        description.innerText=elem.desc;
        let color=document.createElement("p");
        color.innerText="Color - 25 Coral Sunset Beige";
        let size=document.createElement("p");
        size.innerText="Size - 10 ML";
        let image1=document.createElement("img");
        image1.setAttribute("src",elem.image_url);

        let button1 = document.createElement("button");
        button1.innerText = "Move to Favourites";
        button1.addEventListener("click", function () {
            MoveFunc(elem,index);
        });
        let button2 = document.createElement("button");
        button2.innerText = "Remove";
        button2.addEventListener("click", function () {
            RemoveFunc(index);
        });

        showTotal.append(el6);
        el7.append(showTotal);
        el8.append(labelTag,inputTag);
        el1.append(button1, button2);
        el2.append(brandName,description,color,size,el1);
        el3.append(image1);
        el4.append(el3,el2);
        el5.append(el4,el8,el7);
        document.querySelector(".main-left").append(el5);
        total += Number(elem.price)*Number(cartQuantity);
        let disco=document.querySelector(".discount>span:last-child");
        let gst=document.querySelector(".GST>span:last-child");
        let delivery=document.querySelector(".delivery>span:last-child");
        let discount;
        let tax;
        let deliveryCharge;
        if(total>999){
            disco.innerText="-Rs. 100";
            discount=Number("-100");
            gst.innerText="Rs.46.5";
            tax=Number("46.5");
            delivery.innerText="Rs. 0";
            deliveryCharge=Number("0");
        }
        if(total<=999){
            disco.innerText="-Rs. 0";
            discount=Number("-0");
            gst.innerText="Rs.46.5";
            tax=Number("46.5");
            delivery.innerText="Rs. 50";
            deliveryCharge=Number("50");
        }
        subTotal.innerText="Rs. "+total;
        cartTotal.innerText="Rs. "+(total+discount+tax+deliveryCharge);
        totalItems.innerText=finalLS.length;
    })
}

function RemoveFunc(index){
    finalLS.splice(index,1);
    localStorage.setItem("cart-page",JSON.stringify(finalLS));
    display(finalLS);
    window.location.reload();
}

