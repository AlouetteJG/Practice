//Interface helps to avoid the values for changing when using an object in someother part of the code.
//Interfaces are basically rules to protect the objects values.
//Interface will not be reflected on the JS file.
interface IProduct{  //The I before the name can help to identify that is an interface.
    id:number;
    name:string;
    description?:string; //The question mark means that is an optional propertie.
    price:number;
    display():void; //Methods can be added in the interface, and it will became a requried propertie
}

var product1:IProduct = { //Object is force to add all the propierties and type inside interface.
    id:123,
    name:"IPhone",
    description:"Smartphone",
    price:1000,
    display():void{
        console.log(this.id+" "+this.name);
    }
}

var product2:IProduct = { //Object with optional propertie.
    id:123,
    name:"IPhone",
    price:1000,
    display():void{
        console.log(this.id+" "+this.name);
    }
}