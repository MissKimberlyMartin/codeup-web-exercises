(function() {
    "use strict";

    // create a circle object
    // TODO: complete method and return the proper value
    // hint: area = pi * radius^2

    var circle = {
        radius: 3,
        getArea:
            function () {
                var area = Math.PI * Math.pow(this.radius, 2);
                return area;
        },

        // If doRounding is true, round the result to the nearest integer.
        // Otherwise, output the complete value

        logInfo:
            function (doRounding) {
                var areaCircle = this.getArea();
                if (doRounding) {
                    areaCircle = Math.round(areaCircle);
                }
                console.log("Area of a circle with radius: " + this.radius + ", is: " + areaCircle);
            }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

})();