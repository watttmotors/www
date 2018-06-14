// JavaScript Document
$(document).ready(function(){

$('#start').click(function(){

var x=$('.start').offset().top;
$('body,html').stop().animate({'scrollTop':x},1000);

});

$('#team').click(function(){

var x=$('.team').offset().top;
$('body,html').stop().animate({'scrollTop':x},1000);

});

$('#mission').click(function(){

var x=$('.mission').offset().top;
$('body,html').stop().animate({'scrollTop':x},1000);
//$('h1').animate({'font-size':'30px','opacity':'1'},1000);


});

$('#about').click(function(){

var x=$('.about').offset().top;
$('body,html').stop().animate({'scrollTop':x},1000);

});
$('#carrier').click(function(){

var x=$('.carrier').offset().top;
$('body,html').stop().animate({'scrollTop':x},1000);

});
$('#contact').click(function(){

var x=$('.contact').offset().top;
$('body,html').stop().animate({'scrollTop':x},1000);

});


$('.curtain img').click(function(){

$('.curtain1').animate({'margin-left':'-100%','opacity':'0'},1000);
$('.curtain2').animate({'margin-left':'100%','opacity':'0'},1000);
$('.curtain img').fadeOut();
//$('.curtain h1').delay(2000).animate({'font-size':'50px'},1000);


});

});