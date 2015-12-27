var nation = function(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12) {
	this.total = 0;
	this.q1 = q1;
	this.q2 = q2;
	this.q3 = q3;
	this.q4 = q4;
	this.q5 = q5;
	this.q6 = q6;
	this.q7 = q7;
	this.q8 = q8;
	this.q9 = q9;
	this.q10 = q10;
	this.q11 = q11;
	this.q12 = q12;
	this.question = function(number) {
		switch(number) {
			case 1:
				return this.q1;
				break;
			case 2:
				return this.q2;
				break;
			case 3:
				return this.q3;
				break;
			case 4:
				return this.q4;
				break;
			case 5:
				return this.q5;
				break;
			case 6:
				return this.q6;
				break;
			case 7:
				return this.q7;
				break;
			case 8:
				return this.q8;
				break;
			case 9:
				return this.q9;
				break;
			case 10:
				return this.q10;
				break;
			case 11:
				return this.q11;
				break;
			case 12:
				return this.q12;
				break;
		}
	}
}

var yankeedom = new nation(5, 5, 1, 4, 2, 1, 5, 4, 1, 4, 1, 5);
var leftCoast = new nation(4, 5, 5, 5, 5, 4, 5, 5, 2, 5, 2, 5);
var newNetherland = new nation(3, 5, 3, 5, 5, 5, 5, 4, 3, 5, 5, 5);
var elNorte = new nation(5, 4, 4, 5, 4, 2, 2, 3, 4, 3, 4, 2);
var midlands = new nation(5, 2, 2, 4, 1, 1, 2, 3, 4, 4, 1, 2);
var greaterAppalachia = new nation(2, 1, 5, 1, 4, 4, 1, 1, 1, 1, 1, 1);
var farWest = new nation(3, 1, 3, 3, 1, 4, 1, 2, 1, 3, 2, 1);
var deepSouth = new nation(1, 1, 1, 1, 2, 5, 1, 1, 5, 1, 5, 1);
var tidewater = new nation(1, 2, 1, 2, 2, 5, 2, 2, 4, 1, 4, 1);

var nationList = [yankeedom, leftCoast, farWest, deepSouth, elNorte, greaterAppalachia, newNetherland, tidewater, midlands];