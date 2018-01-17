export default function (t, b, c, d) {
	t /= d;
	return -c * t*(t-2) + b;
};
