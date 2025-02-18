//Extends is used for inheritance, in this example the BMW inherits the properties and methods.
class BMW{
    make:string;
    model:string;
    year:number;

    constructor(make:string,model:string,year:number){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    commonEngineFunc(){
        console.log("Common func");
    }

    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");
    }
}

class ThreeSeries extends BMW{ //Inherits BMW properties and methods.
    cruiseControlEnabled:boolean;

    cruiseControl(){
        this.cruiseControlEnabled = true;
        console.log("Crusing");
    }

    constructor(make:string,model:string,year:number,cruiseControlEnabled:boolean){
        super(make,model,year); //Super automatically calls the inherit class constructor and passes all the parameters
        this.cruiseControlEnabled = cruiseControlEnabled;
    }

    start(){ //Inheritance funcionalities can be override when used in the class
        console.log("Button Start"); //It should be the same as the one on the class, for the functionality to be
    }                                //overrided, otherwise it will be a new functionality.

    stop(){
        console.log("Button Stop");
    }
}

class FiveSeries extends BMW{
    parkingAssistEnabled:boolean;

    parkingAssist(){
        this.parkingAssistEnabled = true;
        console.log("Parked");
    }

    constructor(make:string,model:string,year:number,parkingAssistEnabled:boolean){
        super(make,model,year); //Super automatically calls the inherit class constructor and passes all the parameters
        this.parkingAssistEnabled = parkingAssistEnabled;
    }
}

var threeSeries = new ThreeSeries("BMW","328i",2018,false);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
console.log(threeSeries.cruiseControlEnabled);

threeSeries.commonEngineFunc(); //This is how inherited class functionalities can be called and use.
threeSeries.start();
threeSeries.stop();

threeSeries.cruiseControl(); //Class own functionality

var fiveSeries = new FiveSeries("BMW","355",2018,false);
console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);
console.log(fiveSeries.parkingAssistEnabled);

fiveSeries.commonEngineFunc(); //This is how inherited class functionalities can be called and use.
fiveSeries.start();
fiveSeries.stop();
fiveSeries.parkingAssist(); //Class own functionality