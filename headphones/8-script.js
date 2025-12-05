// ===== SELECT ELEMENTS =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// ===== TOGGLE NAVIGATION MENU =====
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Show or hide menu
  hamburger.classList.toggle('open');  // Animate hamburger
});

// ===== CLOSE MENU WHEN LINK CLICKED (OPTIONAL) =====
const links = navLinks.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('open');
    }
  });
});
