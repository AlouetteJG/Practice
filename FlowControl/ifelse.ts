//Selection = [if-else, switch]

var x:number = 30;
var y:number = 30;
var z:number = 40;

if(x>y && x>z){
    console.log("X is greater");
}else if(y>x && y>z){
    console.log("Y is greater");
}else if(z>x && z>y){
    console.log("Z is greater");
}else{
    console.log("Numbers are equal");
}