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


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // clients carousel
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        let lang = localStorage.getItem("lang") || "en";

        fetch("../i18n/translations.json")
            .then(response => response.json())
            .then(data => {
                window.translations = data; // Salva le traduzioni globalmente

                document.querySelectorAll("[data-key]").forEach(element => {
                    element.textContent = translations[lang][element.dataset.key];
                });

                // Event listener generico per tutte le bandiere
                document.querySelectorAll("img[id^='flag-']").forEach(flag => {
                    flag.addEventListener("click", function () {
                        let selectedLang = this.id.split('-')[1]; // Estrae "en" o "it"
                        changeLanguage(selectedLang);
                    });
                });
            })
            .catch(error => console.error("Errore nel caricamento:", error));
    });

    function changeLanguage(newLang) {
        localStorage.setItem("lang", newLang);
        document.querySelectorAll("[data-key]").forEach(element => {
            element.textContent = window.translations[newLang][element.dataset.key];
        });
    }
})(jQuery);

