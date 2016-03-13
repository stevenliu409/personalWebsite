$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 100 ) {
            $(".nav").show();
            $(".nav").css("position","fixed");
        } else {
            $(".nav").hide();
        }
    });
});
