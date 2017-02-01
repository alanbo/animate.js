'use strict';

function initAnimate() {
  var easingFunction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (t, b, c, d) {
    return c * t / d + b;
  };


  return function (duration, from, to, animFunc, callback) {
    var end_time = Number(new Date()) + duration;

    var getProgress = function getProgress() {
      var time_passed = end_time - +new Date();
      var change = from - to;

      return easingFunction(time_passed, to, change, duration);
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
  };
}