document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('back-to-top');
  
    window.addEventListener('scroll', () => {
      btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
  
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });