document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
function sendMsg(e) {
  e.preventDefault();
  document.getElementById('msg').textContent =
    '✅ Thank you! I will reply soon.';
  e.target.reset();
}