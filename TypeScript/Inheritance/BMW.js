var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Extends is used for inheritance, in this example the BMW inherits the properties and methods.
var BMW = /** @class */ (function () {
    function BMW(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    BMW.prototype.commonEngineFunc = function () {
        console.log("Common func");
    };
    BMW.prototype.start = function () {
        console.log("Start");
    };
    BMW.prototype.stop = function () {
        console.log("Stop");
    };
    return BMW;
}());
var ThreeSeries = /** @class */ (function (_super) {
    __extends(ThreeSeries, _super);
    function ThreeSeries(make, model, year, cruiseControlEnabled) {
        var _this = _super.call(this, make, model, year) || this; //Super automatically calls the inherit class constructor and passes all the parameters
        _this.cruiseControlEnabled = cruiseControlEnabled;
        return _this;
    }
    ThreeSeries.prototype.cruiseControl = function () {
        this.cruiseControlEnabled = true;
        console.log("Crusing");
    };
    ThreeSeries.prototype.start = function () {
        console.log("Button Start");
    };
    ThreeSeries.prototype.stop = function () {
        console.log("Button Stop");
    };
    return ThreeSeries;
}(BMW));
var FiveSeries = /** @class */ (function (_super) {
    __extends(FiveSeries, _super);
    function FiveSeries(make, model, year, parkingAssistEnabled) {
        var _this = _super.call(this, make, model, year) || this; //Super automatically calls the inherit class constructor and passes all the parameters
        _this.parkingAssistEnabled = parkingAssistEnabled;
        return _this;
    }
    FiveSeries.prototype.parkingAssist = function () {
        this.parkingAssistEnabled = true;
        console.log("Parked");
    };
    return FiveSeries;
}(BMW));
var threeSeries = new ThreeSeries("BMW", "328i", 2018, false);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
console.log(threeSeries.cruiseControlEnabled);
threeSeries.commonEngineFunc(); //This is how inherited class functionalities can be called and use.
threeSeries.start();
threeSeries.stop();
threeSeries.cruiseControl(); //Class own functionality
var fiveSeries = new FiveSeries("BMW", "355", 2018, false);
console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);
console.log(fiveSeries.parkingAssistEnabled);
fiveSeries.commonEngineFunc(); //This is how inherited class functionalities can be called and use.
fiveSeries.start();
fiveSeries.stop();
fiveSeries.parkingAssist(); //Class own functionality
