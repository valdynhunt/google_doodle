// Everything OK?
console.log('OK');

var color0 = 'blue';
var color1 = 'red';
var color2 = 'green';

// get random number
var limit = 3;
var randNum = Math.floor( Math.random() * limit ) ;
console.log( randNum );


// Click Event
$('#stage').click( function(){
    $('#gdrive').toggleClass('moveme');
    $('.icon').toggleClass('color' + randNum);
});
