let p1 = Math.random();
let p2 = Math.random();

p1 = Math.floor(p1 * 6) + 1;
p2 = Math.floor(p2 * 6) + 1;


let dicePic1 = './images/dice'+ p1 + '.png';
let dicePic2 = './images/dice'+ p2 + '.png';

console.log(dicePic1);
console.log(dicePic2);

console.log();

document.querySelector(".img1").setAttribute("src", dicePic1);
document.querySelector(".img2").setAttribute("src", dicePic2);

let winner = '';

if (p1 > p2) {
    winner = "Player 1 Win!";
} else if (p2 > p1){
    winner = "Player 2 Win!";
} else {
    winner = "It's draw!";
}

console.log(winner);

document.querySelector("h1").innerHTML = winner;
