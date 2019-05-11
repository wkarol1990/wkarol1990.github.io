'use strict';

// for ( let i=10 ; i>0 ; i--) {
//     console.log(i);
// }

let tablica = [ "Ksystian", "Monika", "Danuta" ];

// for (let i=0; i < tablica.length; ++i) {
//     console.log(tablica[i]);
// }

// const iteruj = ( element, index ) => {
//     console.log( "Element z Indexem: " + index + " ma wartość " + element);
// }

tablica.forEach( (element, index ) => {
    console.log( "Element z Indexem: " + index + " ma wartość " + element);
} );

/* pętla for in*/

// let person = {
//     name: 'Krystian',
//     age: 35
// }

// for(let key in person) {
//     console.log(person[key]);
// }

/* pętla for of */

// let iterable = [10, 20, 30];

// for (let value of iterable) {
//     value += 1;
//     console.log(value);
// }

/* pętla while*/

// let it = 0;
// while  ( it < 10) {
//     console.log(it);
//     it++;
// }

/* pętla do while*/

// let iter = 20;
// do {
//     console.log(iter);
//     iter++;
//     console.log(iter);
// } while ( iter < 10)

/* przerywanie pętli - break */

let a = 0;
while ( a < 10 ) {
    console.log(++a);

    if (a == 5) {
        break;
    }
}

/* przeskakiwanie do kolejnej iteracji - continue */

for ( let b = 0; b < 10; ++b ) {
    if ( b == 5 ) {
        continue;
    } else {
        console.log(b);
    }

    console.log("--");
}