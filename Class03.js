// =>Prompt
// =>Type convertion
// =>Relational Operators

// =>Logical Operators
// =>If...Else & Else if...Else Statement

//1.use "prompt" to ask for the user's name and display a greeting message.
var name = prompt("What is your name?");   //Prompting for user's name
document.write("Hello,"+ name + "!");   //Displaying greeitng message.
//Output: The webpage prompts the user for their name and displays "Hello,[user's name]!".

//2.Prompt the user for two numbers,converts them to integers, and displays thier sum.
var num1 = parseInt(prompt("Enter the first number: ")); //Prompting for first number.
var num2 = parseInt(prompt("Enter the second number:"));  //Prompting  the second number
var sum = num1 + num2;    //Performing addition
document.write("Sum: "+ sum);   //Displaying the sum
//Output:The webpage prompts for two numbers and displyas their sum, e.g., "Sum: "30"

//3.Use relational operators to compare two numbers by the user.
var num1 = parseInt(prompt("Enter the first number: ")); //Prompting for first number.
var num2 = parseInt(prompt("Enter the second number:"));  //Prompting  the second number
if (num1>num2){
    document.write(num1 + "is greater than" + num2);
}else if(num1<num2){
    document.write(num1 + "less than" +  num2)
}
else{
    document.write(num1 + "is equal to " + num2)
}
//The webpage compares the two numbers and displays whether the first number is greater tha, less than or equal to the second number.

//4.Prompt the user for a number and check if it is even or odd using if...else
var number = parseInt(prompt("Enter a number:"));  //Prompting  for a  number
if (number % 2 === 0){
    document.write(number + "is even");
}
else{
    document.write(number+ "is odd");
}
//Output : The webpage displays whether the entered number is even or odd.

//5.Prompt the user for thier age and check if they are eligible to vote.
var age = parseInt(prompt("Enter your age: "))   //Prompting for age.
if(age>=18){
    document.write("You are elligible to vote.")
}
else{
    document.write("You are not eligible to vote.")
}
//Output: The webpage displays whether the user eligible to vote based on their age.

//6.Use logical operators to check if a user input is between two numbers.
var number = parseInt(prompt("Enter a number between 10 and 20: "));   //Prompting for a number.
if(number >= 10 && number <= 20){
    document.write(number + "is within the range.");
}
else{
    document.write(number + "is outside the range.")
}
// Output: The webpage display whether the entered number is within the specified Range.

//7.Use type conversion to check if a string input can be converted to a number.
var input = prompt("Enter a number:");   //Prompting for input.
var number = parseFloat(input);   //Converting the string to number
if(!isNaN(numer)){
    document.write("The number is : "+ number);
}
else{
    document.write("Invalid input,please enter a valid number.")
}
//Output:The webpage displays the converted number or an error message for valid input.

//8.Use if...else if...else to determine a letter grade on a number score.
var score = parseInt(prompt("Enter your score(0-100):"));    //Prompting for score.
if(score>=90){
    document.write("Grade: A");
}
else if(score>= 80){
    document.write("Grade: B");
}
else if(score>=70){
    document.write("Grade: C");
}
else if(score>=60){
    document.write("Grade: F");
}
else{
    document.write("Grade: F");
}
//Output:The webpage displays the letter grade based on th user's score.

//9.Prompt for two numbers and determine if the first is greater than or equal to the second.
var num1 = parseInt(prompt("Enter the first number: ")); //Prompting for first numeber
var num2 = parseInt(prompt("Enter the second number: ")); //Prompting for second numeber
if(num1>=num2){
    document.write(num1 + "is greater than or equal to" + num2);
}
else{
    document.write(num1 + "less than " + num2);
}
//Output:The webpage displays whether the first number is greater than or equal to the second number.

//10.Use logical operators to determine if a person is teenager (13-19 years old)
var age = parseInt(prompt("Enter your age:")); //Prompting for age
if(age >= 13 && age <=19){
    document.write("You are a teenager");
}
else{
    document.write("You are not a teenager.");
}
//Output:The webpage displays whether the user is considered a teenager based on their age.