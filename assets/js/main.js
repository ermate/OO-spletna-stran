$('.hiro-nav-popup-toggle').click(function(){
    $('body').toggleClass('hiro-nav-popup-modal-open');
});

$('.hiro-main-nav .nav-link[href^="#"]:not([href="#!"])').click(function(){
    $('body').removeClass('hiro-nav-popup-modal-open');
});
$myCarousel = $('.carousel');

function doAnimations(elems) {
  var animEndEv = 'webkitAnimationEnd animationend';

  elems.each(function () {
    var $this = $(this),
        $animationType = $this.data('animation');

    $this.addClass($animationType).one(animEndEv, function () {
      $this.removeClass($animationType);
    });
  });
}

var $firstAnimatingElems = $myCarousel.find('.carousel-item:first')
  .find('[data-animation ^= "animated"]');

doAnimations($firstAnimatingElems);

$myCarousel.on('slide.bs.carousel', function (e) {
  var $animatingElems = $(e.relatedTarget)
    .find("[data-animation ^= 'animated']");
  doAnimations($animatingElems);
});

img_array= new Array('assets/images/logo_1.png','assets/images/logo_2.png','assets/images/logo_3.png','assets/images/logo_4.png');
i=0;

function logoAnimate() {
  document.getElementById("Logo").src=img_array[i];
  if(i==img_array.length-1)
    i=0;
  else
    i++;
}
