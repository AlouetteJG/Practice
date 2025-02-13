var student = {         //Object
    firstname:"Jazmin",      //Properties
    lastName:"Almazan",
    score:90
};

console.log(student.firstname);  //Acces to object student and propertie name
console.log(student.score);

//For

for(var item in student){
    console.log(item);
    console.log(student[item]);
}

var{firstname,lastName} = student; //Properties name should match with the student object properties
console.log(firstname+" "+lastName);

