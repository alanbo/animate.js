function animate(duration, from, to, animFunc, callback) {
  let end_time = Number(new Date()) + duration;

  let getProgress = function() {
    let progress = Math.abs(((end_time - +new Date()) / duration) - 1);
    return (progress * (to - from)) + from;
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
