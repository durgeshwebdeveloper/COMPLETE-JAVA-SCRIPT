// =>Event Listener
// =>Adding Event Listener and Remove Event Listener
// =>Mouse over
// =>Mouse leave

// ==>Keyboard Event
// =>Keypress
// =>KeyDown
// =>KeyUp

//1.Create a button element and an event listener that shows an alert saying "Button Clicked!" when the button is clicked.
const button  = document.getElementById("myButton");
button.addEventListener('click',()=>{
    alert('Button Clicked!');
})
//Output:Clicking the button shows an alert with "Button Clicked!".

//2.Adding an Event Listener Window Resize
// Write a JavaScript to lof "Window Resized" to the console whenever the window is resized
const handleResize =()=>console.log("Window Resized");
window.addEventListener("resize",handleResize)
//Output: "Window Resized " is logged to the console whenever the window is resized.

//3.Removing Event Listener Cleanup
//Add an event listener to the window resize event and remove it after logging the message "Resize event removed."
const handleResize1 = ()=>{
    console.log("Window resized");
}
window.addEventListener("resize",handleResize1);
setTimeout(()=>{
    window.removeEventListener("resize",handleResize1);
    console.log("Resized  event removed");
},5000);  //Removes the event after 5 seconds
//Output:After 5 seconds , the resized event listener is removed and the message "Resize event removed " is logged.

//4.Mouse Over Event 
//Create a 'div' that changes the text to "MouseOver!" when hovered over.
const div = document.getElementById("hoverDiv");
div.addEventListener("mouseover",()=>{
    div.textContent  = "Mouse Over!";
})
//Output:The text changes to "Mouse Over!" when the mouse hovers over the 'div'.

//5.Mouse Leave Event 
// Create a 'div' that changes the text back to "Hover over me!" when the mouse leaves the 'div'.
const div2 = document.getElementById("hoverDiv1");
div2.addEventListener("mouseover",()=>{
    div2.textContent = "Mouse Over!"
});
div2.addEventListener("mouseleave",()=>{
    div2.textContent = "Hover over me!";
})
//Output:The text changes to "Mouse Over!" on hover and returns to "Hover over me!" when the mouseleaves.

//6.Keyboard Event Keypress
//Create an input field and listen for any keypress, logging the key pressed to the console.
const input = document.getElementById("myInput");
input.addEventListener("keypress",(event)=>{
    console.log(`Key pressed ${event.key}`);
})
//Output: Each key press in the input field lods the pressed key to the console

//7.Keyboard event Key Down 
//Create an input field and listen for the 'keydown' event, logging the key and its code to the console.
const input1 = document.getElementById("myInput1");
input1.addEventListener("keydown",(event)=>{
    console.log(`Key Down ${event.key},Code${event.code}`);
})
//Output: The key and its code are logged whenever  a key is pressed down in the input field.

//8.Keyboard Event Key Up
//Create an input field and listen for the 'keyup' event, logging the key that was released.
const input2 = document.getElementById("myInput2");
input2.addEventListener('keyup',(event)=>{
    console.log(`Key released ${event.key}`);
});
//Output: The key that was released is logged when a key is released in the input field.

//9.Multiple Event Listeners on the Same Element
//Create a button that log's "Button Clicked" on click and "Mouse Over!" on hover.
const button1 = document.getElementById("myButton1");
button1.addEventListener("click",()=>{
    console.log(("Button clicked!"));
});
button1.addEventListener("mouseover",()=>{
    console.log("Mouse Over!")
})
//Output:Logs "Mouse over!" when hovered and "Button Clicked! when clicked"

//10.Remove Event Listener on Button Click
//Write JavaScript that removes a click event listener from a button after it has been clickd once.
const button2 = document.getElementById("myButton2")
const handleClick=()=>{
console.log("Button clicked!");
button2.removeEventListener("click",handleClick);
}
button2.addEventListener("click",handleClick)
//Output: The button can only be clicked once.After the first click, the event listener is remove.

//11.Mouse Over and Mouse Leave Together
//Create a 'div' that change its background color to red on mouse over and reverts to the original color on mouse leave.
const div3 = document.getElementById("hoverDiv3");
div3.addEventListener("mouseover",()=>{
    div3.style.backgroundColor = "red";
});
div3.addEventListener('mouseleave',()=>{
    div3.style.backgroundColor = "green";
});
//Output: The 'div' turns red on hover and reverts back to green when the mouse leaves.

//12.Detecting the Keypress for Specific Keys
//Create an input field that only logs when the 'Enter' key is pressed.
const input3= document.getElementById("myInput3");
input3.addEventListener("keypress",(event)=>{
    if(event.key === 'Enter'){
        console.log("Enter key pressed")
    }
})
//Output:"Enter key pressed" is logged only when the 'Enter Key' is pressed.
