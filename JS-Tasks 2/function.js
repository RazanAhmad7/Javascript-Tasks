

// Task one, Questions (1-7)

// Question one

function QuestionOne(){
  let birthMonthe = Number(prompt('Please enter your birth month'));

switch (birthMonthe) {
  case 1 :{
    console.log(`The inpute ${birthMonthe}
The Outpute : January`);
break;
    }
    case 2: {
      console.log(`The inpute ${birthMonthe}
The Outpute : February`);
break;
    }
    case 3: {
      console.log(`The inpute ${birthMonthe}
The Outpute : March`);
        break;
    }
    case 4: {
      console.log(`The inpute ${birthMonthe}
The Outpute : April`);
        break;
    }
    case 5: {
      console.log(`The inpute ${birthMonthe}
The Outpute : May`);
        break;
    }
    case 6: {
      console.log(`The inpute ${birthMonthe}
The Outpute : June`);
        break;
    }
    case 7: {
      console.log(`The inpute ${birthMonthe}
The Outpute : July`);
        break;
    }
    case 8: {
      console.log(`The inpute ${birthMonthe}
The Outpute : August`);
        break;
    }
    case 9: {
      console.log(`The inpute ${birthMonthe}
The Outpute : September`);
        break;
    }
    case 10: {
      console.log(`The inpute ${birthMonthe}
The Outpute : October`);
        break;
    }
    case 11: {
      console.log(`The inpute ${birthMonthe}
The Outpute : November`);
        break;
    }
    case 12: {
      console.log(`The inpute ${birthMonthe}
The Outpute : December`);
        break;
    }
    default: {
      console.log('Invalid input');
      break;
    }


}
}
//QuestionOne();





//***************************************************************************************************************** */

// Question two

function QuestionTwo() {
  let num = 1;
    for (let i = 1 ; i<5 ; i++) {
      let txt = '';
      for (let j = 1; j<= i ; j++)
      {
        txt += num + ' ' ;
        num++; 
      }
      console.log(txt);
    }

}
//QuestionTwo();





//*****************************************************************************************************************
// Question three

function QuestionThree() {
    let numbers = '';
    for (let i = 13; i <= 1000; i = i+=13) {
    numbers +=  String(i) + " , ";
}
console.log(numbers);
}
//QuestionThree();







//*****************************************************************************************************************
// Question four

function multiplication2( x , y ) {
    let result = 0;
    if (y == 0)
      console.log(result);
    else{
      while(y > 0){
      result += x;
      y--;
    }
    console.log(result);
    }
    
}

//multiplication2(4,2);







//*****************************************************************************************************************
// Question five
function trangleArea(base, height)
{
  return (base * height) / 2;
}
//console.log(trangleArea(5,6));









//*****************************************************************************************************************
// Question six
function isPandigital (number) {
  let a = String(number);

  if (a.indexOf(1) != -1 && a.indexOf(2) != -1 && a.indexOf(3) != -1 && a.indexOf(4) != -1
   && a.indexOf(5) != -1 && a.indexOf(6)!= -1 && a.indexOf(7)!= -1 && a.indexOf(8)!= -1 
   && a.indexOf(9)!= -1 && a.indexOf(0) != -1)

  return true;
  
  else return false;
}
//console.log(isPandigital("0123456789"));










//*****************************************************************************************************************
// Question seven

function drinkPrice()
{
  let drink = prompt("Enter your favorite drink");
  switch (drink){
    case 'banana':
      console.log(`The price of ${drink} is $1.50`);
      break;
    case 'Orange':
      console.log(`The price of ${drink} is $2.00`);
      break;
    case 'Mango':
      console.log(`The price of ${drink} is $2.00`);
      break;
    default:
      console.log('Invalid drink');
  }
}
//drinkPrice();















// Questions 1 - 24
// *******************************************************************************************************

/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(jobTitle, location, partnerName, childrenNumber) {
  console.log(`You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${childrenNumber} kids.`);
}
//tellFortune('Software Engineer', 'Jordan', 'Alice', 3); // Output: You will be a software engineer in Jordan, and married to Alice with 3 kids.






/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge()
{
  let age= Number(prompt("Enter you dog age"));
  let dogAge = age * 7;
  console.log(`Your doggie is ${dogAge} years old in dog years.`);
}
//calculateDogAge();






