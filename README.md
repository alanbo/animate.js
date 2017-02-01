# animate.js
Simple animation function - lightweight replacement for jQuery.animate and Velocity.js with pluggable easing functions.

Example:

```javascript
import { easeInQuad } from './easings.js';

//run a factory function and provide an easing functions
const animate = initAnimate(easeInQuad);

let duration = 1000;
let from = 100;
let to = 300;

//runs on each frame with a value as per easing function
let animFunc = function(value) {
  element.style.left = value + 'px';
}

//callback runs at the end of animation
let callback = function(value) {
  console.log('callback runs and gets:', value);
}

//runs the animation
animate(duration, from, to, animFunc, callback);
```

Run initAnimate(easing) factory function and provide one of the easing functions (from easing.js file) based on Penner's equations.

The factory function returns an animation function that changes value "from" given value, "to" given value over provided "duration" according to the chosen easing. On each frame it will run a function giving to it a value. When finished, it will run a callback. 
