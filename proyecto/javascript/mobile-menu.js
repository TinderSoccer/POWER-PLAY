// menu hamburguesa para celulares (me costo mucho hacer esto funcionar)
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navbarMenu = document.getElementById('navbar-menu');
    
    // revisar que los elementos existan antes de usarlos
    if (hamburger && navbarMenu) {
        // cuando hagan click en el boton hamburguesa
        hamburger.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');    // mostrar/ocultar menu
            hamburger.classList.toggle('active');     // animar el boton
        });

        // cerrar el menu cuando hagan click en cualquier link
        const navLinks = navbarMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // cerrar menu si hacen click afuera (esto fue lo mas dificil)
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navbarMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
});