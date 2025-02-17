var Flight = /** @class */ (function () {
    function Flight(flightNo, from, to, flightTime) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
        this.flightTime = flightTime;
    }
    Flight.prototype.display = function () {
        console.log(this.flightNo + " " + this.from + " " + this.to + " " + this.flightTime);
    };
    return Flight;
}());
var flight1 = new Flight(789654, "LA", "Tokyo", "10:30");
flight1.display();
