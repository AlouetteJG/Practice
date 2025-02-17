interface IFlight{
    flightNo:number;
    from:string;
    to:string;
}

class Flight implements IFlight{ //Implements brings the interface rules
    flightNo: number;
    from: string;
    to: string;
    flightTime:string               //Other properties can be added regarding the ones inside the interface.

    constructor(flightNo:number,from:string,to:string,flightTime:string){
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
        this.flightTime = flightTime;
    }

    display(){
        console.log(this.flightNo+" "+this.from+" "+this.to+" "+this.flightTime);
    }
}

var flight1 = new Flight(789654, "LA", "Tokyo","10:30");
flight1.display();