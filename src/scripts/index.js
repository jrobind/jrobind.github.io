$(document).ready(function() {
    /* smooth scroll to projects and contact section */
    $('.projects-link').click(scrollFunction.bind(null, '.projects-wrap'));
    $('.contact-link').click(scrollFunction.bind(null, '.contact-section'));

    function scrollFunction(destination) {
        $('html, body').animate({
            'scrollTop': $(destination).offset().top
        }, 1500)
    }

    // automatically set year
    var date = new Date();
    $('#year').text(date.getFullYear());
});
