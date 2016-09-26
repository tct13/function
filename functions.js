//Question 1:

var words = ["hello", "what", "is", "up", "dude"];
var words1 = ["hello1", "what1", "is1", "up1", "dude1"];


lengths(words);
lengths(words1);


function lengths( wordString ) {

  var lengthArray = [];

  for ( var i = 0; i < wordString.length; i++ ) {

//     console.log(wordString[i]);
//     console.log(wordString[i].length);

    lengthArray.push( wordString[i].length );

  }
  console.log(lengthArray);
  return lengthArray;
}





// Question 2
function transmogrifier(number1, number2, number3) {
  var result = number1 * number2;

//   console.log(number1);
//   console.log(number2);
//   console.log(number3);
//   console.log(result);

  var result1 = Math.pow(result, number3);
  console.log(result1);
  return result1;
}

transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);




// Question 3

function wordReverse (string1) {
//   console.log(string1);
  var splitString = string1.split(" ");
//   console.log(splitString);

  var reverseString = splitString.reverse();
//  console.log(reverseString);
  var joinedReverseString = reverseString.join(" ");
  console.log(joinedReverseString);
  return joinedReverseString;

// below does the same thing as split()
//   for (var i=splitString.length-1; i>=0; i--) {
//     console.log(splitString[i]);
//   }

}

wordReverse("Now I know what a TV dinner feels like");
wordReverse("Put Hans back on the line");




// Short Question 1

function maxOfTwoNumbers (number1, number2) {
  var maxNum;

  if (number1 > number2 && number1 != number2) {
    // console.log(number1);
    maxNum = number1;
  }
  else if (number2 > number1 && number2 != number1) {
    // console.log(number2);
    maxNum = number2;
  }
  else{
    console.log("Pls check your numbers. Numbers may be equal.");
  }
  console.log(maxNum);
  return maxNum;
}


maxOfTwoNumbers (105, 105);




// Short Question 2


function maxOfThree (number1, number2, number3) {

//   console.log(number1);
//   console.log(number2);
//   console.log(number3);
  var largestNum;

  if (number1 > number2 && number1 > number3) {
    // console.log(number1);
    largestNum = number1;
  }
  else if (number2 > number1 && number2 > number3) {
      // console.log(number2);
      largestNum = number2;
  }
    else if (number3 > number1 && number3 > number2) {
      // console.log(number3);
      largestNum = number3;
  }
  else {
    console.log("Pls check your numbers. Some numbers may be equal.");
  }
  console.log(largestNum);
  return largestNum;
}

maxOfThree (99, 98, 100);




// Short Question 3

isCharacterAVowel("a");
isCharacterAVowel("A");
isCharacterAVowel("b");


function isCharacterAVowel(char) {

//   console.log(char);

  var isVowel = false;
  var charLowerCase = char.toLowerCase();

//     console.log(charLowerCase);

// can also specify case insensitivity by using /[aeiou]/i below.
  var regularExpression = /[aeiou]/;

  var isMatch = charLowerCase.match(regularExpression);

//  console.log(isMatch);

  if (isMatch) {
    isVowel = true;
  }
  console.log(isVowel);
  return isVowel;
}



// old version below


//   if (char=="a" || char=="e" || char=="i" || char=="o" || char=="u") {
//      console.log("Character is a vowel.");
//   }
//   else {
//      console.log("Character is not a vowel.");
//   }




// Short Question 4


function sumArray (array) {
  console.log(array);

  var sumArrResults = 0;

  for (i=0; i<array.length; i++) {
    sumArrResults += array[i];
  }
  console.log( sumArrResults );
  return sumArrResults;
}


sumArray( [1,2,3,4] );




function multiplyArray (array1) {
  console.log(array1);

  var multiplyArrResults = 1;

  for (i=0; i<array1.length; i++) {
    multiplyArrResults *= array1[i];
  }
  console.log( multiplyArrResults );
  return multiplyArrResults;
}



multiplyArray( [1,2,3,4] );
multiplyArray( [2,3,4,5] );






// Short Question 5

numArg( 1, 2, "a", [1, 2, "abc"], 437843, "fjbdbj");

function numArg () {
  var length = arguments.length;
  console.log(length);
  return length;
}






// Short Question 6

reverseString("jag testar");

function reverseString(wordString) {

  var reverseString =[];

  // console.log(wordString.length);

  for (var i=wordString.length-1; i>=0; i--) {
    reverseString.push(wordString[i]);
    // console.log(wordString[i]);
  }
console.log( reverseString.join ("") );
return reverseString.join("");
}








//Short Question 7

findLongestWords( ["The", "quick", "brown", "fox", "jumped"] );


function findLongestWords(arr) {
  var longestWordsLength = 0;

  for(var i = 0; i < arr.length; i++) {

//     console.log(arr[i].length);
//     console.log(arr[i]);

   if ( longestWordsLength < arr[i].length ){
     longestWordsLength = arr[i].length;
   }
  }
console.log(longestWordsLength);
return longestWordsLength;
}






//Short Question 8

filterLongWords(["hello", "what", "is", "up", "dude"], 3);


function filterLongWords(arr, wordLength) {

var myArray = [];

for (var i = 0; i < arr.length; i++) {
  if (arr[i].length > wordLength) {
    myArray.push(arr[i]);
  }
}
console.log(myArray);
return myArray;
}
