document.querySelector(".form1").addEventListener("submit", signUp);
    let arr=JSON.parse(localStorage.getItem("data")) || [];
    function signUp(event){
        event.preventDefault();
        let obj={
        Email: document.querySelector("#email_id").value,
        Phone: document.querySelector("#phone_no").value,
        Pass: document.querySelector("#password").value,
    };
    if(obj.Email=="" || obj.Phone=="" || obj.Pass==""){
        alert("Fill all input fields");
        return;
    }
    arr.push(obj);
    localStorage.setItem("data",JSON.stringify(arr));
    alert("Sign Up Successful");
    document.querySelector(".bg-modal2").style.display="flex";
    document.querySelector(".bg-modal1").style.opacity="0";
}

document.querySelector(".person").addEventListener("click", function(){
    document.querySelector(".bg-modal1").style.display="flex";
});
document.querySelector(".close1").addEventListener("click", function(){
    document.querySelector(".bg-modal1").style.display="none";
});

