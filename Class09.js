// ==>Window Event
//    =>Scroll
//    =>Resize

// => Onchange Event
// =>Focus Event

//1.Window Scroll Event 
//Write a JavaScript that logs "Scrolled" to the console whenever the user scrolls the page.
window.addEventListener('scroll',()=>{
    console.log("Scrolled")
})
//Output:"Scrolled" is logged every time the user scrolls the page.

//2.Window Scroll Position 
//Create a script that logs the current scroll position (in Pixels) to the console when the user scrolls.
window.addEventListener('scroll',()=>{
    console.log(`Scroll Position ${window.scrollY}px`)
})
//Output:The current scroll position is logged to the console as the user scrolls.

//3.Window Resize Event 
//Write JavaScript that logs the new width and height of the window whenever the window is resized.
window.addEventListener('resized',()=>{
    console.log(`Window size ${window.innerWidth}x ${window.innerHeight}`);
});
//Output: The new window sized (width and height) is logged every time the window is resized.

//4.Window Scroll Event Show/Hide Button
// Create a button that appears when the user scrolls down 100 pixels and disappears when the user scrolls backup.
const scrollBtn = document.getElementById("scrollBtn");
    window.addEventListener('scroll',()=>{
        if(window.scrollY>100){
            scrollBtn.style.display = "block";
        }
        else{
            scrollBtn.style.display = "none";
        }
    });
//Output:The button appears when the user scrolls past 100 pixels and disappears when scrolled back up.


//5.Window Resize Change Background Color
// Create a script that changes the background color of the body to red if the window width is less thean 500 pixels , and back to  white if it is greaater than or equal to 500 pixels. 
// const changeBackgroundColor  = ()=>{
//     if(window.innerWidth < 500){
//         document.body.style.backgroundColor = "red";
//     }
//     else{
//         document.body.style.backgroundColor = "white"
//     }
// };
// window.addEventListener("resize",changeBackgroundColor);
// changeBackgroundColor();  //Call on initial load
// //Output: The background color changes baed on the window's width.

//6.Onchange Event Text Input
//Create an input field that logs the current value of the input to the console whenever the user types in it.
const input = document.getElementById("myInput");
    input.addEventListener("input",()=>{
        console.log(input.value)
    })
//ouput:The current value of the input field is logged as the user types.

//7.Onchange Event Select DropDown
// Create a dropdown menu that logs the selected option to the console whenever the selectoin changes.
document.addEventListener("DOMContentLoaded",()=>{     //jb kabhi kaam na kare to use kare 
const select = document.getElementById("mySelect");
select.addEventListener("change",()=>{
    console.log(`Select: ${select.value}`)
});
});
//Output:The selected option is logged whenever the user changes the selection.

//8.Focus Event Input Field
// Create an input field that logs "Input focused" to the console when the field is focused,and "Input Blurred" when it loses focus.
const input1 = document.getElementById("myInput1");
input1.addEventListener('focus',()=>{
    console.log("Input Focused");
});
input1.addEventListener('blur',()=>{
    console.log("Input Blurred");
})
//Output:"Input focused" is logged when the input is focused, and  "Input blurred" is logged when it loses focus.

//9.Onchange Event Text Area Character Counter
//Create a Text Area that displays a character counter below it, updating as the user types
const textArea = document.getElementById("myTextArea");
const charCount = document.getElementById("charCount");
textArea.addEventListener('input',()=>{
    charCount.textContent = `Characters ${textArea.value.length}`;
});
//Output:The character count updates as the user types in the text area.

//10.Focus Event Highlight Input Field
//Create an input field that changes its border color to blue when focussed and reverts to the default color when it loses focus.
document.addEventListener("DOMContentLoaded",()=>{ 
const input2 = document.getElementById("myInput2");
input2.addEventListener('focus',()=>{
    input2.style.border = "2px solid blue";
})
input2.addEventListener('blur',()=>{
    input2.style.border = "2px solid black";
});
});
//Output:The input field's border color turns blue when focused and reverts to black when blurred.