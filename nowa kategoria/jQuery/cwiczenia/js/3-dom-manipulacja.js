// let paragrafy = $('p');
// console.log(paragrafy.text());

// paragrafy.text('Nowy tekst paragrafu');

// let paragrafyByHtml = $('p');
// console.log(paragrafyByHtml.html());

// paragrafyByHtml.html('<span>Treść z znacznika span</span>');

// let naglowek2 = $('#naglowek-2');
// naglowek2.prepend('Prependujemy treść | ');
// naglowek2.append(' | Apendujemy treść');

// naglowek2.before('Beforujemy treść | ');
// naglowek2.after(' | Afterujemy treść');

// naglowek2.empty();
// naglowek2.remove();

// naglowek2.replaceWith('<span> Span </span>'); // outerHTML in pure JS

// let paragrafy = $('p');
// paragrafy.css({
//     'background-color': 'green',
//     'font-size': '2em',
//     'color': 'yellow',
// });

let pierwszyParagraf = $('.par').eq(0);
console.log(pierwszyParagraf);

pierwszyParagraf.addClass('red');
pierwszyParagraf.removeClass('red');