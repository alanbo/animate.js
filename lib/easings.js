"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var linearTween = exports.linearTween = function linearTween(t, b, c, d) {
	return c * t / d + b;
};

var easeInQuad = exports.easeInQuad = function easeInQuad(t, b, c, d) {
	t /= d;
	return c * t * t + b;
};

var easeOutQuad = exports.easeOutQuad = function easeOutQuad(t, b, c, d) {
	t /= d;
	return -c * t * (t - 2) + b;
};

var easeInOutQuad = exports.easeInOutQuad = function easeInOutQuad(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * t * t + b;
	t--;
	return -c / 2 * (t * (t - 2) - 1) + b;
};

var easeInCubic = exports.easeInCubic = function easeInCubic(t, b, c, d) {
	t /= d;
	return c * t * t * t + b;
};

var easeOutCubic = exports.easeOutCubic = function easeOutCubic(t, b, c, d) {
	t /= d;
	t--;
	return c * (t * t * t + 1) + b;
};

var easeInOutCubic = exports.easeInOutCubic = function easeInOutCubic(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * t * t * t + b;
	t -= 2;
	return c / 2 * (t * t * t + 2) + b;
};

var easeInQuart = exports.easeInQuart = function easeInQuart(t, b, c, d) {
	t /= d;
	return c * t * t * t * t + b;
};

var easeOutQuart = exports.easeOutQuart = function easeOutQuart(t, b, c, d) {
	t /= d;
	t--;
	return -c * (t * t * t * t - 1) + b;
};

var easeInOutQuart = exports.easeInOutQuart = function easeInOutQuart(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * t * t * t * t + b;
	t -= 2;
	return -c / 2 * (t * t * t * t - 2) + b;
};

var easeInQuint = exports.easeInQuint = function easeInQuint(t, b, c, d) {
	t /= d;
	return c * t * t * t * t * t + b;
};

var easeOutQuint = exports.easeOutQuint = function easeOutQuint(t, b, c, d) {
	t /= d;
	t--;
	return c * (t * t * t * t * t + 1) + b;
};

var easeInOutQuint = exports.easeInOutQuint = function easeInOutQuint(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * t * t * t * t * t + b;
	t -= 2;
	return c / 2 * (t * t * t * t * t + 2) + b;
};

var easeInSine = exports.easeInSine = function easeInSine(t, b, c, d) {
	return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
};

var easeOutSine = exports.easeOutSine = function easeOutSine(t, b, c, d) {
	return c * Math.sin(t / d * (Math.PI / 2)) + b;
};

var easeInOutSine = exports.easeInOutSine = function easeInOutSine(t, b, c, d) {
	return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};

var easeInExpo = exports.easeInExpo = function easeInExpo(t, b, c, d) {
	return c * Math.pow(2, 10 * (t / d - 1)) + b;
};

var easeOutExpo = exports.easeOutExpo = function easeOutExpo(t, b, c, d) {
	return c * (-Math.pow(2, -10 * t / d) + 1) + b;
};

var easeInOutExpo = exports.easeInOutExpo = function easeInOutExpo(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
	t--;
	return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
};

var easeInCirc = exports.easeInCirc = function easeInCirc(t, b, c, d) {
	t /= d;
	return -c * (Math.sqrt(1 - t * t) - 1) + b;
};

var easeOutCirc = exports.easeOutCirc = function easeOutCirc(t, b, c, d) {
	t /= d;
	t--;
	return c * Math.sqrt(1 - t * t) + b;
};

var easeInOutCirc = exports.easeInOutCirc = function easeInOutCirc(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
	t -= 2;
	return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
};

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */