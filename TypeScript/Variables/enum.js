//Enums have constants values
var Gender;
(function (Gender) {
    Gender[Gender["Female"] = 0] = "Female";
    Gender[Gender["Male"] = 1] = "Male";
})(Gender || (Gender = {}));
console.log(Gender.Female);
console.log(Gender.Male);
console.log(Gender[0]);
console.log(Gender[1]);
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Monday"] = 0] = "Monday";
    Weekday[Weekday["Tuesday"] = 3] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 4] = "Wednesday";
    Weekday[Weekday["Thursday"] = 5] = "Thursday";
    Weekday[Weekday["Friday"] = 6] = "Friday";
})(Weekday || (Weekday = {}));
console.log(Weekday.Monday);
console.log(Weekday[6]);
