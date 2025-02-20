interface Employee{
    id:number;
}

let e1:Employee;

let e2 = {id:123,name="Alondra"};

e1=e2; // This line does work because e2 has two parameters
e2=e1; // e1 has only Id, reason why e2 it can't be assigned, name does not exist in e1.