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

    let obtictop = getComputedStyle(obtic).top;
    let value = Math.floor(Math.random() * 5);
    if (obtictop === '0px'){
        
        if (value == 1)
            obtic.classList.add("obtic1");
        if (value == 2)
            obtic.classList.add("obtic2");
    }
    console.log(obticleft, 'sd');

    if (obticleft < 0)
    {
        console.log("jdfhdjksfhdksjfhdjksfh");
        if (value === 1)
            obtic.classList.remove("obtic1");
        if (value === 2)
            obtic.classList.remove("obtic2");
    }
    //setect collision
    // if (obticleft < 50 && obticleft > 0 && dinoTop >= 140)
    // {
    //     alert("Game Over!");
    // }
}, 10);

// let addobtic = setInterval(function() {
//     if (obtic.classList != "move"){
//         obtic.classList.add("move");
//     }
//     else {
//         obtic.classList.remove("move");
//     }
// }, 15000);

document.addEventListener("keydown", function (event) {
    jump();
});