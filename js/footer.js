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
                            <p class="mb-0">
                                <a target="_blank" class="text-light" href="https://maps.app.goo.gl/PkgcBbdihJV3njyz6">Viale Monza 1, 20125 Milano</a>
                            </p>
                        </div>
                        <div class="d-flex mb-2">
                            <i class="bi bi-envelope-open text-primary me-2"></i>
                            <p class="mb-0">
                                <a target="_blank" class="text-light" href="mailto:info@eristech.it">info@eristech.it</a>
                            </p>
                        </div>
                        <div class="d-flex mb-2">
                            <i class="bi bi-telephone text-primary me-2"></i>
                            <p class="mb-0">
                                <a target="_blank" class="text-light" href="tel:+390245490584">+39 0245490584</a>
                            </p>
                        </div>
                        <div class="d-flex mb-2">
                            <i class="bi bi-linkedin text-primary me-2"></i>
                            <p class="mb-0">
                                <a target="_blank" class="text-light" href="https://www.linkedin.com/company/eristechsrl">LinkedIn</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid text-white p-4 text-center" style="background: #061429;">
        <p class="m-1">&copy; Eris Tech Srl</p>
        <p class="m-1"><span data-key="P_IVA"></span>: 09286090965 | <span data-key="SHARE_CAPITAL"></span>: 20.000,00€ i.v. | PEC: eristech@pec.it</p>
        <p class="m-1"><span data-key="DESIGNED_BY"></span> <a class="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a></p>
    </div>
    <!-- Footer End -->
    `;

    body.appendChild(footer);
})();
