// Check if a string (first argument, str) ends with 
// the given target string (second argument, target).

// This challenge can be solved with the .endsWith() 
// method, which was introduced in ES2015. But for the 
// purpose of this challenge, we would like you to use 
// one of the JavaScript substring methods instead.


function confirmEnding(str, target) {
	var substrLength = target.length;
	if (str.substr(-substrLength) === target) {
		return true;
	}
	return false;
}

confirmEnding("Bastian", "n");




// Repeat a given string(first argument) num times(second argument).
// Return an empty string
// if num is not a positive number.

function repeatStringNumTimes(str, num) {
	if (num < 0) {
	  return '';
	}
	var arr = new Array(num).fill(str);
	return arr.join('');
  }
  
  repeatStringNumTimes("abc", 3);