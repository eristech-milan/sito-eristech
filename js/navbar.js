(function () {
    const body = document.body;
    const header = document.createElement("div");

    header.innerHTML = `
    <!-- Spinner Start -->
    <div id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner"></div>
    </div>
    <!-- Spinner End -->
    
    <!-- Topbar Start -->
    <div class="container-fluid bg-dark px-5 d-none d-lg-block">
        <div class="row gx-0">
            <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
                    <small class="me-3 text-light">
                        <i class="fa fa-map-marker-alt me-2"></i>
                        <a target="_blank" class="text-light" href="https://maps.app.goo.gl/PkgcBbdihJV3njyz6">Viale Monza 1, Milano</a>
                    </small>
                    <small class="me-3 text-light">
                        <i class="fa fa-phone-alt me-2"></i>
                        <a target="_blank" class="text-light" href="tel:+390245490584">+390245490584</a>
                    </small>
                    <small class="text-light">
                        <i class="fa fa-envelope-open me-2"></i>
                        <a target="_blank" class="text-light" href="mailto:info@eristech.it">info@eristech.it</a>
                    </small>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->
    
    <!-- Navbar & Carousel Start -->
    <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a href="index.html" class="navbar-brand p-0">
                <img class="logo" src="../img/logo.png" alt="Eris Tech logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav mx-auto py-0">
                    <a href="index.html" class="nav-item nav-link active">Home</a>
                    <a href="about.html" class="nav-item nav-link" data-key="about">About</a>
                    <a href="service.html" class="nav-item nav-link" data-key="services">Services</a>
                    <a href="contact.html" class="nav-item nav-link" data-key="contact">Contact</a>
                </div>
                <img src="../i18n/flags/uk.png" id="flag-en" alt="English" style="width:30px; cursor:pointer; margin:5px;">
                <img src="../i18n/flags/it.png" id="flag-it" alt="Italiano" style="width:30px; cursor:pointer; margin:5px;">
                <img src="../i18n/flags/fr.png" id="flag-fr" alt="Francese" style="width:30px; cursor:pointer; margin:5px;">
            </div>
        </nav>
    </div>
    `;

    body.insertBefore(header, body.firstChild);

    // 🔹 Aggiorna il titolo della scheda del browser dinamicamente
    document.addEventListener("DOMContentLoaded", function () {
        let pageName = document.location.pathname.split("/").pop().replace(".html", "");

        const pageTitles = {
            "index": "Home - ErisTech",
            "about": "About Us - ErisTech",
            "service": "Our Services - ErisTech",
            "blog": "Blog - ErisTech",
            "detail": "Blog Details - ErisTech",
            "feature": "Features - ErisTech",
            "clients": "Clients - ErisTech",
            "partners": "Partners - ErisTech",
            "contact": "Contact Us - ErisTech"
        };

        if (pageTitles[pageName]) {
            document.title = pageTitles[pageName];
            console.log("Titolo aggiornato:", document.title);
        } else {
            document.title = "Eris Tech";
            console.log("Titolo predefinito:", document.title);
        }
    });
})();
