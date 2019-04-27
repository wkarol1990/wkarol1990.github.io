'use strict';

let wzrostMateusz = 190;
let wzrostOlgi = 190;

if ( wzrostOlgi < wzrostMateusz ) {
    console.log("Olga jest niższa :");
}

if ( wzrostOlgi > wzrostMateusz ) {
    console.log("Olga jest wyższa :");
} else {    
    console.log("Olga jest niższa");
}

if ( wzrostOlgi > wzrostMateusz ) {
    console.log("Olga jest wyższa :");
} else if ( wzrostOlgi == wzrostMateusz ) {
    console.log("Olga tak wysoka jak Mateusz");
} else {    
    console.log("Olga jest niższa");
}


let kolor = 'zielony';

switch (kolor) {
    case 'czerwony':
        console.log('Kolor czerwony')
        break;
    case 'zielony':
        console.log('Kolor zielony')
        break;
    case 'niebieski':
        console.log('Kolor niebieski')
        break;
    default:
        console.log('Inny kolor')
}
