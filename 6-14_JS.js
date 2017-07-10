/*
                                              // PROBLEM #1 //
You will be given an array of objects (associative arrays in PHP) representing data about developers
who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP) which includes
the count of each coding language represented at the meetup.

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
your function should return the following object (associative array in PHP):

{ C: 2, JavaScript: 1, Ruby: 1 }
*/




list1.reduce(function(previous, item) {
  if (item.language === 'C') { ++previous.c }
  if (item.language === 'JavaScript') { ++previous.javascript }
  if (item.language === 'Ruby') { ++previous.ruby }
  return previous;
}, {c: 0, javascript: 0, ruby: 0});







/*
                                              // PROBLEM #2 //
You will be given an array of objects representing data about developers who have signed up to attend
the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];
  write a function that returns the average age of developers (rounded to the nearest integer). 
  In the example above your function should return 50 (number).

  Notes:
  The input array will always be valid and formatted as in the example above.
  Age is represented by a number which can be any positive integer. 

*/





// Can i refactor this down into one function?

let dividend = 0;
let total = 0;

list1.forEach(function(current) {
  total += current.age;
  dividend += 1;
});

const average = this.total / this.dividend;

Math.round(average);







/*
                                              // PROBLEM #3 //
Given the following input array:

var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
write a function that adds the username property to each object in the input array:

[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
    username: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
    username: 'nore2000' }
]
  The value of the username property is composed by concatenating:

  firstName in lower-case;
  first letter of the lastName in lower-case; and

  the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. 
  Please make sure that your function delivers the correct birth year irrespective of when it will be executed, 
  for example it should also work correctly for a meetup organised in 10-years-time. 
  The example above assumes that the function is run in year 2020.

  Notes:

  The input array will always be valid and formatted as in the example above.
  Age is represented by a number which can be any positive integer.
  Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
  Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter. 

*/





// The year doesn't always compute correctly, resulting from month overlap/underlap no doubt, i'm moving on for now, would love feedback to solve the issue

// This problem is complex and in depth and enjoyable

list1.map(function(item) {
  const first = item.firstName;
  const last = item.lastName;
  const noPeriod = last.slice(0, 1);
  const date = new Date();
  const year = date.getFullYear();
  const addYear = year - item.age;
  item.username = first.toLowerCase() + noPeriod.toLowerCase() + addYear;
  return item;
});






/*
                                              // PROBLEM #4 //
  You have an array of numbers.
  Your task is to sort ascending even numbers but odd numbers must be on their places.

  Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

  Example

  sortArray([5, 3, 2, 8, 1, 4]) == [5, 3, 2, 8, 1, 4]

  Trick is to create an array of the odd numbers using filter, then map them back into the starting array:

  const evens = arr.filter((n) => n % 2 == 0 )
  then sort it evens.sort((a,b) => a - b) 
*/



// Again, im still a little fuzzy on the function replace_even_in_order logic



function sortArray(array) {

  var array2 = array.filter(is_even).sort(ascending);
  return array.map(replace_even_inorder);


  function ascending(a, b) {

    return a > b;
  }

  function is_even(num) {

    return num % 2 === 0;
  }

  function replace_even_inorder(num) {

    return is_even(num) ? array2.shift() : num;
  }
}

sortArray(list1);
