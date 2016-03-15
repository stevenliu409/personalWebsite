$(document).ready(function() {
    $(".navbar").hide();

    $(window).scroll(function() {
        if($(this).scrollTop() > 100 ) {
            $(".navbar").fadeIn();
            $(".navbar").css("position","fixed");
        } else {
            $(".navbar").hide();
        }
    });
});
