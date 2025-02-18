//If "targeting ECMASScript 5" error is displayed, we type tsc --target es5 fileName.ts to compile
class Student{
    public name:string; //Public means that it can be used in other parts of the code.
    public readonly lastName:string; //When readonly is set, means that the value can not be set even if is public.
    private _score:number = 95; //Private fields cannot be used outside the class, but it can be called by a method.
    private _age:number; //Underscore before the name is a good practice to let know that is a private field. Private can only be used within class

    display(){
        console.log(this._score);
    }

    get age():number{ //In javascript or typescrip is not use to declare the method name as getAge or setAge.
        return this._age;
    }

    set age(age:number){  //Just the name is used for both. Because of the set and get reserved words.
        this._age = age;
    }
}

var student = new Student();
student.age = 29; //We are accessing to the method and not to the private field. Value can be set because of the set method.
console.log(student.age);
student.name = "Alondra";
// student.lastName = "Almazan"; This line give us an error because lastName is readonly and value cannot be set.
// student._age = 29; Because age is a private field, it cannot be access outside the class.
student.display(); //Score can be used by calling the method in which the field is used inside the class.