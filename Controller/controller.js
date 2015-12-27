function loop(answer, questionNumber) {
	for (var i = 0; i < nationList.length; i++) {
		if (answer == 5) {
			if (nationList[i].question(questionNumber) == 5) {
				nationList[i].total += 20;
			}
			else if (nationList[i].question(questionNumber) == 4) {
				nationList[i].total += 10;
			}
			else if (nationList[i].question(questionNumber) == 3) {
				nationList[i].total += 0;
			}
			else if (nationList[i].question(questionNumber) == 2) {
				nationList[i].total -= 10;
			}
			else if (nationList[i].question(questionNumber) == 1) {
				nationList[i].total -= 20;
			}
		}
		else if (answer == 4) {
			if (nationList[i].question(questionNumber) == 5) {
				nationList[i].total += 10;
			}
			else if (nationList[i].question(questionNumber) == 4) {
				nationList[i].total += 20;
			}
			else if (nationList[i].question(questionNumber) == 3) {
				nationList[i].total += 10;
			}
			else if (nationList[i].question(questionNumber) == 2) {
				nationList[i].total += 0;
			}
			else if (nationList[i].question(questionNumber) == 1) {
				nationList[i].total -= 10;
			}
		}
		else if (answer == 3) {
			if (nationList[i].question(questionNumber) == 5) {
				nationList[i].total += 0;
			}
			else if (nationList[i].question(questionNumber) == 4) {
				nationList[i].total += 10;
			}
			else if (nationList[i].question(questionNumber) == 3) {
				nationList[i].total += 20;
			}
			else if (nationList[i].question(questionNumber) == 2) {
				nationList[i].total += 10;
			}
			else if (nationList[i].question(questionNumber) == 1) {
				nationList[i].total += 0;
			}
		}
		else if (answer == 2) {
			if (nationList[i].question(questionNumber) == 5) {
				nationList[i].total -= 10;
			}
			else if (nationList[i].question(questionNumber) == 4) {
				nationList[i].total += 0;
			}
			else if (nationList[i].question(questionNumber) == 3) {
				nationList[i].total += 10;
			}
			else if (nationList[i].question(questionNumber) == 2) {
				nationList[i].total += 20;
			}
			else if (nationList[i].question(questionNumber) == 1) {
				nationList[i].total += 10;
			}
		}
		else if (answer == 1) {
			if (nationList[i].question(questionNumber) == 5) {
				nationList[i].total -= 20;
			}
			else if (nationList[i].question(questionNumber) == 4) {
				nationList[i].total -= 10;
			}
			else if (nationList[i].question(questionNumber) == 3) {
				nationList[i].total += 0;
			}
			else if (nationList[i].question(questionNumber) == 2) {
				nationList[i].total += 10;
			}
			else if (nationList[i].question(questionNumber) == 1) {
				nationList[i].total += 20;
			}
		}
	}
}
