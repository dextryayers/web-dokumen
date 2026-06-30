import ScrollReveal from 'scrollreveal';

function showAll() {
  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}

export function initScrollReveal() {
  try {
    var rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (rm) {
      showAll();
      return;
    }

    var sr = ScrollReveal({
      reset: true,
      duration: 700,
      distance: '30px',
      origin: 'bottom',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      viewFactor: 0.1,
    });

    document.querySelectorAll('[data-reveal]:not([data-reveal-stagger] *)').forEach(function (el) {
      var dir = el.getAttribute('data-reveal-dir') || 'up';
      var dist = el.getAttribute('data-reveal-dist') || null;
      var dur = parseFloat(el.getAttribute('data-reveal-dur')) || null;
      var delay = parseFloat(el.getAttribute('data-reveal-delay')) || 0;
      var scale = el.getAttribute('data-reveal-scale') === 'true' ? 0.97 : null;

      var originMap = { up: 'bottom', down: 'top', left: 'right', right: 'left' };
      var origin = originMap[dir] || 'bottom';

      var opts = { origin: origin, delay: delay * 1000 };
      if (dist) opts.distance = dist + 'px';
      if (dur) opts.duration = dur * 1000;
      if (scale) opts.scale = scale;

      sr.reveal(el, opts);
    });

    document.querySelectorAll('[data-reveal-stagger]').forEach(function (container) {
      var children = Array.from(container.children);
      if (!children.length) return;

      var dir = container.getAttribute('data-reveal-dir') || 'up';
      var dist = container.getAttribute('data-reveal-dist') || null;
      var dur = parseFloat(container.getAttribute('data-reveal-dur')) || null;
      var staggerVal = parseFloat(container.getAttribute('data-reveal-stagger')) || 0.06;

      var originMap = { up: 'bottom', down: 'top', left: 'right', right: 'left' };
      var origin = originMap[dir] || 'bottom';

      var opts = { origin: origin, interval: staggerVal * 1000 };
      if (dist) opts.distance = dist + 'px';
      if (dur) opts.duration = dur * 1000;

      sr.reveal(children, opts);
    });
  } catch (e) {
    showAll();
  }
}
