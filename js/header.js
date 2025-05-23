document.addEventListener("DOMContentLoaded", function () {
    const head = document.head;

    // Creazione del titolo dinamico
    const pageTitles = {
        "home.html": "Home",
        "about.html": "About",
        "blog.html": "Blog",
        "contact.html": "Contact",
        "services.html": "Services",
        "startup.html": "Startup - Startup Website Template"
    };

    let pageName = location.pathname.split("/").pop();
    document.title = pageTitles[pageName] || "Startup - Default";

    // Creazione favicon dinamica
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "../img/favicon.png";
    head.appendChild(favicon);

    // Aggiunta degli elementi comuni al `<head>`
    const metaViewport = `<meta content="width=device-width, initial-scale=1.0" name="viewport">`;
    const metaKeywords = `<meta content="Free HTML Templates" name="keywords">`;
    const metaDescription = `<meta content="Free HTML Templates" name="description">`;

    /* const fonts = `<link rel="preconnect" href="https://fonts.googleapis.com">
                   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                   <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet">`; */

    const icons = `<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
                   <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">`;

    const stylesheets = `<link href="../css/nunito.css" rel="stylesheet">
                        <link href="../css/rubik.css" rel="stylesheet">
                        <link href="../modules/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
                        <link href="../modules/animate/animate.min.css" rel="stylesheet">
                        <link href="../css/bootstrap.min.css" rel="stylesheet">
                        <link href="../css/style.css" rel="stylesheet">`;

    // Inserimento nel `<head>`
    head.innerHTML += metaViewport + metaKeywords + metaDescription + icons + stylesheets;
});
