'use strict';

let parFirst = document.getElementById('parFirst');
console.log(parFirst);

let linki = document.getElementsByClassName('superlink');
console.log(linki);

let linkiPoTagu = document.getElementsByTagName('a');
console.log(linkiPoTagu);

let divPoId = document.querySelector('#parSecond');
console.log(divPoId);

let pierwszyLinkPoSelektorze = document.querySelector('.superlink');
console.log(pierwszyLinkPoSelektorze);

let linkiPoSelektorze = document.querySelectorAll('.superlink');
console.log(linkiPoSelektorze);

linkiPoSelektorze.forEach( (link, i) => {
    console.log(link.outerHTML);
});

