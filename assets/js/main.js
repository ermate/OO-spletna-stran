window.onload = function() {
  if(window.location.pathname != '/index.html') {
    $('#navbarLogoM').attr('src', 'assets/images/logoM-style-inverted.svg');
  }
}

// hamburger click
$('.custom-nav-popup-toggle').click(function(){
    $('body').toggleClass('custom-nav-popup-modal-open');
    console.log(window.location.pathname);
    if(window.location.pathname == '/index.html') {
      $('#navbarLogoM').attr('src', function(index, attr){
        var normal = 'assets/images/logoM-style.svg';
        var inverted = 'assets/images/logoM-style-inverted.svg';
        return attr == inverted ? normal : inverted;
      });
    }
});

$('.custom-main-nav .nav-link[href^="#"]:not([href="#!"])').click(function(){
    $('body').removeClass('custom-nav-popup-modal-open');
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

// img_array= new Array('assets/images/logo_1.png','assets/images/logo_2.png','assets/images/logo_3.png','assets/images/logo_4.png');
// i=0;

// function logoAnimate() {
//   document.getElementById("Logo").src=img_array[i];
//   if(i==img_array.length-1)
//     i=0;
//   else
//     i++;
// }

var i=1;

document.querySelector('.navbarLogo').onmouseenter = function() {
  //console.log("Logo over!");
  
  anime({
    targets: '.navbarLogo',
    rotate: 90*i,
    duration: 500,
    easing: 'easeOutCubic',
  });

  anime({
    targets: '#navbarLogoE, #navbarLogoM, #navbarLogoZ, #navbarLogoL',
    rotate: -90*i,
    duration: 500,
    easing: 'easeOutSine',
  });

  i++;
};
