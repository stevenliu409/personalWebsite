$(document).ready(function() {

    (function blink(){
        $(".intro-header-text-cursor").fadeOut(500).fadeIn(500, blink);
    })();

    $('#copyright').text(new Date().getFullYear());

    $('#contactform').attr('action', 'https://formspree.io/' + 'info' + '@' + 'stevenliu' + '.' + 'xyz');


});
