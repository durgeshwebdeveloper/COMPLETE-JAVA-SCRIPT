// =>Form Validation

//1. Basic Form Validation
//Create a form which with two fields : name and email. Validate that both fields are not empty when the user submits an alert if any field is empty.
const form = document.getElementById("myForm");
form.addEventListener("submit",(event)=>{
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
if(!name  || !email){
    event.preventDefault();
    alert('Both name and email are required');
}
});
//Ouput: If the user submits the form without fillinf in both the name and email ,an alert is shown saying "Both name and emails are required".

//2.Email Format Validation
//Create a form that validates whether the entered email is in a correct format.It it's Invalid , display an alert saying "Invalid email format".
const form1  = document.getElementById("emailForm");
form1.addEventListener("submit",(event)=>{
    const e1 = document.getElementById("email1").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if(!emailPattern.test(e1)){
    e1.preventDefault();
    alert("Invalid email format.");
}
});
//Output: If the entered email doesn't match the format("user@example.com"),an alert is shown saying "Invalid email format."

//3.Password Length Validation 
//Create a form that validates that the entered password is atleast 8 characters long.It it's shorter display an alert saying "Password must be atleast 8 Characters long."
const  form2 = document.getElementById("password");
form2.addEventListener("submit",(event)=>{
    const password = document.getElementById("password").value;
    if(password.length<8){
        event.preventDefault();
        alert("Password must be atleast 8 characters long.");
    }
})
//Output: If the password is shorter than 8 characters, an alert is shown as saying "Password must be atlest 8 characters long."

//4.Confirm Password Validation
//Create a form that has two password fields. Validate that both passwords match when submitted. If they don't match,shown an alert saying "Paswords do not match."
const form3  =document.getElementById("confirmPasswordForm");
form3.addEventListener('submit',(event)=>{
    const password1 = document.getElementById("password1").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if(password1 !== confirmPassword){
        event.preventDefault();
        alert("Password do not match");
    }
});
//Output:If two password don't match , an alert is shown saying "Password do not match."

//5.Number Range Validation
// Create a form that validates a number input to ensure it is between 1 and 100. If the number is out of range, display an alert saying, "Number must be between 1 and 100."
const form4 = document.getElementById("numberForm");
form4.addEventListener('submit',(event)=>{
    const number =parseInt(document.getElementById("number").value);
    
if (number<1    || number>100){
    event.preventDefault();
    alert("Number must be between 1 and 100.");
}
});
//Output:If the entered number is outside the range of 1 to 100 , an alert is shown saying "Number must be between 1 to 100."