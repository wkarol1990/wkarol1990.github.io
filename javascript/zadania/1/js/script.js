'use strict';

let a=1;
let b=2;
let c=3;

const iloczyn = (x, y, z) => {
    let wynikIloczynu = x * y * z;
    
    return wynikIloczynu;
}

let wynik = iloczyn(a, b, c);

console.log(wynik);