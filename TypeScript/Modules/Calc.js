"use strict";
/*
export function add(n1:number,n2:number):number{  export at the beggining of the function works the same
    return n1+n2;                                 but export all the functions is an easy way
}*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
/*
function add(n1:number,n2:number):number{
    return n1+n2;
}

export default function sub(n1:number,n2:number):number{ //Default allows the function to be imported by other file without {}
    return n1-n2;
}

//With this statement functions can be called from other files, we can add all or just the need it functions.
export{add,sub};
*/
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (n1, n2) {
        return n1 + n2;
    };
    Calculator.prototype.sub = function (n1, n2) {
        return n1 - n2;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
