// Wait for window load
$(window).on('load', function () {
    // Animate loader off screen
    this.setTimeout(function () {
        $(".custom-loader").fadeOut("slow");;
    }, 700);
});
