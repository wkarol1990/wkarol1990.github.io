'use srtict';

let jsonPracownicy = {
  "pracownicy":[
    {
      firstName: "Krystian", 
      lastName: "Dziopa"
    }, 
    {
      firstName: "Anna", 
      lastName: "Szapiel"
    },
    {
      firstName: "Piotr", 
      lastName: "Żmuda"
    }
  ]
}
console.log(jsonPracownicy);

for (let pracownik of jsonPracownicy.pracownicy) {
  console.log('Imie: ' + pracownik.firstName + ' Nazwisko: ' + pracownik.lastName);
}
