'use strict';

let kontoLukasza = 1000000;

const zrobZakupy = (zaIle) => {
    let kontoNatalii = 2000000;

    let ileZostaloNaKoncie = kontoNatalii - zaIle;

    return ileZostaloNaKoncie;
}

console.log(zrobZakupy(500000));


// uzywamy zmienne lokalne - wewnatrz funkckji, nie globalne, ktore poza funkcji//