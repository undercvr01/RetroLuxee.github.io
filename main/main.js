let toggle3 = false;
let hide3 = document.getElementById("toggablemenu");
let hidden3 = document.getElementById("cl-cont-3");
let set_sigma;
let set_sigma2;

hide3.addEventListener("click", function(){
    hidden3.classList.remove("show-1");
    if (toggle3==false){
            toggle3 = true;
            hidecontainerFunc3();
            clearTimeout(set_sigma);
              clearTimeout(set_sigma2)
    }else{
            toggle3 = false;
            set_sigma = setTimeout(() =>{
                    hidden3.classList.add("show-1");
            }, 300);  
            set_sigma2 = setTimeout(hidecontainerFunc3, 2500);
    }
});

function hidecontainerFunc3(){
    if (toggle3 ==  false){
            hidden3.style.display = "none"; 
    }else {
            hidden3.style.display = "block";
    }
}