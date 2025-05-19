(function () {
    const body = document.body;
    const footer = document.createElement("footer");

    footer.innerHTML = `
    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-4 col-md-6 footer-about">
                    <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                        <a href="index.html" class="navbar-brand">
                            <img class="logo" src="../img/logo.png" alt="Eris Tech logo">
                        </a>
                        <p class="mt-3 mb-4">
                            "<span data-key="FOOTER_CAPTION"></span>"
                             - Henry Ford
                        </p>
                    </div>
                </div>
                <div class="col footer-contacts">
                    <div class="col-lg-4 col-md-12 pt-5 mb-5">
                        <div class="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 class="text-light mb-0" data-key="GET_IN_TOUCH"></h3>
                        </div>
                        <div class="d-flex mb-2">
                            <i class="bi bi-geo-alt text-primary me-2"></i>
                            <p class="mb-0">Viale Monza 1, Milano</p>
                        </div>
                        <div class="d-flex mb-2">
                            <i class="bi bi-envelope-open text-primary me-2"></i>
                            <p class="mb-0">
                                <a class="text-light" href="mailto:info@eristech.it">info@eristech.it</a>
                            </p>
                        </div>
                        <div class="d-flex mb-2">
                            <i class="bi bi-telephone text-primary me-2"></i>
                            <p class="mb-0">+39 0245490584</p>
                        </div>
                        <div class="d-flex mb-2">
                            <i class="bi bi-linkedin text-primary me-2"></i>
                            <p class="mb-0">Inserire link</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid text-white" style="background: #061429;">
        <div class="container text-center">
            <div class="row justify-content-end">
                <div class="col-lg-8 col-md-6">
                    <div class="d-flex align-items-center justify-content-center" style="height: 75px;">
                        <p class="mb-0">&copy; Eris Tech Srl. <span data-key="RIGHTS_RESERVED"></span>. <span data-key="P_IVA"></span>: 09286090965 - <span data-key="SHARE_CAPITAL"></span>: 20.000,00€ i.v.
						
						<!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
						<span data-key="DESIGNED_BY"></span> <a class="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->
    `;

    body.appendChild(footer);
})();
