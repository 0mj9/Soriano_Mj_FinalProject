
document.getElementById('year').textContent = new Date().getFullYear();
// mobile menu
const menuBtn = document.getElementById('menuBtn');
menuBtn && menuBtn.addEventListener('click', () => {
  const nav = document.querySelector('nav ul');
  if (!nav) return;
  nav.classList.toggle('hidden');
  nav.classList.toggle('flex');
});
