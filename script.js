$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 100 ) {
            $(".navbar").show();
            $(".nav").css("position","fixed");
        } else {
            $(".navbar").hide();
        }
    });
});
