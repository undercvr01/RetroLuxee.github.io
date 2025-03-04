// IMPORT AREA

/* TABLE OF CONTENTS:

Author: Catherine Grace Labrador
Section: AM11
Last Update: March 01, 2025

NOTE: Refer to the long green lines to know which sections you are in
0.) VARIABLES
1.) MAIN CODE
2.) FUNCTIONS

*/
//**********************************************Variables*************************************************//
let c1Section = document.getElementsByClassName("cl-1")[0];
let para1 = c1Section.getElementsByTagName("p");
let head1 = c1Section.getElementsByTagName("h2");
let contain = document.getElementsByClassName("cl-container");

//images
let index = 0;
let img1 = c1Section.getElementsByTagName("img");
let imgval1 = img1.length;
let aside1 = c1Section.getElementsByClassName("imgwrap-1")[0];

//toggable container
let toggle1 = 1;
let toggle2 = 1;
let hidden1 = document.getElementById("cl-hidden1");
let hidden2 = document.getElementById("cl-hidden2");
let hide1 = document.getElementById("cl-cont-1");
let hide2 = document.getElementById("cl-cont-2");

//toggable sidebar
let toggle3 = false;
let hide3 = document.getElementById("toggablemenu");
let hidden3 = document.getElementById("cl-cont-3");
let set_sigma;
let set_sigma2;
// let index2 = 1;

//*******************************************************MAIN CODE***************************************************

//Sliding images function on section1
window.addEventListener("scroll", function(){
if(window.scrollY < 300){
        myFunc();
}
});
setInterval(slideImgFunc1, 5000);

//follow sticky text on section1
// window.addEventListener("scrollend", myFunc2);

//toggable image on container/last section
hidecontainerFunc1();
hidecontainerFunc2();
hidecontainerFunc3();
hide1.addEventListener("click", function(){
       toggle1++;  
       hidecontainerFunc1();  
});
hide2.addEventListener("click", function(){
        toggle2++;
        hidecontainerFunc2();
});

//skibidi ohio gyatt omsim

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


//*******************************************************functions*********************************************************//

function hidecontainerFunc1(){
        if (toggle1%2!=0){
                hidden1.style.display = "none";
        } else {
                hidden1.style.display = "block";
        }
}
function hidecontainerFunc2(){
        if (toggle2%2!=0){
                hidden2.style.display = "none";
        } else {
                hidden2.style.display = "block";
        }
}

function hidecontainerFunc3(){
        if (toggle3 ==  false){
                hidden3.style.display = "none"; 
        }else {
                hidden3.style.display = "block";
        }
}

function slideImgFunc1(){
index++;
if (index>=imgval1){
        index = 0;
}

aside1.style.transform = `translateX(${-index * 500}px)`;
}

function myFunc() {

        /* 
        document.querySelector(".cl-2").innerHTML= "Test check";
        STATUS: window scrolling works
        */
        
        let scrollfunc = window.scrollY;

        for(let i = 0 ;i< para1.length; i++){
        para1[i].style.transform = `translateY(${scrollfunc + ((i+1)*3)}px)`;       
        } /* PROBLEM: IT STICKS TOGETHER AT THE END
        */
        head1[0].style.transform =`translateY(${scrollfunc + 5}px)`;
};

