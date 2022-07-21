document.querySelector(".form2").addEventListener("submit", logIn);
// let loginName=JSON.parse(localStorage.getItem("email")) || "login";
// document.querySelector(".login-name").innerHTML=loginName;
    function logIn(event){
        event.preventDefault();
        let email=document.querySelector("#mail").value;
        let pass=document.querySelector("#pass").value;
        let user=JSON.parse(localStorage.getItem("data"));
        console.log(user);
        for(let i=0;i<=user.length-1;i++){
            if(email==user[i].Email && pass==user[i].Pass){
            localStorage.setItem("email",email);
            document.querySelector(".login-name").innerHTML=email;
            alert("Successfully Logged In");
            document.querySelector(".bg-modal2").style.display="none";
            document.querySelector(".bg-modal1").style.display="none";
            return;
        } 
     }
     alert("Enter correct credentials");
 }

 document.querySelector(".close2").addEventListener("click", function(){
    document.querySelector(".bg-modal2").style.display="none";
});