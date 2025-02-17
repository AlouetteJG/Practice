//Interface blocks the function, to avoid adding more parameters or changing the return type, and so on.
interface Add{ 
    (x:number,y:number):void //If a return type is not specified or if its void, then the return type can be modified.
    
}

interface Sub{
    (x:number,y:number) //If a return type is not specified or if its void, then the return type can be modified.
}

var add:Add;
var sub:Sub;

add=function (x:number,y:number):number{
    return x+y;
}

sub=function (a:number,b:number):number{ //Since return type is not specified, the return can be number, string, etc.
    return a-b;
}

sub=function (a:number,b:number):string{ 
    return "The numbers are "+a+b;
}

console.log(sub(5,10));
console.log(add(5,10));