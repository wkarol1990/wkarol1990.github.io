'use strict';

let imiona = ['Monika', 'Krystian', 'Łukasz'];

imiona[3] = 'Tania';
imiona[2] = 'Ela';

imiona.push('Geralt');


console.log(imiona);

imiona.pop();
imiona.pop();

console.log(imiona);

console.log(imiona.unshift('Robert'));

console.log(imiona);

console.log(imiona.shift());

console.log(imiona);

console.log(imiona.length);

let imionaStr = imiona.join(":");
console.log(imionaStr);

imiona.reverse();
console.log(imiona);

imiona.unshift("Zenek");

console.log(imiona);

imiona.sort();

console.log(imiona);