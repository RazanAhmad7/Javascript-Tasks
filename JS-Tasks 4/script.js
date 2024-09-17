let str1= "Hello";
let str2= "World";
console.log(str1.concat(" ").concat(str2));





// 2

let str3 = "JavaScript";
console.log(str3.length);


// 3

let str4 = "Programming";
console.log(str4.charAt(0));


// 4

let str5 = "coding is fun";
console.log(str5.substring(0,6));


// 5

let str6 = "cat" ;
console.log(str6.replaceAll("a" , "e"));

// 6

let str7 = "javascript";
console.log(str7.toUpperCase());

// 7

let str8 = "apple banana orange";
console.log(str8.split(" "));

// 8 

let arr = ["hello", "world"] ;
str9 = arr.join(" ");
console.log(str9);

// 9 

console.log(" hello world  ".trim());

// 10

console.log("hello world".includes("world"));

// 11

console.log("hello".split("").reverse().join(""));

// 12 

let str10=  "elephant";
let count =0;
for (let i=0; i<str10.length; i++){
    if (str10[i] == "e"){
        count++;
    }
}
console.log(count);

// 13

function isPalindrome(str11){
    
    let p2 = str11.length -1 ;
for (let i=0; i<p2; i++){
    if (str11[i] === str11[p2]){
        p2--;
    }
    else{
        return false;
    }
     
}
return true;
}

console.log(isPalindrome("werrew"));


// 14
var array = "Hello World".split(" ");
for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toLowerCase() + array[i].slice(1);   
}

console.log(array.join(" "));




// 15

let num = 1234.5678;
let formattedNum = num.toFixed(2); 
console.log(formattedNum); 



// 16

function extract(str){
    let array = [];
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === '2' || str.charAt(i) === '3')
            array.push(str.charAt(i)); 
        
    }
    return array;
}

console.log(extract("There are 3 apples and 2 oranges") );



// 17

console.log("example@email.com".includes("@"));


// 18 

console.log("This is a bad word".replaceAll("bad","good"));


// 19
function removeDuplicate(str){
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (!arr.includes(str.charAt(i)))
            arr.push(str.charAt(i)); 
    }
    return arr.join("");
    
}
console.log(removeDuplicate("aabbkkcccc"));


// 20

console.log("hello".split("").sort().join(""));

// 21 

function isAnagrams(str1 , str2) {
    
    if(str1.length == str2.length)
    {
        let i = 0;
        while( i < str1.length)
        if (str1.includes(str2[i])){
            i++;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }

return true;
}

console.log(isAnagrams("listen","silent"));


// 22
function reversed(str){
   return str.split(" ").reverse().join(" ");;
}
console.log(reversed("The quick brown fox"));

// 23
function longestWord(str){
    let arr = str.split(" ");
    let longest = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i].length > longest.length){
            longest = arr[i];
        }
    }

    return longest;

}

console.log(longestWord("Web development is fascinating"));



// 26

function replacingVowels(str) {

    // Loop through the string
    for (let i = 0; i < str.length; i++) {
        switch (str[i].toLowerCase()) {
            case 'a':
                str = str.replace('a', '1');
                break;
            case 'e':
                str = str.replace('e', '2');
                break;
            case 'i':
                str = str.replace('i', '3');
                break;
            case 'o':
                str = str.replace('o', '4');
                break;
            case 'u':
                str = str.replace('u', '5');
                break;
        }
    }
    return str;
}

console.log(replacingVowels("hello world"));

