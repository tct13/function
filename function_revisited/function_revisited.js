//Question 1:

var words = ["hello", "what", "is", "up", "dude"];
var words1 = ["hello1", "what1", "is1", "up1", "dude1"];

var lengthArray = [];


words.forEach( function (list) {
  lengthArray.push(list.length);
  console.log(lengthArray);
});





//how to think of forEach in the above per Prima's explanation

// words.forEach(foo)
//
// function foo (list) {
//   var lengthArray = []
//   lengthArray.push(list.length)
//   console.log(lengthArray)
//   return lengthArray
// }
//
// document.addEventListener('click', foo )







// Short Question 4


var array = [ 2, 3, 4, 5 ];
var result = 0;

// array.forEach( function ( list ) {
//   result += list;
//   console.log(result);
//   return result;
// });




var array1 = [ 2, 3, 4, 5 ];
var result = 1;
// here result initialised  to 1 rather 0


array1.forEach( function ( list ) {
  result *= list;
  console.log(result);
  return result;
});






//Short Question 7


var wordArray = ["The", "quick", "brown", "fox", "jumped", "jbdvkbkjfbkvbdjkd"] ;
var longestWord = "";

wordArray.reduce( function( prev, curr ) {

console.log(prev, curr)

  // if (prev.length > curr.length) {
  //   longestWord = prev;
  // }
  // else {
  //   longestWord = curr;
  // }

  longestWord =
  (prev.length > curr.length) ? longestWord = prev : longestWord = curr ;
  //tenary operators used to replace / in place of the if/else loop (only if/else loop). put into a var

  return longestWord;
});

console.log(longestWord);
console.log(longestWord.length);





// same as above - Prima's solution went through in class but this got 2 returns

// var strArr = ["hello", "it's", "me"]
// // calling reduce, declare the function within the ().
// var longestWord = strArr.reduce(function(prev,curr) {
//  console.log('prev: ' + prev);
//  console,log('curr: ' + curr);
// if(prev.length>curr.length) {
//  return prev
// } else {
//  return curr
// }
// });
// console.log(longestWord);








//Short Question 8


var wordArray = ["The", "quick", "brown", "fox", "jumped", "jbdvvbdjkd"] ;

// wordArray.forEach( function (x) {
//   wordArray.length > x;
//   var result = wordArray.push();
//   console.log(wordArray);
// });



// function filterLongWords (strArray, num) {
//
//   words.forEach( function () {
//     strArray.length > num;
//
//
//     resultArray.push();
//     console.log(resultArray);
//
// }





// filterLongWords(["hello", "what", "is", "up", "dude"], 3);
//
//
// function filterLongWords(arr, wordLength) {
//
// var myArray = [];
//
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i].length > wordLength) {
//     myArray.push(arr[i]);
//   }
// }
// console.log(myArray);
// return myArray;
// }






// others: object of functions


function game () {
  name: "x";
  age: 0;

  return
  {
    getName: function () {
      return name;
    },

    setName: function ( nameInput ) {
      name = nameInput;
    },

    getAge: function {
       return age;
    },

    setAge: function(ageInput) {
      age = ageInput;
    }

  }

}


var tttgame = game ();
// to mkke access to the game function private

console.log( tttgame.getName() );
