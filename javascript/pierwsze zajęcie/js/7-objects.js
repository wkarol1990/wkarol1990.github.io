'use strict';

/* let kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe() {
        console.log(this.imie);
    }
}

let krystin = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe() {
        console.log(this.imie);
    }
}

kaja.przedstawOsobe();
krystin.przedstawOsobe();

console.log(kaja.wzrost);

kaja.wzrost = 200;

console.log(kaja);

let monetaZl = {
    promien: 20,
    nominal: 100,
    waga: 50,
    material: "złoto"
}

console.log(monetaZl.material); */

class Osoba {
    constructor(imie, nazwisko, wzrost, oczy) {
        this.imie = imie || "imie";
        this.nazwisko = nazwisko;
        this.wzrost = wzrost;
        this.oczy = oczy;
    }

    wyswietlInfo() {
        console.log("Imię: " + this.imie + "\n" + 
           "Nazwisko: " + this.nazwisko + "\n" + 
           "Wzrost: " + this.wzrost + "\n" + 
           "Oczy: " + this.oczy);
    }
}

let krystian = new Osoba('Krystian', 'Dziopa', 180, 'niebieskie');
let andrzej = new Osoba('', 'Szymański', 177, 'niebieskie');
andrzej.wzrost = 178;
andrzej.wyswietlInfo();
console.log(krystian, andrzej);