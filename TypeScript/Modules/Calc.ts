/*
export function add(n1:number,n2:number):number{  export at the beggining of the function works the same
    return n1+n2;                                 but export all the functions is an easy way
}*/

/*
function add(n1:number,n2:number):number{ 
    return n1+n2;
}

export default function sub(n1:number,n2:number):number{ //Default allows the function to be imported by other file without {}
    return n1-n2;
}

//With this statement functions can be called from other files, we can add all or just the need it functions.
export{add,sub}; 
*/

export class Calculator{
    add(n1:number,n2:number):number{
        return n1+n2;
    }

    sub(n1:number,n2:number):number{
        return n1-n2;
    }
}