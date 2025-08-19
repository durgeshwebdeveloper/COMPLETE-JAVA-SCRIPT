// =>Data Types in JavaScript.
// =>Overwiew of variable
// =>Variable declaration
// =>Arithmetic Operation

//1.Declare a variable and assign a string value.Then display it on the webpage.
var greeting = "Hello, World!"  //String variable declaration
document.write(greeting);  //Displaying the string on the webpage.
//Output: The webpage displays "Hello,World!"

//Create a variable for a number and perform an addition operation.
var num1 = 10;   //First number
var num2 = 20;   //Second number
var sum  = num1 + num2;   //Performing addition
document.write("Sum: " +sum);   //Displaying the sum
//Output:The webpage dispays "Sum: 30"

//3.Declare a variable using  'let' and change its value.
let age = 25;   //Declaring a variable using let
document.write("Age: "+ age + "<br>" );   //Displaying initial age 
age = 30;
document.write("Updated Age: " +age );  //Displaying updated age
//The webpage displays:    Age:25
//                        Updated Age: 30

//4.Use 'const' to declare a variable and show an error when trying to change its value.
const pi = 3.14;   //Declaring a constant variable
document.write("Value of pi: " + pi  + "<br>");
//Uncommenting the next line will cause an error
//pi = 3.1459;  //Trying to chage the value will cause an error.
//Output:The webpage displays "Value of pi: 3.14". If the line changing 'pi' is uncommented, it will throw TypeError in the console.

//5.Create a variable of type boolean and display it.
var isJavaScriptFun = true;   //Boolean variable
document.write("Is JavaScript fun? "+ isJavaScriptFun);    //Displaying boolean value
//Output:The webpage displays "Is JavaScript fun? true"


//6.Use different datatypes and display them together.
var name = "DUrgesh";  //String
var age1 = 30;   //Number
var isStudent = false;    //Boolean
document.write("Name"+name + ",Age:" + age + ",isStudent:"+ isStudent);
//Output:The webpage displays "Name:Durgesh,Age:30,IsStudent:false".

//7.Perform subtraction of two numbers and displays the result.
var num1 = 50;  //First Number
var num2 = 15;   //Second Number
var difference = num1 - num2;   //Performing subtraction
document.write("Differece:" + difference);     //Displaying the difference
//Output:The webpage displays "Difference : 35"

//8.Calculat the product of two numbers and show the output.
var num1 = 8;  //First number
var num2 = 7;   //Second number
var product = num1*num2;   //Performing multiplication
document.write("Product: " + product);   //Displaying the product
//Output:The webpage displays "Product : 56"

//9.Perform division of two numbers and display the result.
var num1 = 100;  //First number
var num2 = 25;   //Second number
var quotient = num1/num2;  //Performing division
document.write("Quotient: " + quotient);   //Displaying the quotient 
//Output:The webpage displays: "Quotient:4 "

//10.Use the modulus operator to find the remainder of a division and display it.
var num1 = 29;   //First number
var num2 = 5;   //Second number
var remainder = num1%num2;    //Finding remainder
document.write("Remainder: "+ remainder);   //Displaying the remainder
//Output:The webpage displays : "Remaider: 4".