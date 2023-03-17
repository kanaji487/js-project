let colorsList = ["#8a2be2","#9966cc","#384b59","#61001b","#255355","#468468","#777151","#f86749","#0f6180","#99cf00"];
let btn = document.getElementById('btn');
let color = document.querySelector('.color');

btn.addEventListener("click",function(){
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colorsList[randomNumber];
    color.textContent = colorsList[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random()*colorsList.length);
};