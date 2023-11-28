let p1 = Math.random();

p1 = Math.floor(p1 * 6) + 1;

let dicePic1 = './images/dice'+ p1 + '.png';

console.log(dicePic1)

document.querySelector(".dicer").setAttribute("src", dicePic1);

