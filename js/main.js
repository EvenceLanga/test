(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);
const headlineText = "Let's Change The World With Humanity";
const subtextText = "Every moment is an opportunity to create change. Together, we can shape a brighter future for humanity.";

            function animateWords(containerId, text, delay) {
        const container = document.getElementById(containerId);
        const words = text.split(" ");
        words.forEach((word, index) => {
            const span = document.createElement("span");
            span.className = "animated-word";
            span.style.transitionDelay = `${index * delay}s`;
            span.innerText = word; // Add the word
            container.appendChild(span);

            // Add a space after each word
            container.appendChild(document.createTextNode(" "));

            // Trigger animation after appending
            setTimeout(() => {
                span.style.opacity = 1;
            }, 50);
        });
    }


document.addEventListener("DOMContentLoaded", () => {
    animateWords("headline", headlineText, 0.1); // 1-second delay
    animateWords("subtext", subtextText, 0.2); // 0.5-second delay
});


document.addEventListener("DOMContentLoaded", () => {
    const carouselElement = document.getElementById('header-carousel');
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 5000, // 5000ms = 5 seconds
        ride: "carousel"
    });
});

