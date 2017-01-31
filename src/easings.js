// simple linear tweening - no easing, no acceleration


let linearTween = function (t, b, c, d) {
	return c*t/d + b;
};


// quadratic easing in - accelerating from zero velocity


let easeInQuad = function (t, b, c, d) {
	t /= d;
	return c*t*t + b;
};


// quadratic easing out - decelerating to zero velocity


let easeOutQuad = function (t, b, c, d) {
	t /= d;
	return -c * t*(t-2) + b;
};



// quadratic easing in/out - acceleration until halfway, then deceleration


let easeInOutQuad = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};


// cubic easing in - accelerating from zero velocity


let easeInCubic = function (t, b, c, d) {
	t /= d;
	return c*t*t*t + b;
};



// cubic easing out - decelerating to zero velocity


let easeOutCubic = function (t, b, c, d) {
	t /= d;
	t--;
	return c*(t*t*t + 1) + b;
};



// cubic easing in/out - acceleration until halfway, then deceleration


let easeInOutCubic = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};


// quartic easing in - accelerating from zero velocity


let easeInQuart = function (t, b, c, d) {
	t /= d;
	return c*t*t*t*t + b;
};



// quartic easing out - decelerating to zero velocity


let easeOutQuart = function (t, b, c, d) {
	t /= d;
	t--;
	return -c * (t*t*t*t - 1) + b;
};



// quartic easing in/out - acceleration until halfway, then deceleration


let easeInOutQuart = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t*t + b;
	t -= 2;
	return -c/2 * (t*t*t*t - 2) + b;
};


// quintic easing in - accelerating from zero velocity


let easeInQuint = function (t, b, c, d) {
	t /= d;
	return c*t*t*t*t*t + b;
};



// quintic easing out - decelerating to zero velocity


let easeOutQuint = function (t, b, c, d) {
	t /= d;
	t--;
	return c*(t*t*t*t*t + 1) + b;
};



// quintic easing in/out - acceleration until halfway, then deceleration


let easeInOutQuint = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t*t*t + 2) + b;
};


// sinusoidal easing in - accelerating from zero velocity


let easeInSine = function (t, b, c, d) {
	return -c * let cos(t/d * (let PI/2)) + c + b;
};



// sinusoidal easing out - decelerating to zero velocity


let easeOutSine = function (t, b, c, d) {
	return c * let sin(t/d * (let PI/2)) + b;
};



// sinusoidal easing in/out - accelerating until halfway, then decelerating


let easeInOutSine = function (t, b, c, d) {
	return -c/2 * (let cos(let PI*t/d) - 1) + b;
};



// exponential easing in - accelerating from zero velocity


let easeInExpo = function (t, b, c, d) {
	return c * let pow( 2, 10 * (t/d - 1) ) + b;
};



// exponential easing out - decelerating to zero velocity


let easeOutExpo = function (t, b, c, d) {
	return c * ( -let pow( 2, -10 * t/d ) + 1 ) + b;
};



// exponential easing in/out - accelerating until halfway, then decelerating


let easeInOutExpo = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2 * let pow( 2, 10 * (t - 1) ) + b;
	t--;
	return c/2 * ( -let pow( 2, -10 * t) + 2 ) + b;
};


// circular easing in - accelerating from zero velocity


let easeInCirc = function (t, b, c, d) {
	t /= d;
	return -c * (let sqrt(1 - t*t) - 1) + b;
};



// circular easing out - decelerating to zero velocity


let easeOutCirc = function (t, b, c, d) {
	t /= d;
	t--;
	return c * let sqrt(1 - t*t) + b;
};



// circular easing in/out - acceleration until halfway, then deceleration


let easeInOutCirc = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return -c/2 * (let sqrt(1 - t*t) - 1) + b;
	t -= 2;
	return c/2 * (let sqrt(1 - t*t) + 1) + b;
};
