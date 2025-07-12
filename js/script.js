// =============================
// Student Portfolio JS
// =============================

// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const mobileThemeIcon = document.getElementById('mobile-theme-icon');
const body = document.body;

// Set theme based on localStorage or default to dark
function setTheme(mode) {
  if (mode === 'light') {
    body.classList.add('light-mode');
    if (themeIcon) themeIcon.textContent = '☀️';
    if (mobileThemeIcon) mobileThemeIcon.className = 'fas fa-sun';
  } else {
    body.classList.remove('light-mode');
    if (themeIcon) themeIcon.textContent = '🌙';
    if (mobileThemeIcon) mobileThemeIcon.className = 'fas fa-moon';
  }
  localStorage.setItem('theme', mode);
}

// Load theme preference on page load
function loadTheme() {
  const saved = localStorage.getItem('theme');
  setTheme(saved === 'light' ? 'light' : 'dark');
}

// Toggle theme on button click
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = body.classList.contains('light-mode');
    setTheme(isLight ? 'dark' : 'light');
  });
}

// Mobile theme toggle
if (mobileThemeToggle) {
  mobileThemeToggle.addEventListener('click', () => {
    const isLight = body.classList.contains('light-mode');
    setTheme(isLight ? 'dark' : 'light');
  });
}

// Run on page load
loadTheme();

// =============================
// Contact Form Validation (contact.html only)
// =============================
// This will be filled in contact.html 