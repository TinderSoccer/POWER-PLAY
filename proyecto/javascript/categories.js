// Category filtering functionality
function showAllProducts() {
  const productSections = document.querySelectorAll('.productos');
  productSections.forEach(section => {
    section.style.display = 'block';
  });
}

function showCategoryProducts(category) {
  const productSections = document.querySelectorAll('.productos');
  
  productSections.forEach(section => {
    if (section.getAttribute('data-category') === category) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

// Add event listeners to category links
document.addEventListener('DOMContentLoaded', function() {
  const categoryLinks = document.querySelectorAll('[data-category]');
  
  categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const category = this.getAttribute('data-category');
      showCategoryProducts(category);
      
      // Update active state
      categoryLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Add "Ver Todo" button functionality if it exists
  const showAllBtn = document.getElementById('show-all');
  if (showAllBtn) {
    showAllBtn.addEventListener('click', function(e) {
      e.preventDefault();
      showAllProducts();
      categoryLinks.forEach(l => l.classList.remove('active'));
    });
  }
});