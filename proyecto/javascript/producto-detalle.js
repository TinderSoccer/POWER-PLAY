// Todos los productos que tenemos
var productos = {
  'ps5': {
    nombre: 'Consola PlayStation 5 Slim',
    categoria: 'Consolas',
    imagen: 'imagenes/ps5.png',
    precio: 599.999,
    precioOriginal: 699.999,
    descuento: 15,
    descripcion: 'La PlayStation 5 Slim ofrece una experiencia de juego revolucionaria con tecnología de próxima generación. Disfruta de gráficos increíbles, tiempos de carga ultrarrápidos y audio 3D inmersivo.',
    caracteristicas: [
      'Procesador AMD Ryzen Zen 2 de 8 núcleos',
      'GPU AMD Radeon RDNA 2',
      'SSD ultra rápido de 825GB',
      'Ray Tracing en tiempo real',
      'Audio 3D Tempest',
      'Retrocompatibilidad con PS4'
    ],
    especificaciones: {
      'Procesador': 'AMD Ryzen Zen 2 de 8 núcleos a 3.5GHz',
      'GPU': 'AMD Radeon RDNA 2 - 10.28 TFLOPs',
      'Memoria': '16GB GDDR6',
      'Almacenamiento': 'SSD NVMe de 825GB',
      'Dimensiones': '390mm x 104mm x 260mm',
      'Peso': '3.9kg',
      'Conectividad': 'Wi-Fi 6, Bluetooth 5.1, Ethernet'
    }
  },
  'nintendo-oled': {
    nombre: 'Consola Nintendo Switch Modelo OLED Neon',
    categoria: 'Consolas',
    imagen: 'imagenes/nintendo-oled.png',
    precio: 349.999,
    precioOriginal: 389.999,
    descuento: 10,
    descripcion: 'La Nintendo Switch OLED ofrece una pantalla vibrante de 7 pulgadas, mayor almacenamiento y un soporte ajustable mejorado. Juega en casa o en movimiento.',
    caracteristicas: [
      'Pantalla OLED de 7 pulgadas',
      'Almacenamiento interno de 64GB',
      'Soporte ajustable mejorado',
      'Audio mejorado en modo portátil',
      'Base con puerto LAN incorporado',
      'Joy-Con Neon Azul y Rojo'
    ],
    especificaciones: {
      'Pantalla': 'OLED de 7 pulgadas, 1280×720',
      'Procesador': 'NVIDIA Custom Tegra',
      'Memoria': '4GB RAM',
      'Almacenamiento': '64GB eMMC',
      'Batería': '4-9 horas aproximadamente',
      'Dimensiones': '242mm x 13.9mm x 102mm',
      'Peso': '420g (solo consola)'
    }
  },
  'nintendo-switch-2': {
    nombre: 'Nintendo Switch 2',
    categoria: 'Consolas',
    imagen: 'imagenes/nintenso-switch-2.png',
    precio: 449.999,
    precioOriginal: 499.999,
    descuento: 10,
    descripcion: 'La nueva generación de Nintendo Switch con mejoras significativas en rendimiento y funcionalidades. Una experiencia de juego completamente renovada.',
    caracteristicas: [
      'Procesador de nueva generación',
      'Gráficos mejorados',
      'Mayor autonomía de batería',
      'Retrocompatibilidad con Switch',
      'Nuevos Joy-Con mejorados',
      'Pantalla de mayor resolución'
    ],
    especificaciones: {
      'Pantalla': 'OLED de 8 pulgadas, 1080p',
      'Procesador': 'NVIDIA Tegra X2',
      'Memoria': '8GB RAM',
      'Almacenamiento': '128GB',
      'Batería': '6-12 horas',
      'Dimensiones': '260mm x 15mm x 110mm',
      'Peso': '450g'
    }
  },
  'xbox-series-x': {
    nombre: 'Xbox Series X 1 TB Digital Blanca',
    categoria: 'Consolas',
    imagen: 'imagenes/xbox.png',
    precio: 549999,
    precioOriginal: 599999,
    descuento: 8,
    descripción: 'La Xbox Series X ofrece la máxima potencia de juego con 4K nativo, 120 FPS y tecnología de carga rápida. Incluye Xbox Game Pass.',
    caracteristicas: [
      'Resolución 4K nativa hasta 120 FPS',
      'SSD NVMe de 1TB personalizado',
      'Auto HDR y Spatial Audio',
      'Quick Resume para múltiples juegos',
      'Retrocompatibilidad con Xbox One, 360 y Original',
      '3 meses de Xbox Game Pass Ultimate'
    ],
    especificaciones: {
      'Procesador': 'AMD Zen 2 de 8 núcleos a 3.8GHz',
      'GPU': 'AMD RDNA 2 - 12 TFLOPs',
      'Memoria': '16GB GDDR6',
      'Almacenamiento': 'SSD NVMe de 1TB',
      'Dimensiones': '151mm x 151mm x 301mm',
      'Peso': '4.45kg',
      'Conectividad': 'Wi-Fi 5, Bluetooth 5.1'
    }
  },
  'memoria-ssd': {
    nombre: 'Memoria SSD M2 PS5/PC 1TB con disipador',
    categoria: 'Accesorios',
    imagen: 'imagenes/Memoria-ssd-removebg-preview.png',
    precio: 159.999,
    precioOriginal: 199.999,
    descuento: 20,
    descripcion: 'Memoria SSD M.2 NVMe de alta velocidad, compatible con PS5 y PC. Incluye disipador térmico para un rendimiento óptimo.',
    caracteristicas: [
      'Velocidad de lectura hasta 7,000 MB/s',
      'Compatible con PS5 y PC',
      'Disipador térmico incluido',
      'Tecnología 3D NAND',
      'Interfaz PCIe 4.0',
      'Garantía de 5 años'
    ],
    especificaciones: {
      'Capacidad': '1TB',
      'Interfaz': 'PCIe 4.0 x4, NVMe 1.4',
      'Velocidad lectura': 'Hasta 7,000 MB/s',
      'Velocidad escritura': 'Hasta 6,400 MB/s',
      'Factor de forma': 'M.2 2280',
      'Temperatura': '0°C a 70°C',
      'Durabilidad': '600 TBW'
    }
  },
  'steam-deck': {
    nombre: 'Steam Deck 512GB OLED',
    categoria: 'Consolas',
    imagen: 'imagenes/steam-deck-512gb-oled.png',
    precio: 649.999,
    precioOriginal: 729.999,
    descuento: 11,
    descripcion: 'Consola portatil gaming con pantalla OLED, perfecta para jugar tus juegos de Steam en cualquier lugar.',
    caracteristicas: [
      'Pantalla OLED de 7.4 pulgadas',
      'Almacenamiento SSD de 512GB',
      'Bateria de larga duracion',
      'Compatible con Steam Library',
      'Controles precision gaming',
      'WiFi 6E integrado'
    ],
    especificaciones: {
      'Pantalla': 'OLED 7.4", 1280x800',
      'Procesador': 'AMD Zen 2 4c/8t',
      'GPU': 'AMD RDNA 2',
      'RAM': '16GB LPDDR5',
      'Almacenamiento': '512GB NVMe SSD',
      'Bateria': '50Whr',
      'Peso': '640g'
    }
  },
  'ps5-pro': {
    nombre: 'PlayStation 5 Pro',
    categoria: 'Consolas',
    imagen: 'imagenes/playstation-5-pro.png',
    precio: 799.999,
    precioOriginal: 899.999,
    descuento: 11,
    descripcion: 'La version mas potente de PS5 con mejor rendimiento y graficos mejorados para gaming 4K.',
    caracteristicas: [
      'GPU mas potente que PS5 standard',
      'Soporte 8K nativo',
      'Ray Tracing mejorado',
      'SSD de 2TB incluido',
      'Retrocompatibilidad total',
      'Cooling system avanzado'
    ],
    especificaciones: {
      'Procesador': 'AMD Zen 2 8-core',
      'GPU': 'AMD RDNA 3 Custom',
      'RAM': '16GB GDDR6',
      'Almacenamiento': '2TB NVMe SSD',
      'Resolucion': 'Hasta 8K',
      'Ray Tracing': 'Hardware acelerado',
      'Conectividad': 'WiFi 6E, Bluetooth 5.1'
    }
  },
  'xbox-series-s': {
    nombre: 'Xbox Series S Digital Edition',
    categoria: 'Consolas',
    imagen: 'imagenes/xbox-series-s-digital.png',
    precio: 299.999,
    precioOriginal: 349.999,
    descuento: 14,
    descripcion: 'Consola compacta todo digital con gran rendimiento gaming a precio accesible.',
    caracteristicas: [
      'Gaming hasta 1440p',
      'Hasta 120 FPS',
      'SSD rapido 512GB',
      'Solo descarga digital',
      'Xbox Game Pass incluido',
      'Tamaño compacto'
    ],
    especificaciones: {
      'Procesador': 'AMD Zen 2 8-core 3.6GHz',
      'GPU': 'AMD RDNA 2 4 TFLOPs',
      'RAM': '10GB GDDR6',
      'Almacenamiento': '512GB NVMe SSD',
      'Resolucion': '1440p hasta 120fps',
      'Dimensiones': '275mm x 151mm x 63mm',
      'Peso': '1.93kg'
    }
  },
  'teclado-mecanico': {
    nombre: 'Teclado Mecánico RGB Gaming K70',
    categoria: 'Accesorios',
    imagen: 'imagenes/teclado-mecanico-rgb-k70.png',
    precio: 129.999,
    precioOriginal: 159.999,
    descuento: 19,
    descripcion: 'Teclado gaming mecanico con switches Cherry MX y retroiluminacion RGB personalizable.',
    caracteristicas: [
      'Switches Cherry MX Red',
      'Retroiluminacion RGB',
      'Anti-ghosting completo',
      'Teclas programables',
      'Cable USB trenzado',
      'Reposamuñecas incluido'
    ],
    especificaciones: {
      'Switches': 'Cherry MX Red',
      'Retroiluminacion': 'RGB 16.8M colores',
      'Conectividad': 'USB 3.0',
      'Teclas': '104 teclas',
      'Durabilidad': '50M pulsaciones',
      'Dimensiones': '440x166x38mm',
      'Peso': '1.2kg'
    }
  },
  'mouse-gaming': {
    nombre: 'Mouse Gaming Logitech G502 Hero',
    categoria: 'Accesorios',
    imagen: 'imagenes/mouse-gaming-logitech-g502.png',
    precio: 89.999,
    precioOriginal: 119.999,
    descuento: 25,
    descripcion: 'Mouse gaming de precision con sensor optico avanzado y peso ajustable.',
    caracteristicas: [
      'Sensor HERO 25K DPI',
      '11 botones programables',
      'Sistema de pesos ajustable',
      'RGB personalizable',
      'Cable PowerPlay compatible',
      'Diseño ergonomico'
    ],
    especificaciones: {
      'Sensor': 'HERO 25K',
      'DPI': '100-25,600 DPI',
      'Botones': '11 programables',
      'Durabilidad': '50M clicks',
      'Peso': '121g (sin pesos)',
      'Conectividad': 'USB-A',
      'Compatibilidad': 'PC/Mac'
    }
  },
  'webcam-gaming': {
    nombre: 'Webcam 4K Gaming Streamer Pro',
    categoria: 'Accesorios',
    imagen: 'imagenes/webcam-4k-gaming-streamer.png',
    precio: 199.999,
    precioOriginal: 249.999,
    descuento: 20,
    descripcion: 'Webcam profesional 4K ideal para streaming y gaming con autoenfoque y microfono integrado.',
    caracteristicas: [
      'Resolucion 4K 30fps',
      'Autoenfoque rapido',
      'Microfono estereo integrado',
      'Reduccion de ruido',
      'Compatible OBS/Streamlabs',
      'Montaje universal'
    ],
    especificaciones: {
      'Resolucion': '4K 30fps / 1080p 60fps',
      'Campo de vision': '90 grados',
      'Enfoque': 'Automatico',
      'Audio': 'Microfono estereo',
      'Conectividad': 'USB 3.0',
      'Compatibilidad': 'Windows/Mac/Linux',
      'Dimensiones': '94x27x27mm'
    }
  },
  'monopoly-gamer': {
    nombre: 'Monopoly Gamer Edition Mario Bros',
    categoria: 'Juegos de Mesa',
    imagen: 'imagenes/monopoly-gamer-mario-bros.png',
    precio: 45.999,
    precioOriginal: 59.999,
    descuento: 23,
    descripcion: 'Version especial de Monopoly con personajes y elementos del mundo de Super Mario Bros.',
    caracteristicas: [
      '8 tokens de personajes Nintendo',
      'Poderes especiales unicos',
      'Tablero tematico Mario',
      'Monedas en lugar de billetes',
      'Boss battles incluidas',
      '2-4 jugadores'
    ],
    especificaciones: {
      'Jugadores': '2-4 jugadores',
      'Edad': '+8 años',
      'Duracion': '60-90 minutos',
      'Contenido': 'Tablero, tokens, cartas, dados',
      'Tema': 'Super Mario Bros',
      'Idioma': 'Español',
      'Dimensiones caja': '40x27x5cm'
    }
  },
  'uno-flip': {
    nombre: 'UNO Flip! Juego de Cartas',
    categoria: 'Juegos de Mesa',
    imagen: 'imagenes/uno-flip-juego-cartas.png',
    precio: 19.999,
    precioOriginal: 24.999,
    descuento: 20,
    descripcion: 'Version renovada del clasico UNO con cartas de doble cara y nuevas reglas emocionantes.',
    caracteristicas: [
      'Cartas de doble cara',
      'Lado claro y lado oscuro',
      'Nuevas cartas de accion',
      'Reglas twist adicionales',
      'Partidas mas dinamicas',
      '2-10 jugadores'
    ],
    especificaciones: {
      'Jugadores': '2-10 jugadores',
      'Edad': '+7 años',
      'Duracion': '30-45 minutos',
      'Cartas': '112 cartas doble cara',
      'Idioma': 'Español',
      'Dimensiones': '9x6x2cm',
      'Peso': '150g'
    }
  },
  'jenga-classic': {
    nombre: 'Jenga Classic Torre de Madera',
    categoria: 'Juegos de Mesa',
    imagen: 'imagenes/jenga-classic-torre-madera.png',
    precio: 29.999,
    precioOriginal: 39.999,
    descuento: 25,
    descripcion: 'El clasico juego de habilidad y estrategia con bloques de madera autentica.',
    caracteristicas: [
      '54 bloques de madera maciza',
      'Madera de alta calidad',
      'Juego de habilidad y paciencia',
      'Facil de aprender',
      'Partidas rapidas',
      'Para toda la familia'
    ],
    especificaciones: {
      'Jugadores': '1+ jugadores',
      'Edad': '+6 años',
      'Duracion': '10-30 minutos',
      'Material': 'Madera maciza',
      'Bloques': '54 piezas',
      'Dimensiones torre': '26cm altura',
      'Peso': '800g'
    }
  }
};

