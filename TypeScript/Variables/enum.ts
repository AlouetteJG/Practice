//Enums have constants values

enum Gender{
    Female,
    Male
}

console.log(Gender.Female);
console.log(Gender.Male);
console.log(Gender[0]);
console.log(Gender[1]);


enum Weekday{
    Monday,
    Tuesday=3,
    Wednesday=4,
    Thursday=5,
    Friday=6
}

console.log(Weekday.Monday);
console.log(Weekday[6]);