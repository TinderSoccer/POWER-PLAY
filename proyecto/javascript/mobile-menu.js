// Funcionalidad del menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navbarMenu = document.getElementById('navbar-menu');
    
    if (hamburger && navbarMenu) {
        hamburger.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Cerrar menú al hacer click en un enlace (móvil)
        const navLinks = navbarMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Cerrar menú al hacer click fuera de él
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