// Guarda el producto que seleccionamos
function setProductData(id, nombre, imagen, categoria) {
  localStorage.setItem('selectedProduct', JSON.stringify({
    id: id,
    nombre: nombre,
    imagen: imagen,
    categoria: categoria
  }));
}

// Cambia la cantidad del producto
function changeQuantity(change) {
  var cantidad = document.getElementById('quantity');
  var cantidadActual = parseInt(cantidad.value);
  var nuevaCantidad = cantidadActual + change;
  
  if (nuevaCantidad >= 1) {
    cantidad.value = nuevaCantidad;
  }
}

// Carga la info del producto
function loadProductDetails() {
  var params = new URLSearchParams(window.location.search);
  var id = params.get('id');
  
  // Busca el producto guardado
  var productoGuardado = localStorage.getItem('selectedProduct');
  var producto = null;
  
  if (id && productos[id]) {
    producto = productos[id];
  } else if (productoGuardado) {
    var datos = JSON.parse(productoGuardado);
    producto = productos[datos.id] || {
      nombre: datos.nombre,
      categoria: datos.categoria,
      imagen: datos.imagen,
      precio: 0,
      descripcion: 'Información del producto no disponible.',
      caracteristicas: [],
      especificaciones: {}
    };
  }
  
  if (!producto) {
    // Si no encuentra nada, muestra esto
    producto = {
      nombre: 'Producto no encontrado',
      categoria: 'General',
      imagen: 'imagenes/default.png',
      precio: 0,
      descripcion: 'El producto seleccionado no se encontró.',
      caracteristicas: [],
      especificaciones: {}
    };
  }
  
  // Pone la info en la pagina
  document.getElementById('product-title').textContent = producto.nombre;
  document.getElementById('breadcrumb-category').textContent = producto.categoria;
  document.getElementById('breadcrumb-product').textContent = producto.nombre;
  document.getElementById('product-main-image').src = producto.imagen;
  document.getElementById('product-main-image').alt = producto.nombre;
  
  if (producto.precio) {
    document.getElementById('product-price').textContent = '$' + producto.precio.toLocaleString();
    if (producto.precioOriginal && producto.descuento) {
      document.getElementById('product-original-price').textContent = '$' + producto.precioOriginal.toLocaleString();
      document.getElementById('product-discount').textContent = producto.descuento + '% OFF';
    }
  }
  
  document.getElementById('product-description').textContent = producto.descripcion;
  
  // Pone las caracteristicas
  var lista = document.getElementById('product-features-list');
  lista.innerHTML = '';
  if (producto.caracteristicas) {
    producto.caracteristicas.forEach(function(caracteristica) {
      var li = document.createElement('li');
      li.textContent = caracteristica;
      lista.appendChild(li);
    });
  }
  
  // Pone las especificaciones
  var specs = document.getElementById('specs-grid');
  specs.innerHTML = '';
  if (producto.especificaciones) {
    Object.keys(producto.especificaciones).forEach(function(clave) {
      var div = document.createElement('div');
      div.className = 'spec-item';
      div.innerHTML = '<strong>' + clave + ':</strong> ' + producto.especificaciones[clave];
      specs.appendChild(div);
    });
  }
  
  // Muestra productos similares
  loadRelatedProducts(producto.categoria, id || 'unknown');
}

