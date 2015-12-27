function newGame() {

	alert("Welcome to my Quiz: American Nations. Within, you will answer a number of questions which will determine where in America your culture lies. Good Luck.")
	questionOne();

	function questionOne() {
		var answer = prompt("Society should be organised to benefit the middle class\n\n5 - Strongly Agree\n4 - Somewhat Agree\n3 - Neutral\n2 - Slightly Disagree\n1 - Strongly Disagree");
		if (answer == 5 || answer == 4 || answer == 3 || answer == 2 || answer == 1) {
			loop(answer, 1);
		}
		else {
			alert("Try again");
			questionOne();
		}
		questionTwo();
	}

	function questionTwo() {
		var answer = prompt("Government is generally trustworthy and beneficial to society\n\n5 - Strongly Agree\n4 - Somewhat Agree\n3 - Neutral\n2 - Slightly Disagree\n1 - Strongly Disagree");
		if (answer == 5 || answer == 4 || answer == 3 || answer == 2 || answer == 1) {
			loop(answer, 2);
		}
		else {
			alert("Try again");
			questionTwo();
		}
		questionThree();
	}

	function questionThree() {
		var answer = prompt("Individual Expression and Fulfilment are more important than social equality or tradition\n\n5 - Strongly Agree\n4 - Somewhat Agree\n3 - Neutral\n2 - Slightly Disagree\n1 - Strongly Disagree");
		if (answer == 5 || answer == 4 || answer == 3 || answer == 2 || answer == 1) {
			loop(answer, 3);
		}
		else {
			alert("Try again");
			questionThree();
		}
		questionFour();
	}
	
	function questionFour() {
		var answer = prompt("Non-white cultures tend to make America a stronger, more diverse place\n\n5 - Strongly Agree\n4 - Somewhat Agree\n3 - Neutral\n2 - Slightly Disagree\n1 - Strongly Disagree");
		if (answer == 5 || answer == 4 || answer == 3 || answer == 2 || answer == 1) {
			loop(answer, 4);
		}
		else {
			alert("Try again");
			questionFour();
		}
		questionFive();
	}

	function questionFive() {
		var answer = prompt("I would call myself an ambitious person\n\n5 - Strongly Agree\n4 - Somewhat Agree\n3 - Neutral\n2 - Slightly Disagree\n1 - Strongly Disagree");
		if (answer == 5 || answer == 4 || answer == 3 || answer == 2 || answer == 1) {
			loop(answer, 5);
		}
		else {
			alert("Try again");
			questionFive();
		}
		questionSix();
	}

	function questionSix() {
		var answer = prompt("The business owner is more important than his employees\n\n5 - Strongly Agree\n4 - Somewhat Agree\n3 - Neutral\n2 - Slightly Disagree\n1 - Strongly Disagree");
		if (answer == 5 || answer == 4 || answer == 3 || answer == 2 || answer == 1) {
			loop(answer, 6);
		}
		else {
			alert("Try again");
			questionSiz();
		}
		questionSeven();
	}

	function questionSeven() {
		var answer = prompt("Gun laws should be strengthened for society's own protection\n\n5 - Strongly Agree\n4 - Somewhat Agree\n3 - Neutral\n2 - Slightly Disagree\n1 - Strongly Disagree");
		if (answer == 5 || answer == 4 || answer == 3 || answer == 2 || answer == 1) {
			loop(answer, 7);
		}
		else {
			alert("Try again");
			questionSeven();
		}
		questionEight();
	}

	function questionEight() {
		var answer = prompt("The government should pass laws relating to the environment's protection\n\n5 - Strongly Agree\n4 - Somewhat Agree\n3 - Neutral\n2 - Slightly Disagree\n1 - Strongly Disagree");
		if (answer == 5 || answer == 4 || answer == 3 || answer == 2 || answer == 1) {
			loop(answer, 8);
		}
		else {
			alert("Try again");
			questionEight();
		}
		questionNine();
	}

	function questionNine() {
		var answer = prompt("The government should not interfere with the lives of individuals or companies in anyway\n\n5 - Strongly Agree\n4 - Somewhat Agree\n3 - Neutral\n2 - Slightly Disagree\n1 - Strongly Disagree");
		if (answer == 5 || answer == 4 || answer == 3 || answer == 2 || answer == 1) {
			loop(answer, 9);
		}
		else {
			alert("Try again");
			questionNine();
		}
		questionTen();
	}

	function questionTen() {
		var answer = prompt("We should be more accepting of minority groups including the LGBT community and women\n\n5 - Strongly Agree\n4 - Somewhat Agree\n3 - Neutral\n2 - Slightly Disagree\n1 - Strongly Disagree");
		if (answer == 5 || answer == 4 || answer == 3 || answer == 2 || answer == 1) {
			loop(answer, 10);
		}
		else {
			alert("Try again");
			questionTen();
		}
		questionEleven();
	}

	function questionEleven() {
		var answer = prompt("Money and Power is the best measure of success, in comparison to personal/intellectual fulfilment.\n\n5 - Strongly Agree\n4 - Somewhat Agree\n3 - Neutral\n2 - Slightly Disagree\n1 - Strongly Disagree")
		if (answer == 5 || answer == 4 || answer == 3 || answer == 2 || answer == 1) {
			loop(answer, 11);
		}
		else {
			alert("Try again");
			questionEleven();
		}
		questionTwelve();
	}

	function questionTwelve() {
		var answer = prompt("Where do you stand on the Affordable Care Act.\n\n5 - Strongly Agree\n4 - Somewhat Agree\n3 - Neutral\n2 - Slightly Disagree\n1 - Strongly Disagree")
		if (answer == 5 || answer == 4 || answer == 3 || answer == 2 || answer == 1) {
			loop(answer, 12);
		}
		else {
			alert("Try again");
			questionTwelve();
		}
		result();
	}



	function result() {
		var culture = Math.max(yankeedom.total, leftCoast.total, deepSouth.total, greaterAppalachia.total, tidewater.total, midlands.total, newNetherland.total, elNorte.total, farWest.total);
		if (culture == yankeedom.total) {
			alert("You should live in Yankeedom, characterised by Boston and the North");
		}
		else if (culture === leftCoast.total) {
			alert("You should live on the Left Coast, e.g. San Francisco");
		}
		else if (culture === deepSouth.total) {
			alert("You should live in the Deep South, e.g. Atlanta or Jackson");
		}
		else if (culture === greaterAppalachia.total) {
			alert("You should live in Greater Appalachia, e.g. Dallas or Oklahoma");
		}
		else if (culture === tidewater.total) {
			alert("You should live in Tidewater, e.g. Virginia or NC");
		}
		else if (culture === midlands.total) {
			alert("You should live in the Midlands, e.g. Philadelphia");
		}
		else if (culture === newNetherland.total) {
			alert("You should live in New Netherland, or New York");
		}
		else if (culture === elNorte.total) {
			alert("You should live in el Norte, like LA or Phoenix");
		}
		else if(culture === farWest.total) {
			alert("You should live in the Far West, such as Denver");
		}
		alert("Your scores were:\n\nYankeedom: " + yankeedom.total + "\nLeft Coast: " + leftCoast.total + "\nDeep South: " + deepSouth.total + "\nGreater Appalachia: " + greaterAppalachia.total + "\nTidewater: " + tidewater.total + "\nEl Norte: " + elNorte.total + "\nMidlands: " + midlands.total + "\nNew Netherland: " + newNetherland.total + "\nFar West: " + farWest.total)
		return;
	}
}

newGame();