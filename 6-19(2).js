// You will be given a function in Javascript. All you have to do is rewrite it using ES6:


                                              // PROBLEM #1 //
// Given this array of numbers: 
numbers = [1,2,3]

// Your task is to return an array with all the numbers doubled and multiplied by 
// their respective index in the array.

function doublesAndIndex(nums) {
   return nums.map(function (number,index){
     return ((number * 2 ) * index);
   })
}


const doublesAndIndex2 = (nums) => nums.map((number, index) =>  ((number * 2) * index));


console.log(doublesAndIndex2(numbers));
// Put es6 version here:








                                              // PROBLEM #2 //
//Given the following lists:

var list1 = [
  { firstName: 'Roger', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Rupert', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'America', continent: 'Europe', age: 30, language: 'JavaScript' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' },
  { firstName: 'Richard', lastName: 'M.', country: 'America', continent: 'Europe', age: 30, language: 'JavaScript' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Europe', continent: 'Europe', age: 30, language: 'JavaScript' },
  { firstName: 'Rupaul', lastName: 'M.', country: 'Tajikistan', continent: 'Europe', age: 30, language: 'JavaScript' }
];

var list2 = [
  { firstName: 'Doger', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Lodash', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'America', continent: 'Europe', age: 30, language: 'JavaScript' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' },
  { firstName: 'Wichard', lastName: 'M.', country: 'America', continent: 'Europe', age: 30, language: 'JavaScript' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Europe', continent: 'Europe', age: 30, language: 'JavaScript' },
  { firstName: 'SongeBob', lastName: 'M.', country: 'Tajikistan', continent: 'Europe', age: 30, language: 'JavaScript' }
];

// Your task is to return true if any of the JavaScript developers names start with R.

// Use .some and .includes


function includesR(list){
  return list.some( function(dev) {
    return dev.firstName[0].includes('R') && dev.language.includes('JavaScript');
  })
}

console.log(includesR(list1));

const includesR2 = (list) => list.some((dev) => dev.firstName[0].includes('R') && dev.language.includes('JavaScript'));

console.log(includesR2(list1));
// Put es6 version here:








                                              // PROBLEM #3 //

// Write a function that loops through the numbers n down to 0. Bonus points for recursion.

function looper(n){
  var i = n
  while(i >= 0){
    console.log(i);
    i--
  }
  
  return 'Done';
}


// Put es6 version here:

const looper2 = (n) => {
  while (n >= 0) {
    console.log(n);
    n--
  }
  return 'Done';
};

console.log(looper2(2));






// Solutions will go here once we're all ready to see them:  //




                    
