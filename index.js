let body=document.getElementById("body");
let button=document.getElementById("button");
let colour=['red','green','blue','orange','tomato','aqua'];
let backgroundColour=document.getElementById("background-colour");

button.onclick=fun;

function fun(){
    let a=Math.floor(Math.random()*colour.length);
    backgroundColour.innerText=colour[a].toUpperCase();
    body.style.backgroundColor=colour[a];
}

