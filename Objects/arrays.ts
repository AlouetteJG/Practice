var courses = ["Angular", "React", "ES6", "JMS",5]; //Array takes the type depending on what type of data is inside, better if the typo is set
courses.push("Spring Security");
courses.push(10);

for(var i=0;i<courses.length;i++){
    console.log(courses[i]);
}

var x = courses[0];

var[a,c,b] = courses; //De-Structuring Arrays
console.log(a);
console.log(b);
console.log(c);