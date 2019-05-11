$('body')
  .find('.par2')
  .text('Tekst zmieniony w metodzie find()')
  .css('color', 'red');

let par2 = $('.par2');
par2.each(function(index, biezacyParagraf) {
  if (index === 0) {
      $(biezacyParagraf)
       .css('color', 'green')
       .text('Tekst zmieniony w metodzie each()');
  } else if (index === 1) {
      $(biezacyParagraf)
       .css('color', 'blue')
       .text('Tekst zmieniony w metodzie each()');
  } else if (index === 2) {
    $(biezacyParagraf)
     .css('color', 'yellow')
     .text('Tekst zmieniony w metodzie each()');
  }
})