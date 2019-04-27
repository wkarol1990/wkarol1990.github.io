'use strict';
const PI = 3.14;
/* console.log("u mnie działa"); */

//ES5
/* function poleKola(r) {
    let poleKola = PI * r * r;

    console.log(poleKola);
} */


//ES6
const poleKola = (r, x) => {
    let poleKola = x * PI * r * r;

    return poleKola;
}

/* poleKola(25, 3);

poleKola(50, 5);

poleKola(100, 7); */

let rDuzego = 108;


let wynikDzialaniaFunkcji = poleKola(rDuzego, 10);

alert(wynikDzialaniaFunkcji);