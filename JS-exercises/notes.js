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

/* Scope and the function stack
Recursion
A function can refer to and call itself. There are three ways for a function to refer to itself:

1.the function's name
2.arguments.callee
3.an in-scope variable that refers to the function
For example, consider the following function definition:
*/
var foo = function bar() {
   // statements go here
};

/* Within the function body, the following are all equivalent:
1. bar()
2. arguments.callee()
3. foo()

A function that calls itself is called a recursive function. 
In some ways, recursion is analogous to a loop. Both execute the same code multiple times, 
and both require a condition (to avoid an infinite loop, or rather, infinite recursion in this case). 
For example, the following loop:
*/
var x = 0;
while (x < 10) { // "x < 10" is the loop condition
   // do stuff
   x++;
}
// can be converted into a recursive function and a call to that function: 
function loop(x) {
  if (x >= 10) // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
    return;
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);

/* Compared to the function loop, each recursive call itself makes many recursive calls here.

It is possible to convert any recursive algorithm to a non-recursive one, 
but often the logic is much more complex and doing so requires the use of a stack. 
In fact, recursion itself uses a stack: the function stack. */

function foo(i) {
  if (i < 0)
    return;
  console.log('begin: ' + i);
  foo(i - 1);
  console.log('end: ' + i);
}
foo(3);

// Output:

// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3


// DO ... WHILE STATEMENT
/* The do...while statement creates a loop that executes a specified statement 
until the test condition evaluates to false. The condition is evaluated after 
executing the statement, resulting in the specified statement executing at least once. */

/* SYNTAX
do
   statement
while (condition); 

--> statement
A statement that is executed at least once and is re-executed each time the condition evaluates to true. 
To execute multiple statements within the loop, use a block statement ({ ... }) to group those statements.

--> condition
An expression evaluated after each pass through the loop. If condition evaluates to true, the statement is re-executed. 
When condition evaluates to false, control passes to the statement following the do...while.
*/

// EXAMPLE 
// <div id="example"></div>

var result = '';
var i = 0;
do {
   i += 1;
   result += i + ' ';
} while (i < 5);
document.getElementById('example').innerHTML = result;


// DRAGON SLAYER GAME

var slaying = true;
// A bit of new math magic to calculate the odds
// of hitting the dragon. We'll cover this soon!
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;
    
    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}


// SWITCH

//SYNTAX
switch (expression) {
  case value1:
    //Statements executed when the result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the result of expression matches valueN
    [break;]
  default:
    //Statements executed when none of the values match the value of the expression
    [break;]
}

/* --> expression
An expression whose result is matched against each case clause.
--> case valueN
A case clause used to match against expression. 

DEFINITION
A switch statement first evaluates its expression. 
It then looks for the first case clause whose expression evaluates to the same value 
as the result of the input expression (using strict comparison, ===) and transfers control to that clause, 
executing the associated statements. 
(If multiple cases match the provided value, the first case that matches is selected, 
even if the cases are not equal to each other.) If no matching case clause is found, 
the program looks for the optional default clause, and if found, transfers control to that clause, 
executing the associated statements. If no default clause is found, the program continues execution 
at the statement following the end of switch. By convention, the default clause is the last clause, 
but it does not need to be so.

The optional break statement associated with each case label ensures that the program breaks out of switch once 
the matched statement is executed and continues execution at the statement following switch. 
If break is omitted, the program continues execution at the next statement in the switch statement.*/


//EXAMPLE

var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}

// ARRAYS
/*
The JavaScript Array object is a global object that is used in the construction of arrays;
which are high-level, list-like objects.

CREATE AN ARRAY
*/
var fruits = ['Apple', 'Banana'];

console.log(fruits.length);
// 2

// ACCESS (INDEX INTO) AN ARRAY ITEM
var first = fruits[0];
// Apple

var last = fruits[fruits.length - 1];
// Banana

/*
Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. 
Neither the length of a JavaScript array nor the types of its elements are fixed. 
Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array, 
JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use them. 
In general, these are convenient characteristics; but if these features are not desirable for your particular use, 
you might consider using typed arrays.

Some people think that you shouldn't use an array as an associative array. 
In any case, you can use plain objects instead, although doing so comes with its own caveats. 
See the post Lightweight JavaScript dictionaries with arbitrary keys as an example.

Accessing array elements

JavaScript arrays are zero-indexed: the first element of an array is at index 0, 
and the last element is at the index equal to the value of the array's length property minus 1.
*/

var arr = ['this is the first element', 'this is the second element'];
console.log(arr[0]);              // logs 'this is the first element'
console.log(arr[1]);              // logs 'this is the second element'
console.log(arr[arr.length - 1]); // logs 'this is the second element'


