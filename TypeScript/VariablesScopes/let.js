// When using var the variable can be used in all the code
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);
// When using let the variable can only be used inside the code block.
for (var j = 0; j < 10; j++) {
    console.log(j);
}
//console.log(j); j is not found because is an "let" variable
