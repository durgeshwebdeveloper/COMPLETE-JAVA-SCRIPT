// =>For Loop
// =>For in Loop
// =>For of Loop

// =>While Loop
// =>Do while Loop

//1.Write a program to calculate the sum of first 10 natural numbers using a 'for' loop.
let sum = 0;
for (let i = 1; i<=10; i++){
    sum +=i;
}
console.log(sum); //Output:55    

//2.For Loop: Print Multiples of 5
//Write a program to print the first 10 multiples of 5 using 'for' loop.
for (let i = 1; i <=10; i++){
    console.log(i*5)
}     //Output: 5,10,15,20,25,30,35,40,45,50

//3.For...in Loop: Print Object Properties
//Write a program that prints all properties of an object using 'for...in' loop.
const obj = {name: "Durgesh",age:27, city: "Delhi"};
for (let key in obj ){
    console.log(key + ":" + obj[key]);
}  //Output:name:Durgesh
          //age:27
          //city:Delhi
//4.For...of Loop: Print Array Elements
//Write a program to print all elements of an array using a 'for...of' Loop.
const arr = [10,20,30,40,50];
for(let value of arr){
    console.log(value);
}   //Output:10,20,30,40,50

//5.While Loop: Count Down from 10
// Write a program that counts down from 10 to 1 using a 'While' loop
let count  = 10;
while (count > 0){
    console.log(count);
    count--;
}   //Output:10,9,8,7,6,5,4,3,2,1

//6.Do Wile Loop: Print Numbers Until 5
//Write a program that prints numbers starting from 1 until it reaches 5 using a 'do while' loop.
let num = 1;
do{
    console.log(num);
    num++;
}
while(num<=5);
   //Output:1,2,3,4,5

//7.For Loop: Factorial of a Number
//Write a program to calculate the factorial of a number using a 'for' loop.
const number = 5;
let factorial = 1;
for(let i  = 1; i <= number; i++){
    factorial *=i;
}   
console.log(factorial)   //Output:120

//8.For...in Loop: Sum of Object Values
//Write a program to sum all values in an object usinf a 'for in' loop.
const scores = {math:90,science:80,history:70}
let total = 0;
for(let subject in scores){
    total += scores[subject];
}
console.log(total)   //Output:240

//9.for..of Loop: Find Maximum Value
//Write a program to find the maximum value in an array using a 'for...of' loop.
const numbers = [10,20,5,40,15];
let max = numbers[0];
for(let num of numbers){
    if(num>max){
        max = num;
    }
}
console.log(max);  //Output:40

//10.While Loop: Count Even Numbers
// Write a program that counts  the even numbers from 1 to 20 using 'while' loop.
let ginti = 1;
var evenCount = 0;
while(ginti<=20){
    if(ginti % 2 === 0){
        evenCount++;
    }
    ginti++;
}
console.log(evenCount);  //Output:10

//11.Do While Loop: Sum of Positive Numbers
// Write a program to sum positive numbers until a negative number is entered using a 'do while' loop.
let sum1 = 0;
let input;
do{
    input = prompt("Enter a number(negative to stop):")
    if (input>0){
        sum+=Number(input);
    }
}
while(input>=0);
console.log(sum);   //Output:Depends on user input

//12.For Loop:Reverse a String 
//Write  a program to reverse a string using a 'for' loop.
const str = "hello";
let reversed = "";
for(let i = str.length - 1; i >= 0;i--){
    reversed += str[i];
}
console.log(reversed);  //Output:"olleh"

//13.For...in Loop: Count Properties
//Write a program to count the number of properites in an object using a 'for...in' loop
const person = {name:"Durgesh",age:30,occupation:"Developer"};
let inc = 0;
for(let key in person){
    inc++;
}
console.log(inc);   //Output:3

//14.For...of Loop: Convert Array to String 
//Write a program to convert an array to strings to a single string using a 'for...of' loop.
const words= ["Hello","World","from","JavaScript"];
let sentence= " ";
for(let word of words){
    sentence += word+ " ";
}
console.log(sentence.trim());    //Output:"Hello World from JavaScrpt"

//15.While Loop: Print Fibpnacci Series
// Write a program to print the Fibonacci series up to a certain number using a 'while' loop
let a = 0, b = 1, c;
const limit = 10;   //Change limit to print more numbers
console.log(a);
console.log(b);
let count3 = 2;
while(count3<limit){
    c = a+b;
    console.log(c);
    a = b;
    b  = c;
    count3++;
}    //Output:0,1,1,2,3,5,8
