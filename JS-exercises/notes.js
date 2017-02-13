var orderCount = 0;

function takeOrder(topping, crustType) {
  console.log('Order: ' + crustType + ' crust topped with ' + topping);
  orderCount = orderCount + 1;
}

function getSubTotal(orderCount) {
  return orderCount * 7.5;
}

function getTax() {
  return getSubTotal(orderCount) * 0.06;
}

function getTotal() {
  return getSubTotal(orderCount) + getTax();
}

takeOrder('bacon', 'thin');
takeOrder('pepperoni', 'regular');
takeOrder('pesto', 'thin');

console.log(getSubTotal(orderCount));
console.log(getTotal());


// SCOPING 
var laundryRoom = 'Basement';
var mailRoom = 'Room 1A';

var myApartment = function() {
  var mailBoxNumber = 'Box 3';
  var laundryRoom = 'In-unit';
  console.log('Mail box: ' + mailBoxNumber + ', Laundry:' + laundryRoom);
};

myApartment();

// LOOPS

/* Loops offer a quick and easy way to do something repeatedly.

The statements for loops provided in JavaScript are:

for statement
do...while statement
while statement
labeled statement
break statement
continue statement
for...in statement
for...of statement


-- A for loop repeats until a specified condition evaluates to false. 

for ([initialExpression]; [condition]; [incrementExpression])
  statement
*/

var vacationSpots = [1, 2, 3];

for (var i = vacationSpots.length -1; i >= 0; i--) {
  console.log('I would love to visit ' + vacationSpots[i]);
}


var myPlaces = ['Paris', 'New York', 'Barcelona'];
var friendPlaces = ['Rome', 'Chicago', 'Paris'];

for (var i = 0; i < myPlaces.length; i++) {
  console.log(myPlaces[i]);
  
  for (var j = 0; j < friendPlaces.length; j++) {
    console.log(friendPlaces[j]);
    
    if (myPlaces[i] === friendPlaces[j]) {
     console.log('Match: ' + myPlaces[i]);
   }
 }
}

// WHILE STATEMENT
/* while statement executes its statements as long as a specified condition evaluates to true. 
while (condition)
  statement
*/

var cards = ['Diamond', 'Spade', 'Heart', 'Club'];

var currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);
  var randomNumber = Math.floor(Math.random()*4);
  currentCard = cards[randomNumber];
}

console.log('program found a spade!');

// JQUERY

var skillset = document.getElementsByClassName('skillset');


function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function() {
      //$(this).next().toggle();
      $(this).next().slideToggle(400);
      $(this).toggleClass('active');
      $(this).text('Projects Viewed');
    });                      
}                     
$(document).ready(main);


// JAVASCRIPT 
/* 
JavaScript is case-sensitive and uses the Unicode character set.
In JavaScript, instructions are called statements and are separated by a semicolon (;)
Spaces, tabs and newline characters are called whitespace. 
*/


// Check if the user is ready to play!
confirm("I am ready to play!");
var age = prompt("What's your age");
if (age < 13)
{
    console.log("Allowed, but I don't take responsibility");    
}
else
{
    console.log("Play on!");    
}


// FUNCTIONS
/* 
A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

The name of the function.
A list of arguments to the function, enclosed in parentheses and separated by commas.
The JavaScript statements that define the function, enclosed in curly brackets, { }. 
*/

function square(number) {
  return number * number;
}

/* Function expressions

While the function declaration above is syntactically a statement, functions can also be created by a function expression. 
Such a function can be anonymous; it does not have to have a name. 
For example, the function square could have been defined as:
*/

var square = function(number) { return number * number; };
var x = square(4); // x gets the value 16