// Busca productos parecidos
function loadRelatedProducts(categoria, idActual) {
  var contenedor = document.getElementById('related-products-list');
  contenedor.innerHTML = '';
  
  var productosRelacionados = Object.keys(productos).filter(function(id) {
    return productos[id].categoria === categoria && id !== idActual;
  }).slice(0, 4);
  
  productosRelacionados.forEach(function(id) {
    var prod = productos[id];
    var div = document.createElement('div');
    div.className = 'producto';
    div.innerHTML = '<a href="detalle-producto.html?id=' + id + '" onclick="setProductData(\'' + id + '\', \'' + prod.nombre + '\', \'' + prod.imagen + '\', \'' + prod.categoria + '\')"><img src="' + prod.imagen + '" alt="' + prod.nombre + '"><h3>' + prod.nombre + '</h3><p class="price">$' + prod.precio.toLocaleString() + '</p></a>';
    contenedor.appendChild(div);
  });
}

// Cuando carga la pagina
document.addEventListener('DOMContentLoaded', function() {
  loadProductDetails();
  
  // Los botones
  document.querySelector('.btn-add-cart').addEventListener('click', function() {
    alert('Producto agregado al carrito!');
  });
  
  document.querySelector('.btn-favorite').addEventListener('click', function(e) {
    var icono = e.target.querySelector('i') || e.target;
    if (icono.classList.contains('far')) {
      icono.classList.remove('far');
      icono.classList.add('fas');
      alert('Producto agregado a favoritos!');
    } else {
      icono.classList.remove('fas');
      icono.classList.add('far');
      alert('Producto eliminado de favoritos!');
    }
  });
});