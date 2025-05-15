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


    // clientss carousel
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 4
            },
            768: {
                items: 6
            },
            992: {
                items: 8
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

    // per carousell Info tech
    $(document).ready(function () {
        const url = "https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (!data.articles || data.articles.length === 0) {
                    throw new Error("Nessun articolo trovato");
                }

                let newsItems = "";
                data.articles.forEach(article => {
                    const date = new Date(article.publishedAt).toDateString();

                    newsItems += `
                        <div class="col wow slideInUp" data-wow-delay="0.3s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden">
                                    <img class="img-fluid" src="${article.urlToImage || 'placeholder.jpg'}" alt="News image">
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="far fa-user text-primary me-2"></i>${article.author ?? 'Unkown'}</small>
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>${date}</small>
                                    </div>
                                    <h4 class="mb-3 truncate">${article.title}</h4>
                                    <p class="truncate">${article.description ?? 'No description available.'}</p>
                                    <a class="text-uppercase" href="${article.url}">Read More <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    `;
                });

                $(".tech-news-carousel").html(newsItems);

                $(".tech-news-carousel").owlCarousel({
                    autoplay: true,
                    smartSpeed: 1000,
                    loop: true,
                    items: 3,
                    margin: 20,
                    nav: true,
                    dots: false
                });
            })
            .catch(error => console.error("Errore nel recupero delle notizie:", error));
    });


})(jQuery);

