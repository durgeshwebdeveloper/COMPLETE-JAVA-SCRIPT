// =>Working with single dimensional Arrays
// =>Changing an array Element
// =>Looping in array

// =>Working with multidimensional Arrays.
// =>Looping in multidimensional Arrays.

//1.Create  a Single-Dimensional Array 
//Write a program to create a single-dimensional array of five colors and print them.
const colors = ['Red',"Blue","Green","Yellow","Purple"];
console.log(colors)
// Output:["Red","Blue","Green","Yellow","Purple"]

//2.Change an Array Element
//Write a program to change the second element of the array from the previous to "Orange".
const colors1 = ['Red',"Blue","Green","Yellow","Purple"];
colors[1] = "Orange";
console.log(colors);
//Output:['Red',"Orange","Green","Yellow","Purple"]

//3.Looping through an Array
// Write a program to loop through an array of numbers and print each number multiplied by 2.
const numbers = [1,2,3,4,5];
for(let i = 0; i <numbers.length; i++){
    console.log(numbers[i]*2);
}   
//Output:2,4,6,8,10

//4.Working with Multidimensional Arrays
// Create a 2D array (matrix) of 3*3 and initialize it with numbers from 1 to 9.
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix);
//Output: 
// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]


//5.Looping through Multidimensional Array
//Write a program to loop through the 2D array created in the previous and  print each element.
const matrix1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for(let i = 0; i<matrix1.length; i++){
    for(let j= 0; j<matrix[i].length; j++){
        console.log(matrix[i][j]);
    }
}
// Output: 1,2,3,4,5,6,7,8,9

//6.Adding an element to an Array
// Write a program to add an element to the end of an existing array of fruits.
const fruits = ["Apple","Banana","Cherry"];
fruits.push("Mango");  //Add Mango to the end
console.log(fruits) 
//Output:['Apple', 'Banana', 'Cherry', 'Mango']

//7.Removing an Element from an array
//Write a program to remove the first element from an array of vegetables.
const vegetables = ["Carrot","Potato","Tomato"];
vegetables.shift();    //Remove the first element
console.log(vegetables) 
// Output:['Potato', 'Tomato']

//8.Finding the length of an Array
// Write  a program to find and print the length of an array of students.
const students = ["Durgeh","Pratima","Diwakar","Anoop"];
const length = students.length;
console.log(length);   //Output:4

//9.Concatenating Two Arrays
// Write a program to concatenate two arrays of numbers.
const array1 = [1,2,3];
const array2 = [4,5,6];
const combinedArray = array1.concat(array2);
console.log(combinedArray);
//Output:[1, 2, 3, 4, 5, 6]

//10.Flattening a Multidimensional Array
// Write a program to flatten a 2D array into a single-dimensional array.
const nestedArray = [[1,2,3],[4,5],[6,7,8]];
const flatArray = nestedArray.flat();
console.log(flatArray);
// Output:[1, 2, 3, 4, 5, 6, 7, 8]
