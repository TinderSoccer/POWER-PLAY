// array para guardar los productos del carrito
// use localStorage para que no se pierda cuando recargue la pagina
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// cuantos productos tengo en stock (los puse yo manualmente)
const stockProductos = {
    'ps5': 5,                    // solo quedan 5 PS5
    'nintendo-oled': 8,
    'nintendo-switch-2': 3,      // este es nuevo, pocos en stock
    'xbox-series-x': 6,
    'steam-deck': 2,             // caros, pocos
    'ps5-pro': 1,                // solo uno porque es carísima
    'xbox-series-s': 7,
    'memoria-ssd': 15,
    'audifono-blackshark': 12,
    'control-dualsense': 10,
    'audifono-pulse': 8,
    'teclado-mecanico': 6,
    'mouse-gaming': 9,
    'webcam-gaming': 4,
    'exploding-kittens': 20,     // juegos de mesa hay más stock
    'wolfenstein-mesa': 5,
    'kienpake': 15,
    '31-minutos': 10,
    'monopoly-gamer': 8,
    'uno-flip': 25,              // muchas porque se venden bien
    'jenga-classic': 18
};

// funcion para revisar si hay stock suficiente
function verificarStock(id, cantidadDeseada = 1) {
    const stockDisponible = stockProductos[id] || 0;     // cuanto stock hay
    // buscar cuantos ya tengo en el carrito
    const cantidadEnCarrito = carrito.find(item => item.id === id)?.cantidad || 0;
    // si hay suficiente stock devuelve true
    return stockDisponible - cantidadEnCarrito >= cantidadDeseada;
}

// esta es la funcion mas importante - agregar productos al carrito
function agregarAlCarrito(id, nombre, precio, imagen) {
    console.log('Agregando al carrito:', { id, nombre, precio, imagen });  // para debugging
    
    // primero revisar si hay stock
    if (!verificarStock(id)) {
        mostrarNotificacion(`Sin stock disponible para ${nombre}`, 'error');
        return;  // salir de la funcion si no hay stock
    }
    
    // buscar si el producto ya esta en el carrito
    const productoExistente = carrito.find(item => item.id === id);
    
    if (productoExistente) {
        // si ya esta, solo aumentar la cantidad
        productoExistente.cantidad += 1;
        console.log('Producto existente, nueva cantidad:', productoExistente.cantidad);
    } else {
        // si no esta, agregarlo nuevo
        carrito.push({
            id: id,
            nombre: nombre,
            precio: precio,
            imagen: imagen,
            cantidad: 1
        });
        console.log('Producto nuevo agregado');
    }
    
    // guardar en localStorage para que no se pierda
    localStorage.setItem('carrito', JSON.stringify(carrito));
    console.log('Carrito actualizado:', carrito);
    
    // actualizar el contador y los botones
    actualizarContadorCarrito();
    actualizarBotonesStock();
    mostrarNotificacion(`${nombre} agregado al carrito`);
}

// actualizar el numerito rojo del carrito
function actualizarContadorCarrito() {
    const contador = document.getElementById('cart-count');   // buscar el elemento del contador
    if (contador) {
        // contar todos los productos en el carrito
        const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
        contador.textContent = totalItems;  // poner el numero
        
        if (totalItems > 0) {
            // si hay productos, mostrar el contador
            contador.style.display = 'flex';
            contador.classList.add('show');
        } else {
            // si no hay nada, ocultarlo
            contador.style.display = 'none';
            contador.classList.remove('show');
        }
    }
}

// mostrar mensajitos cuando se agrega algo al carrito
function mostrarNotificacion(mensaje, tipo = 'success') {
    const notificacion = document.createElement('div');
    notificacion.textContent = mensaje;
    
    // elegir el color segun si es error o exitoso
    const color = tipo === 'error' ? '#ff4444' : 'var(--accent)';   
    
    // aplicar todos los estilos de una vez
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${color};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    `;
    
    document.body.appendChild(notificacion);   // agregar al DOM
    
    // quitar la notificacion despues de 3 segundos
    setTimeout(() => {
        notificacion.remove();
    }, 3000);
}

// Función para actualizar botones según stock
function actualizarBotonesStock() {
    document.querySelectorAll('.btn-agregar-carrito').forEach(boton => {
        const onclick = boton.getAttribute('onclick');
        if (onclick) {
            // Extraer el ID del producto del onclick
            const match = onclick.match(/'([^']+)'/);
            if (match) {
                const productId = match[1];
                const stockDisponible = verificarStock(productId);
                
                if (!stockDisponible) {
                    boton.disabled = true;
                    boton.textContent = 'Sin Stock';
                    boton.style.background = '#666';
                    boton.style.cursor = 'not-allowed';
                } else {
                    boton.disabled = false;
                    boton.textContent = 'Agregar al Carrito';
                    boton.style.background = 'var(--accent)';
                    boton.style.cursor = 'pointer';
                }
            }
        }
    });
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

// por ahora solo mostrar un alert para el pago (despues hare el pago real)
function procederPago() {
    const total = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    alert('Funcionalidad de pago en desarrollo. Total: $' + total.toLocaleString());
}

// cuando cargue la pagina, inicializar todo
document.addEventListener('DOMContentLoaded', function() {
    actualizarContadorCarrito();   // actualizar el contador
    actualizarBotonesStock();      // revisar que botones mostrar
});

// TODO: agregar mas funciones como:
// - guardar favoritos
// - comparar productos  
// - filtros por categoria
// - paginacion cuando haya muchos productos