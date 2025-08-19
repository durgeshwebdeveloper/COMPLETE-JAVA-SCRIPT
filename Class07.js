// =>DOM Method
// =>Change HTML Elements
// =>Adding and Deleting elements.

// ===>Event handling through function call Events
// =>Onclick Event
// =>Oninput Event
// =>Onchange Event

//1.Change Text Content of an Element
// Write a program that changes the text content of a <div> with the ID "myDiv" to "Hello World!"
document.getElementById("myDiv").textContent = "Hello World!"
//Output:The content of the '<div>' changes to "Hello World".

//2.Change the Background Color of an Element
//Write a program that changes the background color of a '<p>' with the ID 'myParagraph' to "lightblue".
document.getElementById("myParagraph").style.backgroundColor = "lightblue";
// Output:The background color of the '<p>' changes to lightblue.

//3.Add a New Element to the  DOM.
// Write a program to add a new '<li>' element with the text "New Item" to an existing '<ul>' with the ID "myList".
const newItem  = document.createElement("li");
newItem.textContent  = "New Item";
document.getElementById("myList").appendChild(newItem);
//Output: A new '<li>' is added to the list ,showin "New Item"

//4.Deleting an Element from the DOM
//Write a program that removes the first '<li>' element from a '<ul>' with the ID "myList1".
const list = document.getElementById("myList1");
list.removeChild(list.firstElementChild);
//Output: The first item ("Item 1") is removed from the list.

//5.Onclick Event: Change Text on Button Click
//Write a program that changes the text of a '<span>' with the ID "text" to "Clicked!" when a button is clicked.
function changeText(){
    document.getElementById("text").textContent  = "Clicked";
}

//6.On Input Event : Show Input Value
// Write a program that shows the value of an '<input>' field in a '<div>' with the ID "display" as the user types.
function showInput(){
    const inputValue = document.getElementById("myInput").value;
    document.getElementById("display").textContent = inputValue;
}
// Output:The value in the '<div>' updates as the usr types in the '<input>' field.

//7.Onchange Event: Update Text Dropdown Selection 
//Write a program that updates the text of a '<p>' element when a user selects as option from a dropdown.
function updateText(){
const selectedValue = document.getElementById("mySelect").value;
document.getElementById("output").textContent = "Selected: "+ selectedValue;
}
//Output:The '<p>' updates to show the selected option.

//8.Change HTML Element Attributes 
//Write a program that changes the 'src' attribute of an '<img>' with the ID "myImage".
function changeImage(){
    document.getElementById("myImage").src = "2.jpg";
}
//Output: When the button is clicked , the image source changes to "2.jpg".

//9.Create a button to Hide an Element 
//Write a program that hides a '<div>' with the ID "myDiv" when a button is clicked.
function hideDiv(){
    document.getElementById("myDiv1").style.display = "none";
}
//Output: When the button is clicked the '<div>' is hidden.

//10.Create a Button to Show an Element
//Write a program that shows a hidden '<div>' with the ID "myDiv" when a button is clicked.
function showDiv(){
    document.getElementById("myDiv2").style.display = "block";
}
//Output:When the button is clicked, the '<div>' becomes visible.

//11.Add a Class to an Element.
// Write a program that adds a class "highlight" to a '<p>' element when a button is clicked.
function addHighlight(){
    document.getElementById("myParagraph1").classList.add("highlight");
}
//Output:When the button is clicked, the paragraph background turn the yellow.

//12.Removes a Class from an Element
// Write a program that removes the class "highlight" from a '<p>' element when a button is clicked.
function removeHighlight(){
    document.getElementById("myParagraph2").classList.remove("highlight");
}
//Output:When the button is clicked, the paragraph no longer has a yellow background.

//13. Event Handling : Change the Color on a Mouse Over.
//Write  a program that changes the background color of a '<div>' when the mouse hovers over it.
function changeColor(){
    document.getElementById("hoverDiv").style.backgroundColor = "blue";
}
function resetColor(){
    document.getElementById("hoverDiv").style.backgroundColor = "gray";
}
//Output: The '<div>' changes to blue on mouseover and back to gray on mouseout.

//14.Event Handling : Display Selected Radio Button
//Write a program that displays the selected radio button value when the user selects it.
function displayColor(){
    const selectedColor = document.querySelector('input[name = "color"]:checked').value;
    document.getElementById("colorDisplay1").textContent = "Selected Color: "+ selectedColor
}
//Output:The '<p>' updates to show the selected color.


//15.Event Handling : Submit Form and Prevent Default
// Write a program that prevents the default form submission and display an alert instead.
function handleSubmit(event){
    event.preventDefault();   //Prevent form submission
    alert("Form Submitted")
}
//An alert box appears with the message "Form Submitted!" when the submit button is clicked.

