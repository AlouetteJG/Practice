//Reuse
//Call or Event

function hello(name:string):String{ //Fuction need only one parameter to work
    return "Hello "+name;
}

console.log(hello("Jazmin"));

//The typo for the parametors is need as well as the typo for the return value, which is set after parameters, colon and typo
function add(num1:number,num2:number):number{ //Function needs both parameters to work
    return num1+num2;
}

console.log("Sum is: "+add(12,16));

function display(id:Number,name:string,role?:string){ //role is an optional parameter marked by the question mark ?
    console.log("Id",id);
    console.log("Name",name);
    if(role!=undefined){ //Is undefined which allows to be an optional parameter
    console.log("Role",role);
    }
}

display(1,"Jazmin");
display(2,"Alondra","Admin");

function display2(id:Number,name:string,role:string="Normal"){ //role is set with a default value, been role an optional parameter
    console.log("Id",id);
    console.log("Name",name);
    console.log("Role",role);
}

display2(3,"Alondra");
display2(4,"Alondra","Admin");

function calculator(fun:any):void{ //Function using functions as parameters
    console.log(fun(4,60));
}

calculator(add);

function anything():any{ //Function that returns a function
    function subtract(n1:number,n2:number):number{
        return n1-n2;
    }
    return subtract;
}

console.log(anything()(30,5));

var sub = anything();
console.log(sub(20,5));

var hola = function (name:string):string{ //Anonymous function, function name is declared as a variable
    return "Hola "+name;
}

console.log(hola("Alondra"));