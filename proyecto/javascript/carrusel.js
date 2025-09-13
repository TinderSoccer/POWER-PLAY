document.addEventListener('DOMContentLoaded', function() {
  var containers = document.querySelectorAll('.productos-container');
  
  containers.forEach(function(container, index) {
    var lista = container.querySelector('.productos-lista');
    
    if (!lista) return;
    
    var productos = lista.querySelectorAll('.producto');
    if (productos.length === 0) return;
    
    var indiceActual = 0;
    var intervalo;
    var velocidades = [3000, 4000, 3500]; // milisegundos
    var velocidad = velocidades[index] || 3000;
    var delay = index * 1000;
    
    function moverCarrusel() {
      indiceActual++;
      
      if (indiceActual >= productos.length) {
        indiceActual = 0;
      }
      
      var posicion = productos[indiceActual].offsetLeft;
      lista.scrollTo({ left: posicion, behavior: 'smooth' });
    }
    
    function iniciarCarrusel() {
      intervalo = setInterval(moverCarrusel, velocidad);
    }
    
    function detenerCarrusel() {
      clearInterval(intervalo);
    }
    
    // Inicia cada carrusel con delay diferente
    setTimeout(function() {
      iniciarCarrusel();
    }, delay);
    
    // Para el carrusel cuando el mouse entra
    container.addEventListener('mouseenter', detenerCarrusel);
    
    // Reinicia el carrusel cuando el mouse sale
    container.addEventListener('mouseleave', iniciarCarrusel);
  });
});