/*
3 
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age, amountPerDay)
{
  let maxAge = 100;
  let totalSupply = (maxAge - age) * amountPerDay * 365;
  console.log(`You will need ${totalSupply} cups of tea to last you until the ripe old age of ${maxAge}.`);
}
//calculateSupply(30, 3);






/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name) {
  return `Hello ${name}!`;
}
//console.log(greet('Razan'));







/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
the x variable is undefined


function double(7) {
  return 2 * 7;
}
(unexpected number)
the parameter should be a varivale not a value


function double('7') {
  return 2 * 'x';
}
(unexpected string)
the parameter should be a varivale not a value
*/



/*
6
fix these functions:

func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/

function double1(x) {
  return 2 * x ;
}

function double2(x){
return 2 * x;
}

function double3 (x) {
  return 2 * x;
}



/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

function cube(number) {
  const num = Number(number); 
  return num * num * num; 
}
//console.log(cube(2));





/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(num1, num2){
  return num1 * num2;
}





/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(age) {
  if (age >= 20)
  {
    return "yes you can";
  }
  else{
    return `please come back after ${20 - age} years to get one`;
  }
}
//console.log(canIGetADrivingLicense(12));






/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(word1, word2) {
  if (word1.length == word2.length)
    return true;
  else return false;
}
//console.log(sameLength("Razan","Reem"));






/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer(number1, number2) {
  if (number1 > number2)
    return number1;
  else if (number1==number2)
    return "both are equal";
  else return number2;
}
//console.log(largerNubmer(2,1));






/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3
*/

function smallerNumber(number1, number2, number3) {
  if (number1 < number2 && number1 < number3)
    return number1;
  else if (number2 < number1 && number2 < number3)
    return number2;
  else return number3;
}
//console.log(smallerNumber(0,100,2)); // 6






/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

function shorterString(string1, string2, string3, string4, string5) {
  let shortest = string1;
  let a = [string1, string2, string3, string4, string5];
  for (let i = 0; i<a.length; i++)
  {
    if (a[i].length < shortest.length)
      shortest = a[i];
  }
  return shortest;
}
//console.log(shorterString("air","tr","car","github","by"));






/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

function longerString(string1, string2, string3, string4) {
  let longest = string1;
  let a = [string1, string2, string3, string4];
  for (let i = 0; i<a.length; i++)
  {
    if (a[i].length > longest.length)
      longest = a[i];
  }
  return longest;
}

//console.log(longerString("air","school","car","github"));






/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven(number){
  if (number%2 == 0)
    return true;
  else return false;
}
//console.log(isEven(5));








/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function isOdd(number){
  if (number%2 != 0)
    return true;
  else return false;
}
//console.log(isOdd(5));







/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(number){
  if (number < 0)
    return number * -1;
  else return number;
}
//console.log(positive(-9));







/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(firstName, lastName){
  return `Your Full Name : ${firstName} ${lastName}` ;
}
//console.log(fullName("Razan", "Alsamri"));








  

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(num1, num2 , num3, num4 , num5){
  let sum = num1 + num2 + num3 + num4 + num5;
  return sum /5;
}
//console.log(average(5,7,9,3,5));








/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(){
  let random = Math.random().toFixed(3);
  return random;
}
console.log(randomNumber()); 







/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function randomBetweenNumbers(min, max){
  let random = (Math.random() * (max - min) + min).toFixed(3);
  return random;
}
console.log(randomBetweenNumbers(1,8));







/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(mark){
  if (mark >= 95 && mark <=100){
    return("A");
}
else if(mark >= 85 && mark <= 94){
    return("B");
}
else if(mark >= 70 && mark <= 84){
    return("C");
}
else if(mark >= 50 && mark <= 69){
    return("D");
}
else{
    return("F");
}
}
//console.log(scoreInUniversty(9));








/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

var count = 0;
function counter(){
  count++;
  return count;
}
// console.log(counter());
// console.log(counter());
// console.log(counter());







/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

function resetCounter(){
  let previuosCount = count;
  count= 0;
  return `Previous counter : ${previuosCount} and the counter is resetted now`;
}

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter()); // 4
console.log(resetCounter());  // Previous counter : 4 and the counter is resetted now
console.log(counter()); // 1
console.log(counter());
