console.log('Here is : ', 'array');



/*
1
Correct the syntax error
 [ 1,7 , 9 , 45, ]

 ["Str" "alex","moh"]

 ['the','fox' 'over' lazy, 'dog',  ]

*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

index of Banana : 1
index of Tomato : 0
*/


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

const favorite = [
    'Pizza', 'Burger', 'Pasta','Chips','Corn',
    'Basketball', 'Football', 'Baseball',
    'Interstellar', 'Train to Busan'
];


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(array){
    return array[0];
}


/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(array){
    return array[array.length-1];
}

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var array = [0,5,7,9];
console.log(array);
array.shift();
array.shift();
array.shift();
array.push(10);
array.unshift(1,3,4,6,8);
console.log(array);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5,9,-7,3.5];

console.log(array2.shift());     // 5     (the first element of the array the has been removed)
console.log(array2.push(45));    // 4     (the length of the array after adding new element at the end of the array)
console.log(array2.unshift(0));  // 5     (the length of the array after adding new element at the beginning of the array) 
console.log(array2.pop());       // 45    (the last element of the array that has been removed)
console.log(array2);

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(array) {
    if (array.length % 2 === 0) {
        return `${Math.floor(array[array.length/2 -1 ])} and ${Math.floor(array[array.length/2])}`;
      }
      else
      return array[Math.floor(array.length/2)];
}

console.log(middleOfArray(array2));


/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

var animals = ['cat', 'ele', 'bird'];
animals[0] = 'cat';
animals[1] = 'ele';
animals[2] = 'bird';
animals[3] = 'zebra';
animals[4] = 'elephant';
console.log(animals);


/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/

function indexOfArray(arr , index)
{
    return arr[index];
}

console.log(indexOfArray(animals,2));


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/

function arrayExceptLast(arr) {
    arr.pop();
    return arr;
}

console.log(arrayExceptLast(animals));


/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/

function addToEnd(arr, value) {
    arr.push(value);
    return arr;
}

console.log(addToEnd(animals, 'lion'));



// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArray(arr) {
    let sum=0;

    //using for loop 
    // for (var i=0; i<arr.length; i++) {
    //     sum += arr[i];
    // }

    // using while loop
    var i = 0;
    while (i<arr.length)
    {
        sum += arr[i];
        ++i;
    }
    return sum;
}
var nums= [1,2,3,8,9,10]; 
 console.log(sumArray(nums));  // 33
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(arr){
    let min = arr[0];
    // using for loop
    // for (let i=0; i <arr.length; i++)
    //     if (arr[i] < min) min = arr[i];
    
    // using while loop
    let i=0;
    while(i<arr.length){
        if (arr[i]< min) min = arr[i];
        i++;
    }
    return min;
}
nums= [1,2,3,8,0,9]
console.log(minInArray(nums)); //0


/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(arr, element){
    let index = arr.indexOf(element);
    arr.splice(index, 1);
    return arr;
}

 nums= [45,20,89,33];
console.log(removeFromArray(nums,20)); // [45, 89, 33]


/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function  oddArray(arr){
    let oddArr = [];
    // using for loop
    for(let i=0; i<arr.length; i++)
        if(arr[i] %2 != 0)
            oddArr.push(arr[i]);

    // using while loop
    // let i=0;
    // while(i<arr.length){
    //     if(arr[i] %2!= 0)
    //         oddArr.push(arr[i]);
    //     i++;
    // }
    return oddArr;
}
 nums= [1,2,3,8,5,5,59];
console.log(oddArray(nums));

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function aveArray(arr){
    let sum = 0;
    // using for loop
    for(let i=0; i<arr.length; i++)
        sum += arr[i];

    // using while loop
    // let i=0;
    // while(i<arr.length){
    //     sum += arr[i];
    //     i++;
    // }
    return sum / arr.length;
}
 nums= [1,2,3,8,9];
 console.log(aveArray(nums));
 nums= [1,2,3,8,9,77];
 console.log(aveArray(nums)); 



/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function shorterInArray(arr){
    let shortest = arr[0];
    // using for loop
    for(let i=1; i<arr.length; i++)
        if(arr[i].length < shortest.length)
            shortest = arr[i];

    // using while loop
    // let i=1;
    // while(i<arr.length){
    //     if(arr[i].length < shortest.length)
    //         shortest = arr[i];
    //     i++;
    // }
    return shortest;
}
 strings= ["alexll","mee","m","rashed2","emad","hala"];
 console.log(shorterInArray(strings)); // "alex"


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar(str , char){
    let count=0;
    // using for loop
    // for(let i=0; i<str.length; i++){
    //     if(str[i] === char)
    //         count++;
    // }
    // using while loop
    let i=0;
    while(i<str.length){
        if(str[i] === char)
            count++;
        i++;
    }
    return count;
}
 string= "razan ahmad";
 console.log(repeatChar(string,"a")); // 4



/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(arr){
    let newArr=[];
    // using for loop
    for(let i=0; i<arr.length; i++){
        if (i%2 == 0)
            if(arr[i].length %2 != 0)
                newArr.push(arr[i]);
    }
    // using while loop
    // let i=0;
    // while(i<arr.length){
    //     if (i%2 == 0)
    //         if(arr[i].length %2!= 0)
    //             newArr.push(arr[i]);
    //     i++;
    // }
    return newArr;
}
 strings= ["alex","mercer","madrasa","rashed2","razan","hala"];
 console.log(evenIndexOddLength(strings)); // ["madrasa" , "razan"]


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function powerElementIndex(arr){
    let newArr=[];
    // using for loop
    for(let i=0; i<arr.length; i++){
            newArr.push(Math.pow(arr[i],i));
    }
    // using while loop
    // let i=0;
    // while(i<arr.length){
    //         newArr.push(Math.pow(arr[i],i));
    //     i++;
    // }
    return newArr;
}
 nums= [44, 5, 4, 3, 2, 10];
 console.log(powerElementIndex(nums)); //  [1, 5, 16, 27, 16, 100000]


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenNumberEvenIndex(arr){
    let newArr=[];
    // using for loop
    for(let i=0; i<arr.length; i++){
        if (i%2 == 0)
            if(arr[i] % 2 == 0)
                newArr.push(arr[i]);
    }
    // using while loop
    // let i=0;
    // while(i<arr.length){
    //     if (i%2 == 0)
    //         if(arr[i] % 2 == 0)
    //             newArr.push(arr[i]);
    //     i++;
    // }
    return newArr;
}
 nums= [5,2,2,1,8,66,55,77,34,9,55,1,46,5,88];
 console.log(evenNumberEvenIndex(nums)); // [2, 8, 34, 46, 88]