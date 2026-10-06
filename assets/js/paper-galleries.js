// Keep the original figure first, then rotate through examples in the same frame.
(function () {
  'use strict';

  // Figures are optional for video papers; switching back preserves the cover/video cycle.
  Array.prototype.forEach.call(document.querySelectorAll('.paper-media'), function (media) {
    var buttons = media.querySelectorAll('[data-media-mode]');
    var panels = media.querySelectorAll('[data-media-panel]');
    media.querySelector('.paper-media-switcher').hidden = false;
    Array.prototype.forEach.call(buttons, function (button) {
      button.addEventListener('click', function () {
        var mode = button.getAttribute('data-media-mode');
        Array.prototype.forEach.call(panels, function (panel) {
          panel.hidden = panel.getAttribute('data-media-panel') !== mode;
        });
        Array.prototype.forEach.call(buttons, function (item) {
          item.setAttribute('aria-pressed', item === button ? 'true' : 'false');
        });
      });
    });
  });

  var timing = window.PaperMediaTiming;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  Array.prototype.forEach.call(document.querySelectorAll('.paper-gallery'), function (gallery) {
    var slides = Array.prototype.slice.call(gallery.querySelectorAll('.paper-gallery-slide'));
    if (slides.length < 2) return;
    var index = 0;
    var requestedIndex = 0;
    var revision = 0;
    var switching = false;
    var readyIndex = -1;
    var timer = null;
    var visible = false;
    var hovering = false;
    var focused = false;
    var paused = reducedMotion.matches;
    var caption = gallery.querySelector('.paper-gallery-caption');
    var toggle = gallery.querySelector('[data-gallery-toggle]');
    gallery.querySelector('.paper-gallery-controls').hidden = false;

    function updateToggle() {
      toggle.textContent = paused ? '▶' : 'Ⅱ';
      toggle.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
    }

    function show(next) {
      window.clearTimeout(timer);
      requestedIndex = (next + slides.length) % slides.length;
      var target = requestedIndex;
      var request = ++revision;
      switching = true;
      // Leave the current figure visible until the next one is decoded.
      timing.imageReady(slides[target].querySelector('img')).then(function () {
        if (request !== revision) return;
        slides[index].hidden = true;
        index = target;
        slides[index].hidden = false;
        readyIndex = index;
        caption.textContent = slides[index].getAttribute('data-caption') + ' · ' + (index + 1) + ' / ' + slides.length;
        timing.afterPaint(function () {
          if (request !== revision) return;
          switching = false;
          update();
        });
      }).catch(function () {
        if (request !== revision) return;
        switching = false;
        requestedIndex = index;
        paused = true;
        updateToggle();
        update();
      });
    }

    function update() {
      window.clearTimeout(timer);
      timer = null;
      if (!visible || document.hidden || hovering || focused || paused || switching) return;
      if (readyIndex !== index) {
        var current = index;
        var request = revision;
        timing.imageReady(slides[current].querySelector('img')).then(function () {
          if (current !== index || request !== revision) return;
          readyIndex = current;
          timing.afterPaint(update);
        }).catch(function () { paused = true; updateToggle(); });
        return;
      }
      // Preload one image ahead without charging its loading time to the next slide.
      timing.imageReady(slides[(index + 1) % slides.length].querySelector('img')).catch(function () {});
      timer = window.setTimeout(function () {
        show(index + 1);
      }, timing.duration);
    }

    function manualStep(step) {
      paused = true;
      show(requestedIndex + step);
      updateToggle();
      update();
    }

    gallery.querySelector('[data-gallery-prev]').addEventListener('click', function () { manualStep(-1); });
    gallery.querySelector('[data-gallery-next]').addEventListener('click', function () { manualStep(1); });
    toggle.addEventListener('click', function () {
      paused = !paused;
      if (!paused) {
        // An explicit Play action also works while its button still has focus.
        focused = false;
        hovering = false;
      }
      updateToggle();
      update();
    });
    gallery.addEventListener('mouseenter', function () { hovering = true; update(); });
    gallery.addEventListener('mouseleave', function () { hovering = false; update(); });
    gallery.addEventListener('focusin', function () { focused = true; update(); });
    gallery.addEventListener('focusout', function (event) {
      focused = gallery.contains(event.relatedTarget);
      update();
    });
    gallery.addEventListener('keydown', function (event) {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      manualStep(event.key === 'ArrowLeft' ? -1 : 1);
    });
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting && entries[0].intersectionRatio >= timing.visibility;
        update();
      }, timing.observerOptions);
      observer.observe(gallery.querySelector('.paper-gallery-stage'));
    }
    document.addEventListener('visibilitychange', update);
    function onMotionChange() {
      if (reducedMotion.matches) paused = true;
      updateToggle();
      update();
    }
    if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', onMotionChange);
    else reducedMotion.addListener(onMotionChange);
    updateToggle();
  });
}());
