function meowSoftly(meow) {
	meow = meow.toLowerCase();
	console.log('Small cat meows: ' + meow);
}

function meowLoudly(meow) {
	meow = meow.toUpperCase();
	console.log('Fat cat meows: ' + meow);
}

exports.meowSoftly = meowSoftly;

exports.meowLoudly = meowLoudly;