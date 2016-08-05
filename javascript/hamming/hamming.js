// module for the hamming exercise
var Hamming = function () {}

Hamming.prototype.compute = function (dnaStrand, dnaStrandCompare) {
	if (dnaStrand.length != dnaStrandCompare.length) {
		throw new Error('DNA strands must be of equal length.');
	}

	var diff = 0;
	for (var i = 0, len = dnaStrand.length; i < len; i++) {
		if (dnaStrand[i] != dnaStrandCompare[i]) {
			diff++;
		}
	}
	return diff;
}

module.exports = Hamming
