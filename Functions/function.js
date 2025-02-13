//Reuse
//Call or Event
function hello(name) {
    return "Hello " + name;
}
console.log(hello("Jazmin"));
//The typo for the parametors is need as well as the typo for the return value, which is set after parameters, colon and typo
function add(num1, num2) {
    return num1 + num2;
}
console.log("Sum is: " + add(12, 16));
function display(id, name, role) {
    console.log("Id", id);
    console.log("Name", name);
    if (role != undefined) { //Is undefined which allows to be an optional parameter
        console.log("Role", role);
    }
}
display(1, "Jazmin");
display(2, "Alondra", "Admin");
function display2(id, name, role) {
    if (role === void 0) { role = "Normal"; }
    console.log("Id", id);
    console.log("Name", name);
    console.log("Role", role);
}
display2(3, "Alondra");
display2(4, "Alondra", "Admin");
function calculator(fun) {
    console.log(fun(4, 60));
}
calculator(add);
function anything() {
    function subtract(n1, n2) {
        return n1 - n2;
    }
    return subtract;
}
console.log(anything()(30, 5));
var sub = anything();
console.log(sub(20, 5));
var hola = function saludo(name) {
    return "Hola " + name;
};
console.log(hola("Alondra"));
