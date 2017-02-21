// This is where all the practise code from the Introduction to Javascript tutorial goes

function hello(person) {
	console.log("Hello " + person + "!");
}

function conversation(person, topic) {
	hello(person);
	console.log('How are you?');
	console.log('Do you like ' + topic + '?');
}

function greeting(person) {
	return 'Hello ' + person + '!';
}