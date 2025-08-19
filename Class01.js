// =>What is JavaScript?
// =>Using JavaScript in an HTML document.
// =>Writitng Text on a webpage.
// =>Writing on the console and solving error. 

//1.Write a simple JavaScript progrm to display "Hello,World!" on a webpage.
    document.write("Hello World!");   //Writing text to the webpage.
    // //Output: The webpage displays "Hello World!""

//2.Use JavaScript to write your name on a webpage.
 document.write("My name is DurexDurgesh");   //Replace with your name
// //Output: The webpage displays:"My name is DurexDurgesh"

//3.Write a JavaScript program that outputs text to the console.
 console.log("This message is written in the console.");   //Writing to the console
// //Output: The console displays : "This message is written in the console."

//4.Use JavaScript to display the current date on a page.
let currentDate = new Date();   //Getting current date
document.write("Current Date: "+ currentDate);    //Writing current date to the webpage.
// Output:The webpage displays the current date and time.

//5.Write a JavaScript program to add two numbers and display the result on the webpage.
let num1 = 5;
let num2 =10;
let sum = num1+num2;
document.write("Sum: " + sum);  //Displaying sum ont the webpage.
//Output:

//6.Write a JavaScript program that prompts the user for their name and display a greeting.
let name = prompt("What is your name?");  //Prompting for user input 
document.write("Hello,"+name+"!");   //Greeting the user
//Output:The web page displays a greeting like "Hello,[user's name]" after prompting the user.


//7.Create a JavaScript program that write a message to the console and handles an error gracefully.
try{
    //Intntionally causing an error
    let result = undefinedVariable + 10
}
catch(error){
    console.error("An error occured: " + error.message);   //Handling error
}
// Output:The console displays: "An error occured:undefinedVariable is not defined"

//8.Write a program that uses JavaScript to change the background color of the web page when a button is clicked.
function changeColor(){
    document.body.style.backgroundColor = "lightblue";   //Changing the background color
}
//Output:When the button is clicked the background color of the webpage changes to lightblue.

//9.Write a JavaScript program to calculate the square of a number and display the result on the webpage.
let number = 4;  //The number to square
let square = number * number;  //Calculating square
document.write("Square of "+ number + " is:"+ square);   //Displaying result
//Output:The webpage display "square of 4 is : 16."

//10.Write a program to check if a number is even or odd and display the result on the web page.
let number1 = 7;  //The number to check
let result = (number1 % 2 === 0)? "even ": "odd";  //Checking if even or odd
document.write("The number " + number + "is" + result + ".");    //Displaying result 
//Output:The web page Display "The number 7 is odd."
