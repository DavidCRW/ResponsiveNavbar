let toggle = false;
document.querySelector(".responsiveNav").addEventListener("click", () =>{
    toggle = !toggle;
    if(toggle){
        document.querySelector(".links").style.display = "block";
    }else{
        document.querySelector(".links").style.display = "none";
    }
})