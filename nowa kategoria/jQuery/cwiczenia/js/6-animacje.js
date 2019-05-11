// $('#naglowek-1').hide('slow').show('slow');

// $('#naglowek-2').fadeOut('slow').fadeIn('slow');

// $('#naglowek-2').slideUp('slow').slideDown('slow');

$('#naglowek-1').animate( {
    'margin-left': '500px',
    'font-size': '4em'
}, 3000);

function przesunNaSrodek () {
    $('#naglowek-1').delay(1000).animate( {
        'margin-left': '500px',
        'font-size': '4em'
    }, 3000, przesunWLewo);
}

function przesunWLewo() {
    $('#naglowek-1').delay(1000).animate( {
        'margin-left': '0px',
        'font-size': '20px'
    }, 3000, przesunNaSrodek);
}

przesunNaSrodek();