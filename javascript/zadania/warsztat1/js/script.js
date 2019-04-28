'use strict';


let klik = document.querySelector("#klik");


const ustawTlo = () => {
    let pierwszy = document.querySelector("#pierwszy");
    console.log(pierwszy);

    let drugi = document.querySelector("#drugi");
    console.log(drugi);

    pierwszy.style.backgroundColor = "red";
    drugi.style.backgroundColor = "yellow";
};

klik.addEventListener("click", ustawTlo);

console.log(ustawTlo);