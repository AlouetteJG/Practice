class Calculator{
    static sum(n1:number,n2:number):number{ //Class level functions
        return n1+n2;
    }
    static sub(n1:number,n2:number):number{ //Static is usefull to create functions inside the class.
        return n1-n2;
    }
}

console.log(Calculator.sum(10,20)); //We can access to the function by calling the class and passing the parameters.
console.log(Calculator.sub(20,5));