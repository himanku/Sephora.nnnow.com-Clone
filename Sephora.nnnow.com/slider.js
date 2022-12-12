let counter=1;
setInterval(function(){
    document.querySelector("#radio"+counter).checked=true;
    counter++;
    if(counter>7){
        counter=1;
    }
}, 3000);