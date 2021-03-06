// scrollspy plagin initialization
$('body').scrollspy({ target: '.navbar-collapse' });

// portfolio toggle active link
$('.portfolio-links .portfolio-all-links').click(function(evt){
    evt.preventDefault();
    $('.portfolio-links .portfolio-all-links').addClass('active');
    $('.portfolio-links .portfolio-design-links').removeClass('active');
    $('.portfolio-links .portfolio-photo-links').removeClass('active');
    $('.portfolio-links .portfolio-branding-links').removeClass('active');
});

$('.portfolio-links .portfolio-design-links').click(function(evt){
    evt.preventDefault();
    $('.portfolio-links .portfolio-design-links').addClass('active');
    $('.portfolio-links .portfolio-all-links').removeClass('active');
    $('.portfolio-links .portfolio-photo-links').removeClass('active');
    $('.portfolio-links .portfolio-branding-links').removeClass('active');
});

$('.portfolio-links .portfolio-photo-links').click(function(evt){
    evt.preventDefault();
    $('.portfolio-links .portfolio-photo-links').addClass('active');
    $('.portfolio-links .portfolio-design-links').removeClass('active');
    $('.portfolio-links .portfolio-all-links').removeClass('active');
    $('.portfolio-links .portfolio-branding-links').removeClass('active');
});

$('.portfolio-links .portfolio-branding-links').click(function(evt){
    evt.preventDefault();
    $('.portfolio-links .portfolio-branding-links').addClass('active');
    $('.portfolio-links .portfolio-design-links').removeClass('active');
    $('.portfolio-links .portfolio-photo-links').removeClass('active');
    $('.portfolio-links .portfolio-all-links').removeClass('active');
});

// video overlay remove
$('.video-overlay').click(function(evt){
    evt.preventDefault();
    $('.video-overlay').addClass('hidden');
});

// scrollTo plagin initialization
$('.navbar-menu a').bind('click', function(evt) {
    evt.preventDefault();
    target = this.hash;
    $.scrollTo(target, 1500);
 });

$('.footer-site-title-container a').bind('click', function(evt) {
    evt.preventDefault();
    target = this.hash;
    $.scrollTo(target, 1500);
 });

$('.portfolio-links a').bind('click', function(evt) {
    evt.preventDefault();
    target = this.hash;
    $.scrollTo(target, 1000);
 });

// slick slider for portfolio slider + counting slides
$(document).ready(function(){
  $('.potfolio-slider-inner').slick({
      speed: 1500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
                settings: "unslick",
                swipe: false,
                swipeToSlide: false,
                draggable: false,
                touchMove: false,
                accessibility: false
            }
        },
    ]
  });
});

var $status = $('.portfolio-slider-page');
var $slickElement = $('.potfolio-slider-inner');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
});

// slick slider for review slider
$(document).ready(function(){
  $('.review-slider-inner').slick({
      speed: 1500
  });
});

// slick slider for members slider + counting slides
$(document).ready(function(){
  $('.members-slider-inner').slick({
      vertical: true,
      speed: 1500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
                settings: "unslick",
                swipe: false,
                swipeToSlide: false,
                draggable: false,
                touchMove: false,
                accessibility: false
            }
        },
    ]
  });
});

var $statusMemeber = $('.members-slider-page');
var $slickElementMember = $('.members-slider-inner');

$slickElementMember.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $statusMemeber.text(i + '/' + slick.slideCount);
});