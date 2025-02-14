// var hello =  A variable is need it in order to call the function
// () The brackets are use to define the parameters with their type, empty means no parameters
// :string The return type is declared before the arrow 
// => The arrow function is before the body
// { return "Hello"; } Curl brackets are need when returning data
// (num:number) => num*2; When nothing to return we don't need to declare a return type nor use brackets
var hello = function () {
    return "Hello";
};
console.log(hello());
var hola = function () { return "Hola"; }; //Arrow function without parameters, and without return type declared nor body.
console.log(hola());
var add = function (num1, num2) { return num1 + num2; }; //Arrow function without return type declared nor body.
console.log(add(4, 5));
var mul = function (num1, num2) {
    return num1 * num2;
};
console.log(mul(4, 5));
var myarray = [];
for (var i = 0; i < 10; i++) {
    myarray.push(function () { return i; });
}
for (var i = 0; i < 10; i++) {
    console.log(myarray[i]());
}
