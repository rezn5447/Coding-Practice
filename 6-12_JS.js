// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
//For example, given the following list:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Europe', age: 30, language: 'JavaScript' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Europe', age: 30, language: 'JavaScript' }
];
// Your task is to return the number of JavaScript developers coming from Europe.
// Use .filter
// Should return 3
function javascriptEurope(list) {
  return list.filter( (developer) => developer.continent == 'Europe' && developer.language == 'JavaScript').length;
}

javascriptEurope(list1);

                                      // PROBLEM #2 //
// Your task is to return an array where each object will have a new property 'greeting' with the following string value:
// Hi < firstName here >, what do you like the most about < language here >?
// For example, given the following input array:
var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
// Your function should return the following array:
[
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];
// The trick is to return a person, adding the property as we go
// you will need a block statement
// Use .map

function addGreeting(contact) {
  contact.greeting = 'Hi ' + contact.firstName + ', what do you like the most about ' + contact.language + '?';
  return contact;
}

function mapGreetings(contacts) {
	contactsWithGreeting = contacts.map( (contact) => addGreeting(contact));
	return contactsWithGreeting;
}

mapGreetings(list1);

// PROBLEM #3 //
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.
// Your task is to return one of the following strings:
// < firstName here >, < country here > of the first Python developer who has signed up; or
// There will be no Python developers if no Python developer has signed up.
// For example, given the following input array:
var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

function findPython(list) {
  var pythonDeveloper = list.find(developer => developer.language == 'Python')
  return "Python developer: " + (pythonDeveloper != null ? `${pythonDeveloper.firstName} ${pythonDeveloper.lastName}` : 'has not signed up yet.');
}

findPython(list1);

// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
// Example
var numbers = [5, 3, 2, 8, 1, 4];
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
// Trick is to create an array of the odd numbers using filter, then map them back into the starting array:
// const odds = arr.filter((n) => n % 2 != 0 )
// then sort it odds.sort((a,b) => a - b) 
function sortOddArray(array) {
  var odds = array.filter((n) => n % 2 != 0);
  odds = odds.sort((a, b) => a - b );
  array = array.map(n => n % 2 != 0 ? odds.shift() : n);
  return array;
}
sortOddArray(numbers);

// QUICK PROBLEM #5 //
// I didn't do anything to this one, because it already works:

// Your task is to return:
// true if at least one Ruby developer has signed up;
// false if there will be no Ruby developers.
// For example, given the following input array:
var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];
function isRubyComing(list) {
  return list.some(e => e.language === 'Ruby');
}
isRubyComing(list1);

