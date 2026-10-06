// Cycle a real cover image and the silent video, with two visible seconds per cover.
(function () {
  'use strict';
  var timing = window.PaperMediaTiming;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var previews = Array.prototype.map.call(document.querySelectorAll('.paper-video'), function (video) {
    var frame = video.parentNode;
    var preview = { video: video, frame: frame, cover: frame.querySelector('.paper-video-cover'), visible: false,
      userPaused: false, failed: false, phase: 'cover', coverReady: false, preparing: false, timer: null };
    video.muted = true;
    preview.cover.hidden = false;

    video.addEventListener('pause', function () {
      if (preview.phase === 'video' && !video.ended && preview.visible && !document.hidden && !reducedMotion.matches && !preview.failed) {
        preview.userPaused = true;
      }
    });
    video.addEventListener('play', function () {
      preview.userPaused = false;
      preview.phase = 'video';
      clearTimer(preview);
    });
    video.addEventListener('playing', function () {
      // Keep the cover on screen while the video is buffering.
      preview.cover.hidden = true;
    });
    video.addEventListener('ended', function () {
      clearTimer(preview);
      preview.phase = 'cover';
      preview.coverReady = false;
      preview.userPaused = false;
      preview.cover.hidden = false;
      video.currentTime = 0;
      update(preview);
    });
    video.addEventListener('error', function () {
      preview.failed = true;
      clearTimer(preview);
      preview.cover.hidden = true;
      video.hidden = true;
      frame.querySelector('.paper-video-fallback').hidden = false;
    });
    // An explicit click can start playback without waiting for the automatic cycle.
    preview.cover.addEventListener('click', function () {
      if (!preview.failed) startVideo(preview);
    });
    return preview;
  });

  function clearTimer(preview) {
    window.clearTimeout(preview.timer);
    preview.timer = null;
  }

  function startVideo(preview) {
    var play = preview.video.play();
    if (play && play.catch) play.catch(function () {
      // Keep the cover button available when autoplay is blocked.
    });
  }

  function prepareCover(preview) {
    if (preview.preparing) return;
    preview.preparing = true;
    timing.imageReady(preview.cover.querySelector('img')).then(function () {
      timing.afterPaint(function () {
        preview.preparing = false;
        preview.coverReady = true;
        update(preview);
      });
    }).catch(function () {
      preview.preparing = false;
      preview.cover.hidden = true;
      preview.phase = 'video';
      update(preview);
    });
  }

  function update(preview) {
    if (preview.failed) return;
    if (!preview.visible || document.hidden) {
      clearTimer(preview);
      preview.video.pause();
      return;
    }
    if (reducedMotion.matches || preview.userPaused) {
      clearTimer(preview);
      return;
    }
    if (preview.phase === 'video') {
      startVideo(preview);
    } else if (!preview.coverReady) {
      prepareCover(preview);
    } else if (preview.timer === null) {
      preview.timer = window.setTimeout(function () {
        preview.timer = null;
        if (preview.visible && !document.hidden && !reducedMotion.matches && !preview.userPaused) startVideo(preview);
      }, timing.videoCoverDuration);
    }
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var preview = previews.filter(function (item) { return item.frame === entry.target; })[0];
        preview.visible = entry.isIntersecting && entry.intersectionRatio >= timing.visibility;
        update(preview);
      });
    }, timing.observerOptions);
    previews.forEach(function (preview) { observer.observe(preview.frame); });
  }

  function updateAll() { previews.forEach(update); }
  document.addEventListener('visibilitychange', updateAll);
  function onMotionChange() {
    if (reducedMotion.matches) previews.forEach(function (preview) { clearTimer(preview); preview.video.pause(); });
    updateAll();
  }
  if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', onMotionChange);
  else reducedMotion.addListener(onMotionChange);
}());
