"use strict";

// simple linear tweening - no easing, no acceleration


var linearTween = function linearTween(t, b, c, d) {
	return c * t / d + b;
};

// quadratic easing in - accelerating from zero velocity


var easeInQuad = function easeInQuad(t, b, c, d) {
	t /= d;
	return c * t * t + b;
};

// quadratic easing out - decelerating to zero velocity


var easeOutQuad = function easeOutQuad(t, b, c, d) {
	t /= d;
	return -c * t * (t - 2) + b;
};

// quadratic easing in/out - acceleration until halfway, then deceleration


var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * t * t + b;
	t--;
	return -c / 2 * (t * (t - 2) - 1) + b;
};

// cubic easing in - accelerating from zero velocity


var easeInCubic = function easeInCubic(t, b, c, d) {
	t /= d;
	return c * t * t * t + b;
};

// cubic easing out - decelerating to zero velocity


var easeOutCubic = function easeOutCubic(t, b, c, d) {
	t /= d;
	t--;
	return c * (t * t * t + 1) + b;
};

// cubic easing in/out - acceleration until halfway, then deceleration


var easeInOutCubic = function easeInOutCubic(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * t * t * t + b;
	t -= 2;
	return c / 2 * (t * t * t + 2) + b;
};

// quartic easing in - accelerating from zero velocity


var easeInQuart = function easeInQuart(t, b, c, d) {
	t /= d;
	return c * t * t * t * t + b;
};

// quartic easing out - decelerating to zero velocity


var easeOutQuart = function easeOutQuart(t, b, c, d) {
	t /= d;
	t--;
	return -c * (t * t * t * t - 1) + b;
};

// quartic easing in/out - acceleration until halfway, then deceleration


var easeInOutQuart = function easeInOutQuart(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * t * t * t * t + b;
	t -= 2;
	return -c / 2 * (t * t * t * t - 2) + b;
};

// quintic easing in - accelerating from zero velocity


var easeInQuint = function easeInQuint(t, b, c, d) {
	t /= d;
	return c * t * t * t * t * t + b;
};

// quintic easing out - decelerating to zero velocity


var easeOutQuint = function easeOutQuint(t, b, c, d) {
	t /= d;
	t--;
	return c * (t * t * t * t * t + 1) + b;
};

// quintic easing in/out - acceleration until halfway, then deceleration


var easeInOutQuint = function easeInOutQuint(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * t * t * t * t * t + b;
	t -= 2;
	return c / 2 * (t * t * t * t * t + 2) + b;
};

// sinusoidal easing in - accelerating from zero velocity


var easeInSine = function easeInSine(t, b, c, d) {
	return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
};

// sinusoidal easing out - decelerating to zero velocity


var easeOutSine = function easeOutSine(t, b, c, d) {
	return c * Math.sin(t / d * (Math.PI / 2)) + b;
};

// sinusoidal easing in/out - accelerating until halfway, then decelerating


var easeInOutSine = function easeInOutSine(t, b, c, d) {
	return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};

// exponential easing in - accelerating from zero velocity


var easeInExpo = function easeInExpo(t, b, c, d) {
	return c * Math.pow(2, 10 * (t / d - 1)) + b;
};

// exponential easing out - decelerating to zero velocity


var easeOutExpo = function easeOutExpo(t, b, c, d) {
	return c * (-Math.pow(2, -10 * t / d) + 1) + b;
};

// exponential easing in/out - accelerating until halfway, then decelerating


var easeInOutExpo = function easeInOutExpo(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
	t--;
	return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
};

// circular easing in - accelerating from zero velocity


var easeInCirc = function easeInCirc(t, b, c, d) {
	t /= d;
	return -c * (Math.sqrt(1 - t * t) - 1) + b;
};

// circular easing out - decelerating to zero velocity


var easeOutCirc = function easeOutCirc(t, b, c, d) {
	t /= d;
	t--;
	return c * Math.sqrt(1 - t * t) + b;
};

// circular easing in/out - acceleration until halfway, then deceleration


var easeInOutCirc = function easeInOutCirc(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
	t -= 2;
	return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
};