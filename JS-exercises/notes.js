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

