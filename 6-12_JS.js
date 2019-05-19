                                              // PROBLEM #1 //
// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

//For example, given the following list:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Europe', age: 30, language: 'JavaScript' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Europe', age: 30, language: 'JavaScript' }
// ];


// var sum = 0;
// var JS = list1.filter(function(dev)
// {

//   if (dev.continent === 'Europe' && dev.language === 'JavaScript')
//   {
//     return sum = sum + 1;
    
//   }
// })
  

// console.log(sum);

                      // PROBLEM 2


// Your task is to return an array where each object will have a new property 'greeting' with the following string value:
// Hi < firstName here >, what do you like the most about < language here >?
// For example, given the following input array:
// var list1 = [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
// ];



// function greet(list1) {
 
 
//  return list1.map( person=> {person.greeting = "my name is " + person.firstName + "I love " + person.language;


//    return person;




//  });



// }

//  console.log(greet(list1));

                              //PROBLEM 3


// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

// Your task is to return one of the following strings:

// < firstName here >, < country here > of the first Python developer who has signed up; or
// There will be no Python developers if no Python developer has signed up.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//   { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' },

// ];


// // // Use .find and an If statement, or ternary =)

// // // To embed javascript variables we use backticks ` and ${variable}
// const dev = list1.find(x => x.language === 'Python') //const= can be use with another function=this statement is the condition
// console.log(dev ? dev.firstName +  dev.country : "No Python developer");


                  //PROBLEM 4


// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
// Example
// array = [5, 3, 2, 8, 1, 4]
// // // // Trick is to create an array of the odd numbers using filter, then map them back into the starting array:
//      function sortArray(array) {
//             const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//             console.log(odd);
//            return array.map((x) => x % 2 ? odd.shift() : x); //if x is odd, shift the number else just keep the number
//           }
//   console.log(sortArray(array));




// QUICK PROBLEM #5 //
// Your task is to return:
// true if at least one Ruby developer has signed up;
// false if there will be no Ruby developers.
// For example, given the following input array:
// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];
// function isRubyComing(list1) {
//   return list1.some(e => e.language === 'Ruby');
// }
// console.log(isRubyComing(list1));
