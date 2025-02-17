class Passenger{   //Define a class with properties
    firstName:string;
    lastName:string;
    frequentFlyerNo:number;

    constructor(firsName:string,lastName:string,frequentFlyerNo:number){ //Constructor to set the properties value.
        this.firstName = firsName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }

    display(){ //Function properties
        console.log(this.firstName+" "+this.lastName+" "+this.frequentFlyerNo);
    }
}

// var passenger1 = new Passenger(); When a constructor is added the values are need it, values should be added inside the ()
var passenger1 = new Passenger("Alondra","Almazan",159); //Create an object using Passenger class
//console.log(passenger1.firstName+" "+passenger1.lastName+" "+passenger1.frequentFlyerNo);
passenger1.display();

var passenger2 = new Passenger("Jazmin","Almazan",753); //Create an object using Passenger class and constructor to se values
//console.log(passenger2.firstName+" "+passenger2.lastName+" "+passenger2.frequentFlyerNo);
passenger2.display();


for(let item in passenger1){
    if(passenger1[item] instanceof Function){ //This condition validates if there is a function indise the class 
        continue; //Function can be skip and continue with the next condition.
    }else{
        console.log(item);
        console.log(passenger1[item]);
    }
}