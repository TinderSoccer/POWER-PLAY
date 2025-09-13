// Authentication system
document.addEventListener('DOMContentLoaded', function() {
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));
    const loginAction = document.querySelector('a[href="login.html"]');
    
    if (usuarioLogueado && loginAction) {
        // Update login link to show user info and logout option
        const userInfo = loginAction.closest('.action');
        
        if (userInfo) {
            // Create user dropdown
            const dropdown = document.createElement('div');
            dropdown.className = 'user-dropdown';
            dropdown.innerHTML = `
                <div class="icon-circle">
                    <img src="icons/usuario.png" alt="Usuario" class="icon">
                </div>
                <span>Hola, ${usuarioLogueado.nombre}</span>
                <div class="dropdown-content">
                    <a href="#" onclick="logout()">Cerrar Sesión</a>
                </div>
            `;
            
            userInfo.replaceWith(dropdown);
        }
    }
});

function logout() {
    localStorage.removeItem('usuarioLogueado');
    window.location.reload();
}