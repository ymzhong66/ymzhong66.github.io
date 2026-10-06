// Count viewing time after the image is decoded and almost entirely on screen.
(function () {
  'use strict';
  var header = document.querySelector('.masthead');
  var inset = header ? Math.ceil(header.getBoundingClientRect().height) : 0;
  var ready = new WeakMap();
  window.PaperMediaTiming = {
    duration: 3000,
    videoCoverDuration: 2000,
    visibility: 0.9,
    observerOptions: { threshold: [0, 0.9], rootMargin: '-' + inset + 'px 0px 0px 0px' },
    imageReady: function (image) {
      if (ready.has(image)) return ready.get(image);
      image.loading = 'eager';
      var loaded = new Promise(function (resolve, reject) {
        if (image.complete) {
          if (image.naturalWidth) resolve();
          else reject(new Error('Image unavailable'));
        } else {
          image.addEventListener('load', resolve, { once: true });
          image.addEventListener('error', reject, { once: true });
        }
      }).then(function () {
        return image.decode ? image.decode() : undefined;
      });
      ready.set(image, loaded);
      return loaded;
    },
    afterPaint: function (callback) {
      window.requestAnimationFrame(function () { window.requestAnimationFrame(callback); });
    }
  };
}());
