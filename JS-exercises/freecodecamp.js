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

// Truncate a string(first argument) if it is longer
// than the given maximum string length(second argument).
// Return the truncated string with a...ending.

// Note that inserting the three dots to the end
// will add to the string length.

// However,
// if the given maximum string length
// num is less than or equal to 3, then the addition
// of the three dots does not add to the 
// string length in determining the truncated string.

function truncateString(str, num) {
	if (num < str. length) {
	  if (num <= 3) {
		str = str.slice(0, num)
	  } else {
			str = str.slice(0, num - 3)
	  }
	  str += '...';
	}
	return str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 11);