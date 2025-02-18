class Check{
    static bankName:string="Santander"; //The value is set and cannot be accessable outside the class.
    customerName:string;
    accNo:number;
    routingNo:number;

    display(){
        Check.bankName = "Banorte";
        console.log(Check.bankName);
    }
}

var check = new Check();
check.accNo;
// check.bankName; This line returns an error, static field doesn't exists in object check.
Check.bankName = "BBVA"; //Class propertie can be override when using the class name.
console.log(Check.bankName);
check.display();