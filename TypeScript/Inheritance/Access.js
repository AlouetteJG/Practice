var Student = /** @class */ (function () {
    function Student() {
        this._score = 95; //Private fields cannot be used outside the class, but it can be called by a method.
    }
    Student.prototype.display = function () {
        console.log(this._score);
    };
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var student = new Student();
student.age = 29; //We are accessing to the method and not to the private field. Value can be set because of the set method.
console.log(student.age);
student.name = "Alondra";
// student.lastName = "Almazan"; This line give us an error because lastName is readonly and value cannot be set.
// student._age = 29; Because age is a private field, it cannot be access outside the class.
student.display(); //Score can be used by calling the method in which the field is used inside the class.
