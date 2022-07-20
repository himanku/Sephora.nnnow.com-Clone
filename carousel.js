let span= document.querySelectorAll("span");
let div= document.querySelectorAll(".carousel_body>div");
let l=0;
span[1].onclick=()=>{
    l++;
    for(let i of div){
        if(l==0){
            i.style.left="0%";
        }
        if(l==1){
            i.style.left="-20%";
        }
        if(l==2){
            i.style.left="-30%";
        }
        if(l==3){
            i.style.left="-40%";
        }
        
        if(l>4){
            l=4;
        }
    }
}


span[0].onclick=()=>{
    l--;
    for(let i of div){
        if(l==0){
            i.style.left="0%";
        }
        if(l==1){
            i.style.left="-15%";
        }
        if(l==2){
            i.style.left="-30%";
        }
        if(l==3){
            i.style.left="-40%";
        }
        if(l<0){
            l=0;
        }
    }
}