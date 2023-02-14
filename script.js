

let button1 = document.querySelector(".option-one");
let button2= document.querySelector(".option-two");
let fireDiv= document.querySelector(".option-one-screen");
let airDiv= document.querySelector(".option-two-screen");
let ending1= document.querySelector(".option-one-end");
let ending2= document.querySelector(".option-two-end");
let friends= document.querySelector(".friends");
let friends2 = document.querySelector(".friends2");
button1.onclick=function(){
    fireDiv.style.display="block";
};

button2.onclick=function(){
    airDiv.style.display="block";
};

friends.onclick=function(){
    ending1.style.display="block";
};

friends2.onmouseover=function(){
    ending2.style.display="block";
};

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
button1.onclick=function(){
fireDiv.style.display="block";
};

button2.onclick=function(){
airDiv.style.display="block";

};


INSERT_VARIABLE.onclick=function(){

};

*/


