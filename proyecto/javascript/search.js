// Search functionality for products
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchResults = document.getElementById('search-results');
    const contentContainer = document.querySelector('.content-container');
    const clearSearchBtn = document.getElementById('clear-search');
    const searchProductsContainer = document.querySelector('.search-products-container');

    // All products data (synchronized with producto-detalle.js)
    const products = [
        // Consolas
        { id: 'ps5', name: 'Consola PlayStation 5 Slim', price: '$599.999', image: 'imagenes/ps5.png', category: 'Consolas' },
        { id: 'nintendo-oled', name: 'Consola Nintendo Switch Modelo OLED Neon', price: '$349.999', image: 'imagenes/nintendo-oled.png', category: 'Consolas' },
        { id: 'nintendo-switch-2', name: 'Nintendo Switch 2', price: '$449.999', image: 'imagenes/nintenso-switch-2.png', category: 'Consolas' },
        { id: 'xbox-series-x', name: 'Xbox Series X 1 TB Digital Blanca', price: '$549.999', image: 'imagenes/xbox.png', category: 'Consolas' },
        { id: 'steam-deck', name: 'Steam Deck 512GB OLED', price: '$649.999', image: 'imagenes/steam-deck-512gb-oled.png', category: 'Consolas' },
        { id: 'ps5-pro', name: 'PlayStation 5 Pro', price: '$799.999', image: 'imagenes/playstation-5-pro.png', category: 'Consolas' },
        { id: 'xbox-series-s', name: 'Xbox Series S Digital Edition', price: '$299.999', image: 'imagenes/xbox-series-s-digital.png', category: 'Consolas' },
        
        // Accesorios
        { id: 'memoria-ssd', name: 'Memoria SSD M2 PS5/PC 1TB con disipador', price: '$159.999', image: 'imagenes/Memoria-ssd-removebg-preview.png', category: 'Accesorios' },
        { id: 'teclado-mecanico', name: 'Teclado Mecánico RGB Gaming K70', price: '$129.999', image: 'imagenes/teclado-mecanico-rgb-k70.png', category: 'Accesorios' },
        { id: 'mouse-gaming', name: 'Mouse Gaming Logitech G502 Hero', price: '$89.999', image: 'imagenes/mouse-gaming-logitech-g502.png', category: 'Accesorios' },
        { id: 'webcam-gaming', name: 'Webcam 4K Gaming Streamer Pro', price: '$199.999', image: 'imagenes/webcam-4k-gaming-streamer.png', category: 'Accesorios' },
        
        // Juegos de Mesa
        { id: 'monopoly-gamer', name: 'Monopoly Gamer Edition Mario Bros', price: '$45.999', image: 'imagenes/monopoly-gamer-mario-bros.png', category: 'Juegos de Mesa' },
        { id: 'uno-flip', name: 'UNO Flip! Juego de Cartas', price: '$19.999', image: 'imagenes/uno-flip-juego-cartas.png', category: 'Juegos de Mesa' },
        { id: 'jenga-classic', name: 'Jenga Classic Torre de Madera', price: '$29.999', image: 'imagenes/jenga-classic-torre-madera.png', category: 'Juegos de Mesa' },
        
        // Juegos de Video (from banners)
        { id: 'kirby', name: 'Kirby and the Forgotten Land Switch', price: '$51.999', image: 'banner/banner kirby.png', category: 'Juegos' },
        { id: 'fifa26', name: 'FIFA 26 PS5', price: '$69.749', image: 'banner/FIFA26.png', category: 'Juegos' },
        { id: 'hollowKnightSilksong', name: 'Hollow Knight: Silksong - Nintendo Switch', price: '$49.499', image: 'banner/HOLLLOWKNIGTH.png', category: 'Juegos' }
    ];

    function searchProducts(query) {
        if (!query.trim()) return [];
        
        return products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
    }

    function displaySearchResults(results, query) {
        if (results.length === 0) {
            searchProductsContainer.innerHTML = `
                <div class="no-results">
                    <h3>No se encontraron productos para "${query}"</h3>
                    <p>Prueba con otros términos de búsqueda</p>
                </div>
            `;
        } else {
            searchProductsContainer.innerHTML = `
                <div class="search-info">
                    <p>Se encontraron ${results.length} producto(s) para "${query}"</p>
                </div>
                <div class="productos-lista">
                    ${results.map(product => `
                        <div class="producto">
                            <a href="#" onclick="selectProduct('${product.id}'); return false;">
                                <img src="${product.image}" alt="${product.name}">
                                <h3>${product.name}</h3>
                            </a>
                            <div class="producto-precio">${product.price}</div>
                            <button class="btn-agregar-carrito" onclick="agregarAlCarrito('${product.id}', '${product.name}', ${parseFloat(product.price.replace('$', '').replace(/\./g, ''))}, '${product.image}')">
                                Agregar al Carrito
                            </button>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    }

    function performSearch() {
        const query = searchInput.value.trim();
        
        if (query === '') {
            clearSearch();
            return;
        }

        const results = searchProducts(query);
        displaySearchResults(results, query);
        
        // Hide main content and show search results
        contentContainer.style.display = 'none';
        searchResults.style.display = 'block';
    }

    function clearSearch() {
        searchInput.value = '';
        contentContainer.style.display = 'block';
        searchResults.style.display = 'none';
        searchProductsContainer.innerHTML = '';
        
        // Show all categories again
        if (typeof showAllProducts === 'function') {
            showAllProducts();
        }
    }

    // Event listeners
    searchBtn.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Real-time search as user types (optional, uncomment if desired)
    // searchInput.addEventListener('input', function() {
    //     if (this.value.length >= 2) {
    //         performSearch();
    //     } else if (this.value.length === 0) {
    //         clearSearch();
    //     }
    // });

    clearSearchBtn.addEventListener('click', clearSearch);
});