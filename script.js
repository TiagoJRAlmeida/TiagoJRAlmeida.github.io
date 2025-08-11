function updateNavbarHeight() {
  const navbar = document.querySelector('nav');
  document.documentElement.style.setProperty('--navbar-height', `${navbar.offsetHeight}px`);
}

window.addEventListener('load', updateNavbarHeight);
window.addEventListener('orientationchange', updateNavbarHeight);

function filterProjects() {
  const checked = Array.from(document.querySelectorAll('.filter-checkbox:checked')).map(cb => cb.value);
  const cards = document.querySelectorAll('.project-card');
  if (checked.length === 0) {
    cards.forEach(card => card.style.display = 'block');
    return;
  }
  cards.forEach(card => {
    const tags = card.getAttribute('data-tags').split(' ');
    // Show card if it matches ALL selected filters (AND logic)
    const matches = checked.every(tag => tags.includes(tag));
    card.style.display = matches ? 'block' : 'none';
  });
}

document.querySelectorAll('.filter-checkbox').forEach(cb => {
  cb.addEventListener('change', filterProjects);
});

document.getElementById('clear-filters').addEventListener('click', () => {
  document.querySelectorAll('.filter-checkbox').forEach(cb => cb.checked = false);
  filterProjects();
});