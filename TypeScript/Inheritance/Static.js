var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.display = function () {
        Check.bankName = "Banorte";
        console.log(Check.bankName);
    };
    Check.bankName = "Santander"; //The value is set and cannot be accessable outside the class.
    return Check;
}());
var check = new Check();
check.accNo;
// check.bankName; This line returns an error, static field doesn't exists in object check.
Check.bankName = "BBVA"; //Class propertie can be override when using the class name.
console.log(Check.bankName);
check.display();
