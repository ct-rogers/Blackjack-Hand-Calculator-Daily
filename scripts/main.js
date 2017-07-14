/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

// Number cards are worth their stated value: 1-10 (1 = 1 point, 4 = 4 points, 9 = 9, etc)

// Face Cards are worth 10 points, Jack (J), Queen (Q) and King (K): J, Q, K = Worth 10 points each

// The Ace Card is special. It has two possible values, 1 or 11, whichever gets you closer to 21 without going over 21. A = Worth 1 or 11 points.

// The possible values for cards are: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" ] ... so (array = "hand")

//To-do list
//change the strings to numbers
//change K, Q, J to:  10
//change A to:  1 || 11
//sum up array:  (without A?)
//if statement:  with A

// value of cards is an array = hand, so ...
// let hand = [] (start with empty array)
// let total = 0 (start with zero-based total for each hand)

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
//The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

//string: The value to parse. If the string argument is not a string, then it is converted to a string (using the ToString abstract operation). Leading whitespace in the string argument is ignored.

//radix: An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the above mentioned string. Specify 10 for the decimal numeral system commonly used by humans. Always specify this parameter to eliminate reader confusion and to guarantee predictable behavior. Different implementations produce different results when a radix is not specified, usually defaulting the value to 10.

//Return value:  An integer number parsed from the given string. If the first character cannot be converted to a number, NaN is returned.

function handValue(hand) {
  let total = 0
  //change the high cards to '10'
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === "K" || hand[i] === "Q" || hand[i] === "J") {
      total = total + 10
      //change A to:  11 || 1
    } else if (hand[i] === "A") {
      total = total + 11
    } else {
      total = total + parseInt(hand[i])
    }
    while (total > 22) {
      total = total - 10
    }
  }

  return total
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
