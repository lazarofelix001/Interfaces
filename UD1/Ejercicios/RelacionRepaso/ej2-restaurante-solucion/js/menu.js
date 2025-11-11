(function () {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('#menu');
  const overlay = document.querySelector('.overlay');
  const links = menu.querySelectorAll('a');

  const openMenu = () => {
    burger.classList.add('is-open');
    menu.classList.add('is-open');
    overlay.classList.add('is-active');
    burger.setAttribute('aria-expanded', 'true');
    menu.hidden = false;
    overlay.hidden = false;
  };

  const closeMenu = () => {
    burger.classList.remove('is-open');
    menu.classList.remove('is-open');
    overlay.classList.remove('is-active');
    burger.setAttribute('aria-expanded', 'false');
    setTimeout(() => {
      if (!menu.classList.contains('is-open')) {
        menu.hidden = true;
        overlay.hidden = true;
      }
    }, 300);
  };

  const toggleMenu = () => {
    const open = burger.getAttribute('aria-expanded') === 'true';
    open ? closeMenu() : openMenu();
  };

  burger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  links.forEach(a => a.addEventListener('click', closeMenu));
})();