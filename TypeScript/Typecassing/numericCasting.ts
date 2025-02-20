let x:string = prompt("Enter a number"); // x is getting an string from the prompt 
console.log(x+3); // x is an string that recives 10, so this lane returns 103 

let y:number = parseInt(prompt("Enter a number")); //With parseInt we can change the string to int, in order to use it as number
console.log(y+3); // Now y recives 10 as string, but is changed to number so the result will be 13.

// parseFloat is for decimal numbers
let z:number = parseFloat(prompt("Enter a number")); 
console.log(z+3); //z is now a decimal number, if z=12.5 then the result will be 15.5

let courses = ["April","May","June","July"];
//console.log(courses); This line will print us an error because we haven't specified which space, and we didn't create a for loop to print all the data inside courses. 
console.log(courses.toString()); //When is set toString, then we can visualize as string what is inside courses array.

let myBool = false; //A boolean is set, and it can be use by its value.
let s:string = myBool.toString(); //With toString we can visualize as string the value inside myBool
console.log(s); // False is print as string.