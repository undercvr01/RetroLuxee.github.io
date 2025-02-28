// IMPORT AREA

//*******************Variables******************
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
// let index2 = 1;

//***************MAIN CODE*******************

//Sliding images function on section1
window.addEventListener("scroll", function(){
if(window.scrollY < 300){
        myFunc();
}
});
setInterval(slideImgFunc1, 5000);

//follow sticky text on section1
window.addEventListener("scrollend", myFunc2);

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
hide3.addEventListener("mouseenter", function(){
        toggle3 = true;
        hidecontainerFunc3();
});
hidden3.addEventListener("mouseover", function(){
        toggle3 = true;
        hidecontainerFunc3();
});
hidden3.addEventListener("mouseenter", function(){
        toggle3 = true;
        hidecontainerFunc3();
});
hidden3.addEventListener("mouseleave", function(){
        toggle3 = false;
        hidecontainerFunc3();
});

//***************functions******************

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
// function hidecontainerFunc3(){
//         if (toggle3 == false){
//                 animationtest();
//         }else if(toggle3 == true) {
//                 hidden3.style.display = "block";
        
//         }else if(toggle3==null){
//                 hidden3.style.display = "none";
//         }
// }
// let test1;
// function animationtest() {
//         let pos = 0;
//         let x = 1;
//         clearInterval(test1);
//         test1 = setInterval(() =>{

//                 if (pos>-100){
//                         pos= pos-10;
//                         x = x-0.2
//                         hidden3.style.transform = `translateX(${pos}px)`;
//                         hidden3.style.opacity = x;
                        
//                 }else if(toggle3==true){
//                         clearInterval(test1);
//                 }
//                 else{
//                         clearInterval(test1);
//                         hidden3.style.display = "none";
//                 }
//         }, 20);
// }
// if (toggle3==true){
//         clearTimeout(mygay);
//         hidden3.style.opacity = 1;
//         index2 = 1;
// }
// function hide(){
        
//         if(index2 >= 0){         
//                 hidden3.style.opacity = index2;
//                 index2 = index2 - 0.1;
//                 mygay = setTimeout(hide, 200);
//         }else{
//                 hidden3.style.display = "none";
//                 index2 = 1 ;
//         }
       
        
// }

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

function myFunc2(){

        /* 
        document.querySelector(".cl-2").innerHTML= "";
        STATUS: it works
        */
}

