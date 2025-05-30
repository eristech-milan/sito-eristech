(($) => {
    "use strict";

    $(document).ready(function () {
        const API_KEY = "e7aa520e51b401a6afd037945d282c74";
        const url = "https://gnews.io/api/v4/top-headlines?category=technology&lang=en&apikey=" + API_KEY;
        
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
                        <div class="wow slideInUp" data-wow-delay="0.3s" style="height: 100%;">
                            <div class="blog-item bg-light rounded overflow-hidden h-100 d-flex flex-column">
                                <div class="blog-img position-relative overflow-hidden" style="height: 200px;">
                                    <img class="img-fluid h-100 object-fit-cover" src="${article.image || 'placeholder.jpg'}" alt="News image">
                                </div>
                                <div class="p-4 d-flex flex-column flex-grow-1">
                                    <div class="d-flex mb-3">
                                        <small class="me-3">
                                            <i class="far fa-user text-primary me-2"></i>${article.source?.name ?? 'Unkown'}
                                        </small>
                                        <small>
                                            <i class="far fa-calendar-alt text-primary me-2"></i>${date}
                                        </small>
                                    </div>
                                    <h4 class="mb-3 truncate line-clamp-2">${article.title}</h4>
                                    <p class="truncate line-clamp-3">${article.description ?? 'No description available.'}</p>
                                    <a class="text-uppercase mt-auto" href="${article.url}">Read More <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    `;
                });

                $(".tech-news-carousel").html(newsItems);

                $(".tech-news-carousel").owlCarousel({
                    autoplay: false,
                    smartSpeed: 500,
                    loop: false,
                    items: 3,
                    margin: 20,
                    nav: false,
                    dots: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1400: {
                            items: 4
                        }
                    }
                });
            })
            .catch(error => console.error("Errore nel recupero delle notizie:", error));
    });
})(jQuery);