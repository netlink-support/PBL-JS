// JavaScript Document

var images = ['images/products-banner1.jpg', 'images/products-banner2.jpg'];
//var randomNumber = Math.floor(Math.random() * images.length);
//var bgImg = 'url(' + images[randomNumber] + ')';
//alert(bgImg);

$('#banner-load').css('background-image', "url('" + base_url + 'views/templates/assets/' + images[Math.floor(Math.random() * images.length)] + "')");
//$('<img alt="PBL Products" class="fade-in" src="' + base_url + 'views/templates/assets/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#banner-load');