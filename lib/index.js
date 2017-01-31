'use strict';

function animate(duration, from, to, animFunc, callback) {
  var end_time = Number(new Date()) + duration;

  var getProgress = function getProgress() {
    var progress = Math.abs((end_time - +new Date()) / duration - 1);
    return progress * (to - from) + from;
  };

  var move = function move() {
    if (end_time > +new Date()) {
      animFunc(getProgress());
      requestAnimationFrame(move);
    } else {
      animFunc(to);

      if (typeof callback === 'function') {
        callback(to);
      }
      return;
    }
  };

  move();
}