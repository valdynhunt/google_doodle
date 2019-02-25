// Everything OK?
console.log('OK');

// get random number
var limit = 3;
var randNum = Math.floor( Math.random() * limit ) ;
console.log( randNum );

// Click Event
$('#stage').click( function(){
    $('body').addClass('color' + randNum);
    $('#stage').addClass('moveme');
});
