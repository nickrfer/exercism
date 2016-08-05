// module for the leap exercise.

var Leap = function (year) {
	this.year = year;
}

Leap.prototype.isLeap = function () {
	var leap = false;
	if ((this.year % 4 == 0 && this.year % 100 > 0) 
		|| (this.year % 100 == 0 && this.year % 400 == 0)) {
		leap = true;
	}
	return leap;
}

module.exports = Leap
