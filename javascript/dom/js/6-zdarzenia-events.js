'use strict';

let parSecond = document.querySelector("#parSecond");
console.log(parSecond);

let parWParSecond = document.getElementById("parWParSecond");
console.log(parWParSecond);

const klikDiv = (e) => {
    console.log("Kliknięto DIV");
}

const klikParagraf = (e) => {
    e.stopPropagation();
    console.log("Kliknięto PARAGRAF");
}

parSecond.addEventListener("click", klikDiv);
parWParSecond.addEventListener("click", klikParagraf);
 
// const klikAlert = (e) => {
//     e.preventDefault();
//     alert("Kliknięto DIVa :)");
//     console.log(e);
// }

// parSecond.onclick = klikAlert;

// parSecond.addEventListener('click', klikAlert);

// let link = document.querySelector('.link');
// link.addEventListener('click', klikAlert);

