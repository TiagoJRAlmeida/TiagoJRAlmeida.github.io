function filterProjects(tag) {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    const tags = card.getAttribute('data-tags').split(' ');
    if (tag === 'all' || tags.includes(tag)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
