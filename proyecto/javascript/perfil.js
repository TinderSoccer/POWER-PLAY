document.addEventListener("DOMContentLoaded", () => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));

    if (!usuario) {
        window.location.href = "login.html";
        return;
    }

    // Elementos del DOM
    const userNameEl = document.getElementById("user-name");
    const userEmailEl = document.getElementById("user-email");
    const avatarEl = document.getElementById("profile-avatar");
    const avatarInput = document.getElementById("avatar-input");
    const logoutBtn = document.getElementById("logout-btn");

    // Mostrar datos del usuario
    userNameEl.textContent = usuario.nombre;
    userEmailEl.textContent = usuario.correo;
    avatarEl.src = usuario.avatar || "icons/avatar.png";

    // Avatar editable
    avatarEl.style.cursor = "pointer";
    avatarEl.addEventListener("click", () => avatarInput.click());

    avatarInput.addEventListener("change", () => {
        const file = avatarInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                avatarEl.src = e.target.result;
                usuario.avatar = e.target.result;
                localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));

                const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
                const index = usuarios.findIndex(u => u.correo === usuario.correo);
                if(index !== -1) {
                    usuarios[index].avatar = e.target.result;
                    localStorage.setItem("usuarios", JSON.stringify(usuarios));
                }
            };
            reader.readAsDataURL(file);
        }
    });

    // Cerrar sesión
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("usuarioLogueado");
        alert("Has cerrado sesión. Serás redirigido en 5 segundos...");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 5000);
    });

    // Función para actualizar el contenido de las cards según la sección
    function mostrarSeccion(seccion) {
        switch(seccion) {
            case "Mi Cuenta":
            case "Información de la cuenta":
                document.getElementById("user-name").textContent = usuario.nombre;
                document.getElementById("user-email").textContent = usuario.correo;
                document.getElementById("shipping-address").textContent = "No ha establecido una dirección de envío predeterminada.";
                document.querySelector(".cards-grid article:nth-child(3) .card-body p").textContent = "No tienes pedidos aún.";
                document.querySelector(".cards-grid article:nth-child(4) .card-body p").textContent = "No hay elementos en tu lista de deseos.";
                break;
            case "Mis pedidos":
                document.querySelector(".cards-grid article:nth-child(3) .card-body p").textContent = "No tienes pedidos aún.";
                break;
            case "Mi lista de deseos":
                document.querySelector(".cards-grid article:nth-child(4) .card-body p").textContent = "No hay elementos en tu lista de deseos.";
                break;
        }
    }

    // Sidebar links
    document.querySelectorAll(".profile-sidebar nav ul li a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const texto = link.textContent.trim();
            mostrarSeccion(texto);

            document.querySelectorAll(".profile-sidebar nav ul li a").forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Botones de las cards
    document.querySelectorAll(".card .btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const cardTitle = btn.closest(".card").querySelector(".card-head h2").textContent;
            switch(cardTitle) {
                case "Información del contacto":
                    alert("Función de editar / cambiar contraseña aún no implementada.");
                    break;
                case "Dirección de envío predeterminada":
                    alert("Función de editar dirección aún no implementada.");
                    break;
                case "Mis pedidos":
                    alert("Función de ver historial aún no implementada.");
                    break;
                case "Mi lista de deseos":
                    alert("Función de ver favoritos aún no implementada.");
                    break;
            }
        });
    });

    // Inicialmente mostrar "Mi Cuenta"
    mostrarSeccion("Mi Cuenta");
});
