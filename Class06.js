// =>Array Functions.
// =>String Functions.

// =>Date Function.
// =>Math Function.

// =>User define function.
// =>Switch case statement.

//1.Array function : Find Maximum Value
//Write a program to find the maximum value in an array using a built-in array function.
const numbers = [10,5,20,8,15];
const max = Math.max(...numbers);
console.log(max);   //Output: 20

//2.Array Function : Filter Even Numbers
//Write a program to filter even numbers from an array.
const numbers1 = [1,2,3,4,5,6];
const evenNumbers = numbers1.filter(num=>num%2 === 0);
console.log(evenNumbers);
//Output:[2, 4, 6]

//3.Array Function: Map to Squares
//write a program to square each element in an array using the 'map' function.
const numbers2 = [1,2,3,4,5];
const squares = numbers2.map(num=>num**2);
console.log(squares);
//Output:[1, 4, 9, 16, 25]

//4.String Function:Convet to Upper Case
// Write a program to convert a string to upper case.
const str = "hello world";
const upperStr = str.toUpperCase();
console.log(upperStr);
//Output: HELLO WORLD

//5.String Funtion: Check if String Contains a Substring
// Write a program to check if a string contains substring "Java".
const str1 = "is fun";
const containsJava = str.includes("Java");
console.log(containsJava);  
//Output: false

//6.String Function: Split String into an Array
//Write a program to split a string into an array of words.
const str2 = "Split sentence into words";
const words = str2.split(" ");
console.log(words);
//Output:['Split', 'sentence', 'into', 'words']

//7.Date Function: Get Current Date
//Write a program to get the current date and print it.
const currentDate = new Date();
console.log(currentDate);
//Output: Current Date and Time ==>Thu Jul 17 2025 13:41:52 GMT+0530 (India Standard Time

//8.Date Funtion: Get Day of the Week.
//Write a program to get the current day of the week.

const currentDate1 = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
const day = days[currentDate.getDay()];
console.log(day); 
//  Output:Thursday

//9.Math Function: Generates a Random Number
// Write a program to generate a random number between 1 and 100.
const randomNum = Math.floor(Math.random()*100)+1;
console.log(randomNum);
// Output: Random Number between 1 and 100

//10.Math Function: Calculate Square Root
// Write a program to calculate the square root of a number.
const num = 25;
const sqrt = Math.sqrt(num);
console.log(sqrt) ;
//Output:5

//11.User-Defined Function: Calculate Factorial
//Write  a user-defined function to calculate the factorial of a number.
function factorial(n){
    if(n===0 || n ===1) return 1;
    return n*factorial(n-1);
}
console.log(factorial(5))
//Output: 120

//12.User-Defined Function: Check Palindrome.
// Write a user-defined function to check if a string is palindrome.
function isPalindrome(str){
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(isPalindrome("racecar"));   //Output: true
console.log(isPalindrome("hello"));   //Output: false

//13.User-Defined Function: Sum of Array of Elements
//Write  a user-defined function to calculate the sum of all elements in an array.
function sumArray(arr){
    return arr.reduce((acc,curr)=>acc+curr,0);
}
const numbers3 = [1,2,3,4,5];
console.log(sumArray(numbers3))
//Output:15

//14.Switch Case Statement:Day of the Week
//Write a program that takes a number(1-7) and prints the corresponding day of the week using switch case statemnt.
const dayNumber = 3;  //Change this value to test different cases
let dayName;
switch(dayNumber){
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
     case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day Number";
}
console.log(dayName);
//Output:Tuesday

//15.Switch Case Statement : Month Name
//Write a program that takes a number (1-12) and prints the month name using a switch case statement.
const monthnumber = 5;  //Change the value to set different cases
let monthName;
switch(monthnumber){
    case 1:
        monthName = "January";
        break;
    case 2:
        monthName = "February";
        break;
    case 3:
        monthName = "March";
        break;
    case 4:
        monthName = "April";
        break;
    case 5:
        monthName = "May";
        break;
    case 6:
        monthName = "June";
        break;
    case 7:
        monthName = "July";
        break;
    case 8:
        monthName = "August";
        break;
    case 9:
        monthName = "September";
        break;
    case 10:
        monthName = "October";
        break;
    case 11:
        monthName = "November";
        break;
    case 12:
        monthName = "December";
        break;  
    default:
        monthName = "Invalid month number";
}
console.log(monthName);
//Output: "May"

//16.User-Defined: Convert Celsius to Fahrenheit
//Write a user-defined function to convert Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius){
    return(celsius *9/5) + 32;
}
console.log(celsiusToFahrenheit(25))
//Output:77

//17.User-Defined Function: Count Vowels in a String
// Write a user-defined function to count the number of vowels in a String
function countVowels(str){
    const Vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str){
        if(Vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World"));
//Output:3

//18.Math Function : Round  a Number
//Write a program to round a number to the nearest integer.
const num1 = 4.7;
const rounded =  Math.round(num1)
console.log(rounded);
//Output:5

//19.String Function : Replace Substring
// Write a program to replace "World" with " " in a string
const str3 = "Hello World";
const newStr = str3.replace("World","");
console.log(newStr);
//Output:Hello 

//20.Array Function: Find index of an Element
// Write a program to find the index of an element in an array.
const fruits = ["Apple","Banana","Cherry"];
const index = fruits.indexOf("Banana");
console.log(index);
//Output:1





