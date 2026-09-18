document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('navMenu');
  
  if (!toggle || menu) return;
    toggle.addEventListener('click', function() {
      menu.classList.toggle('active');
      toggle.textContent = menu.classList.contains('active') ? '✕' : '☰';
    });
});
