// Carrito de compras
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para agregar al carrito
function agregarAlCarrito(id, nombre, precio, imagen) {
    console.log('Agregando al carrito:', { id, nombre, precio, imagen });
    
    const productoExistente = carrito.find(item => item.id === id);
    
    if (productoExistente) {
        productoExistente.cantidad += 1;
        console.log('Producto existente, nueva cantidad:', productoExistente.cantidad);
    } else {
        carrito.push({
            id: id,
            nombre: nombre,
            precio: precio,
            imagen: imagen,
            cantidad: 1
        });
        console.log('Producto nuevo agregado');
    }
    
    localStorage.setItem('carrito', JSON.stringify(carrito));
    console.log('Carrito actualizado:', carrito);
    
    actualizarContadorCarrito();
    mostrarNotificacion(`${nombre} agregado al carrito`);
}

// Función para actualizar contador del carrito
function actualizarContadorCarrito() {
    const contador = document.getElementById('cart-count');
    if (contador) {
        const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
        contador.textContent = totalItems;
        if (totalItems > 0) {
            contador.style.display = 'flex';
            contador.classList.add('show');
        } else {
            contador.style.display = 'none';
            contador.classList.remove('show');
        }
    }
}

// Función para mostrar notificación
function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.textContent = mensaje;
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent);
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    `;
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.remove();
    }, 3000);
}

// Función para ver carrito
function verCarrito() {
    if (carrito.length === 0) {
        alert('El carrito está vacío');
        return;
    }
    
    let carritoHTML = '<div style="max-width: 500px; margin: 20px auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px;">';
    carritoHTML += '<h3>Carrito de Compras</h3>';
    
    let total = 0;
    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        
        carritoHTML += `
            <div style="display: flex; justify-content: space-between; align-items: center; margin: 10px 0; padding: 10px; border-bottom: 1px solid #eee;">
                <div>
                    <strong>${item.nombre}</strong><br>
                    $${item.precio.toLocaleString()} x ${item.cantidad}
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span>$${subtotal.toLocaleString()}</span>
                    <button onclick="eliminarDelCarrito(${index})" style="background: #ff4444; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">
                        Eliminar
                    </button>
                </div>
            </div>
        `;
    });
    
    carritoHTML += `
        <div style="text-align: right; margin-top: 20px; font-size: 1.2em; font-weight: bold;">
            Total: $${total.toLocaleString()}
        </div>
        <div style="margin-top: 20px; text-align: center;">
            <button onclick="vaciarCarrito()" style="background: #ff4444; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px; cursor: pointer;">
                Vaciar Carrito
            </button>
            <button onclick="procederPago()" style="background: var(--accent); color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                Proceder al Pago
            </button>
        </div>
    `;
    carritoHTML += '</div>';
    
    // Crear modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        z-index: 1000;
        overflow-y: auto;
    `;
    
    modal.innerHTML = `
        <div style="background: white; max-width: 600px; margin: 50px auto; border-radius: 8px; position: relative; color: #333;">
            <button onclick="this.closest('.modal').remove()" style="position: absolute; top: 10px; right: 15px; background: none; border: none; font-size: 20px; cursor: pointer;">×</button>
            ${carritoHTML}
        </div>
    `;
    modal.className = 'modal';
    
    document.body.appendChild(modal);
}

// Función para eliminar del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
    document.querySelector('.modal').remove();
    if (carrito.length > 0) {
        verCarrito();
    }
}

// Función para vaciar carrito
function vaciarCarrito() {
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
    document.querySelector('.modal').remove();
    mostrarNotificacion('Carrito vaciado');
}

// Función para proceder al pago
function procederPago() {
    alert('Funcionalidad de pago en desarrollo. Total: $' + carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0).toLocaleString());
}

// Inicializar contador al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    actualizarContadorCarrito();
});