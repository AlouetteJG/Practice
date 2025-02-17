interface Exterior{
    color:string;
    numOfDoors:number;
}

interface Interior{
    seats:number;
    auto:boolean;
}

interface Car extends Exterior, Interior{ //We can extend the properties by using extends reserved word, 
    make:string;                          //now properties inside car, exterior and interior belongs to car.
    model:string;
    year:number;
}

var car:Car = {
    make:"Honda",
    model:"Civic",
    year:2018,
    color:"Black",
    numOfDoors:4,
    seats:4,
    auto:true
}