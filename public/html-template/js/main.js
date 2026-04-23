/* ==========================================================================
   Aqua Blue Hotel — Static JavaScript
   Vanilla ES6+ • DOMContentLoaded init • data-* hooks
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ----- Navbar: scroll shadow ----- */
  (function initNavbarScroll() {
    const nav = document.querySelector('[data-component="navbar"]');
    if (!nav) return;

    const onScroll = () => {
      if (window.scrollY > 40) {
        nav.classList.add('navbar--scrolled');
      } else {
        nav.classList.remove('navbar--scrolled');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  })();

  /* ----- Navbar: mobile toggle ----- */
  (function initMobileMenu() {
    const toggle = document.querySelector('[data-toggle="mobile-menu"]');
    const menu   = document.querySelector('[data-target="mobile-menu"]');
    if (!toggle || !menu) return;

    const iconOpen  = toggle.querySelector('[data-icon="menu"]');
    const iconClose = toggle.querySelector('[data-icon="close"]');

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('navbar__mobile--open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      if (iconOpen)  iconOpen.style.display  = isOpen ? 'none' : 'block';
      if (iconClose) iconClose.style.display = isOpen ? 'block' : 'none';
    });

    // Close menu when a link is clicked
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('navbar__mobile--open');
        toggle.setAttribute('aria-expanded', 'false');
        if (iconOpen)  iconOpen.style.display  = 'block';
        if (iconClose) iconClose.style.display = 'none';
      });
    });
  })();

  /* ----- Reveal-on-scroll animations (replaces framer-motion) ----- */
  (function initScrollReveal() {
    const targets = document.querySelectorAll('[data-animate]');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseFloat(el.getAttribute('data-animate-delay') || '0');
          if (delay > 0) {
            setTimeout(() => el.classList.add('is-visible'), delay * 1000);
          } else {
            el.classList.add('is-visible');
          }
          io.unobserve(el);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    targets.forEach((el) => {
      el.classList.add('is-animate');
      io.observe(el);
    });
  })();

  /* ----- Booking bar: client-side date validation ----- */
  (function initBookingBar() {
    const bar = document.querySelector('[data-component="booking-bar"]');
    if (!bar) return;

    const checkIn  = bar.querySelector('[data-field="check-in"]');
    const checkOut = bar.querySelector('[data-field="check-out"]');

    if (checkIn && checkOut) {
      checkIn.addEventListener('change', () => {
        if (checkIn.value) checkOut.min = checkIn.value;
      });
    }
  })();

  /* ----- Forms: simple submit handler (no backend) ----- */
  (function initForms() {
    document.querySelectorAll('[data-form]').forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const note = form.querySelector('[data-form-note]');
        if (note) {
          note.textContent = 'Thanks — we received your message and will be in touch shortly.';
          note.style.fontStyle = 'normal';
        }
        form.reset();
      });
    });
  })();

});
