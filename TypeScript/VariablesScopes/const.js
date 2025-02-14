var pi = 3.1416; //A declared const will be and always be the same value, and it can only be changed in here.
//pi = 4.5 //An error will be displayed because pi is a const value that cannot be changed
var mul = function (x, y) {
    return x * y;
};
mul = function (x, y) {
    return x + y;
};
console.log(mul(4, 5));
//In order to protect functions for data mutation, is better to declare it as const
var div = function (x, y) {
    return x / y;
};
/*div = function(x:number,y:number):number{ //div cannot be assign because is a constant
    return x-y;
}*/
console.log(div(20, 5));
