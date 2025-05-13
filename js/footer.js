(function() {
    const body = document.body;
    const footer = document.createElement("footer");

    footer.innerHTML = `
        <!-- Vendor Start -->
        <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container py-5 mb-5">
                <div class="bg-white">
                    <div class="owl-carousel vendor-carousel">
                        <img src="img/vendor-1.jpg" alt="">
                        <img src="img/vendor-2.jpg" alt="">
                        <img src="img/vendor-3.jpg" alt="">
                        <img src="img/vendor-4.jpg" alt="">
                        <img src="img/vendor-5.jpg" alt="">
                        <img src="img/vendor-6.jpg" alt="">
                        <img src="img/vendor-7.jpg" alt="">
                        <img src="img/vendor-8.jpg" alt="">
                        <img src="img/vendor-9.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- Vendor End -->

        <!-- Footer Start -->
        <div class="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="row gx-5">
                    <div class="col-lg-4 col-md-6 footer-about">
                        <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                            <a href="index.html" class="navbar-brand">
                                <img class="logo" src="img/logo.png" alt="Eris Tech logo">
                            </a>
                            <p class="mt-3 mb-4">Lorem ipsum dolor sit amet...</p>
                            <form action="">
                                <div class="input-group">
                                    <input type="text" class="form-control border-white p-3" placeholder="Your Email">
                                    <button class="btn btn-dark">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-6">
                        <div class="row gx-5">
                            <div class="col-lg-4 col-md-12 pt-5 mb-5">
                                <h3 class="text-light mb-0">Get In Touch</h3>
                                <p><i class="bi bi-geo-alt text-primary me-2"></i>Viale Monza 1, Milano</p>
                                <p><i class="bi bi-envelope-open text-primary me-2"></i>info@eristech.it</p>
                                <p><i class="bi bi-telephone text-primary me-2"></i>+39 02454905840</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer End -->

        <!-- Back to Top -->
        <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i class="bi bi-arrow-up"></i></a>
    `;

    body.appendChild(footer);
})();
