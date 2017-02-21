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

var me_a = {
	first_name: 'Marty',
	likes: 'tigers'
};

var me_b = me_a;

console.log('Before');
console.log(me_a.first_name);
console.log(me_b.first_name);

me_a.first_name = 'Martyna';

console.log('After');
console.log(me_a.first_name);
console.log(me_b.first_name);