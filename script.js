const dino = document.getElementById("dino");
const obtic = document.getElementById("obtic");

function jump() {
    if (dino.classList != "jump"){
    dino.classList.add("jump");

    setTimeout(function(){
        dino.classList.remove("jump");
    }, 300);
}}

let isRuning = setInterval(function() {

    //dino position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    //obtic position
    let obticleft = parseInt(window.getComputedStyle(obtic).getPropertyValue("left"));

    //setect collision
    if (obticleft < 50 && obticleft > 0 && dinoTop >= 140)
    {
        alert("Game Over!");
    }

}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});