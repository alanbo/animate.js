function initAnimate(easingFunction = (t,b,c,d) => c*t/d + b) {

  return function(duration, from, to, animFunc, callback) {
    let end_time = Number(new Date()) + duration;

    let getProgress = function() {
      // let progress = Math.abs(((end_time - +new Date()) / duration) - 1);
      let time_passed = end_time - +new Date();
      let change = from - to;

      // return (progress * (to - from)) + from;
      return easingFunction(time_passed, to, change, duration);
    };

    let move = function() {
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
    }

    move();

  }
}
