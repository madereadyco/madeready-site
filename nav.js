/* Mobile menu: progressive enhancement. Without JS the links show as a wrapped row. */
(function () {
  var header = document.querySelector('header');
  var toggle = header && header.querySelector('.menu-toggle');
  var nav = header && header.querySelector('nav');
  if (!toggle || !nav) return;
  var wide = window.matchMedia('(min-width:760px)');
  document.documentElement.classList.add('js');

  function isOpen() { return toggle.getAttribute('aria-expanded') === 'true'; }
  function setOpen(open, returnFocus) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('open', open);
    if (!open && returnFocus) toggle.focus();
  }

  toggle.addEventListener('click', function (e) {
    var open = !isOpen();
    setOpen(open);
    // Keyboard users: move into the menu. e.detail is 0 for keyboard activation.
    if (open && e.detail === 0) {
      var first = nav.querySelector('a');
      if (first) first.focus();
    }
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) {
      var inside = header.contains(document.activeElement);
      setOpen(false, inside);
    }
  });
  document.addEventListener('click', function (e) {
    if (isOpen() && !header.contains(e.target)) setOpen(false);
  });
  header.addEventListener('focusout', function (e) {
    if (isOpen() && e.relatedTarget && !header.contains(e.relatedTarget)) setOpen(false);
  });
  function onWidth() { if (wide.matches) setOpen(false); }
  if (wide.addEventListener) wide.addEventListener('change', onWidth); else wide.addListener(onWidth);
})();
