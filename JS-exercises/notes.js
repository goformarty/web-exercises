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

/* Function expressions are convenient when passing a function as an argument to another function. 

In JavaScript, a function can be defined based on a condition. 
For example, the following function definition defines myFunc only if num equals 0: */

var myFunc;
if (num === 0) {
  myFunc = function(theObject) {
    theObject.make = 'Toyota';
  }
}

/* Calling functions
Defining a function does not execute it. 
Defining the function simply names the function and specifies what to do when the function is called. 
Calling the function actually performs the specified actions with the indicated parameters. 
For example, if you define the function square, you could call it as follows: 
*/

square(5);

/* Functions must be in scope when they are called,
but the function declaration can be hoisted (appear below the call in the code), 
as in this example: */ 

console.log(square); // square is hoisted with an initial value undefined.
console.log(square(5)); // TypeError: square is not a function
var square = function(n) { 
  return n * n; 
}

/* A function can call itself. For example, here is a function that computes factorials recursively: */
function factorial(n) {
  if ((n === 0) || (n === 1))
    return 1;
  else
    return (n * factorial(n - 1));
}

// You could then compute the factorials of one through five as follows:
var a, b, c, d, e;
a = factorial(1); // a gets the value 1
b = factorial(2); // b gets the value 2
c = factorial(3); // c gets the value 6
d = factorial(4); // d gets the value 24
e = factorial(5); // e gets the value 120

/* Function scope
Variables defined inside a function cannot be accessed from anywhere outside the function, 
because the variable is defined only in the scope of the function. 
However, a function can access all variables and functions defined inside the scope in which it is defined. 
In other words, a function defined in the global scope can access all variables defined in the global scope. 
A function defined inside another function can also access all variables defined in its parent function 
and any other variable to which the parent function has access. */

// The following variables are defined in the global scope
var num1 = 20,
    num2 = 3,
    name = 'Chamahk';

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore() {
  var num1 = 2,
      num2 = 3;
  
  function add() {
    return name + ' scored ' + (num1 + num2);
  }
  
  return add();
}

getScore(); // Returns "Chamahk scored 5"
