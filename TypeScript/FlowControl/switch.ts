//Selection = [if-else, switch]
//Transfer = [break, continue, return]

var x:number = 3;

switch(x){
    case 1:
        console.log("Case 1");
    case 2:
        console.log("Case 2");
        break;
    case 3:
    case 4:
        console.log("Common Logic");
        break;
    default:
        console.log("Case deault")
}