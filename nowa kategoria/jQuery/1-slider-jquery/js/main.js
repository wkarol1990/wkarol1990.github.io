$(() => {
    // zmienne
   const slideShow = $('.slide-show');
   const singleSlide = $('.single-slide');
   const slideCount = singleSlide.length;
   const slideWidth = 100 / slideCount;
   let indexCounter = 0;

   // ustawiamy dynamicznie szerokość kontenera
   slideShow.css('width', slideCount * 100 + '%');
   
   // ustawiamy dynamicznie szerokość obrazków
   singleSlide.each(function(index) {
       $(this).css({
           'width': slideWidth + '%',
           'margin-left': index * slideWidth + '%'
       });
   });

   // podpinamy eventy click na przyciski
   $('.prev-slide').click(function() {
       slide(indexCounter - 1);
   });

   $('.next-slide').click(function() {
       slide(indexCounter + 1);
   });

   function slide(newIndex) {
       if (newIndex < 0 || newIndex >= slideCount) {
           return;
       }
       
       // ukrywamy napis
       const currentTitle = $('.slide-caption').eq(newIndex);
       currentTitle.fadeOut();

       const marginLeft = newIndex * (-100) + '%';

       // wywołanie animacji
       slideShow.animate({
           'margin-left': marginLeft
       }, 1000, function() {
           currentTitle.fadeIn();
       }); 

       indexCounter = newIndex;      
   }
});