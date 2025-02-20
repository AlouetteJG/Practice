/*import{add as sum,sub} from './Calc' //Import all the fuctions or only the ones need it
import{add as sum} from './Calc'//Alias can be use to make it easy to indentify the used function, with function as alias.

import sub from './Calc' // This is the way to import a default export function.

import * as calc from './Calc' //Another way to import is by calling all the functions inside a file

console.log(sum(6,8)); // add function is called from the Calc.ts file
console.log(sub(25,9)); // sub function is called from the Calc.ts file
console.log(calc.add(9,11));
*/

// import { Calculator } from "./Calc"; //Imports the class and all the functions in it
import { Calculator as calc } from "./Calc"; // Alias can be added when importing classes as well

//var calculator = new Calculator; //Create an object to access to the functions inside the class.
var calculator = new calc; //An object can be created by the class alias
console.log(calculator.add(6,8)); //Call the functions using the object dot the function.
console.log(calculator.sub(25,9));