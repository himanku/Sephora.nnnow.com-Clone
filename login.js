document.querySelector(".form2").addEventListener("submit", logIn);
let loginName=localStorage.getItem("Email") || "Login";
document.querySelector(".login-name").innerHTML=loginName;
    function logIn(event){
        event.preventDefault();
        let email=document.querySelector("#mail").value;
        let pass=document.querySelector("#pass").value;
        let user=JSON.parse(localStorage.getItem("data"));
        console.log(user);
        for(let i=0;i<=user.length-1;i++){
            if(email==user[i].Email && pass==user[i].Pass){
            localStorage.setItem("Email", user[i].Email);
            document.querySelector(".login-name").innerHTML=loginName;
            document.querySelector(".bg-modal2").style.display="none";
            document.querySelector(".bg-modal1").style.display="none";
            alert("Successfully Logged In");
            location.reload();
            return;
        } 
     }
     alert("Enter correct credentials");
 }

 document.querySelector(".close2").addEventListener("click", function(){
    document.querySelector(".bg-modal2").style.display="none";
    document.querySelector(".bg-modal1").style.display="none";
});
