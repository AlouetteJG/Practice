var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.sum = function (n1, n2) {
        return n1 + n2;
    };
    Calculator.sub = function (n1, n2) {
        return n1 - n2;
    };
    return Calculator;
}());
console.log(Calculator.sum(10, 20)); //We can access to the function by calling the class and passing the parameters.
console.log(Calculator.sub(20, 5));
